const { ClientSecretCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const tenantId = process.env.AZURE_TENANT_ID;
const clientId = process.env.AZURE_CLIENT_ID;
const clientSecret = process.env.AZURE_CLIENT_SECRET; 
const keyVaultName = process.env.KEY_VAULT_NAME;     

let client;

if (tenantId && clientId && clientSecret && keyVaultName) { 
  const keyVaultUrl = `https://${keyVaultName}.vault.azure.net`;  
  const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
  client = new SecretClient(keyVaultUrl, credential);
} else {
  console.warn("⚠️ Azure Key Vault credentials are missing from .env. Secrets will not be fetched from Key Vault.");
}

async function getSecretValue(secretName) {
  if (!client) {
    throw new Error("Azure Key Vault is not properly configured. Missing environment variables.");
  }

  try {
    const secret = await client.getSecret(secretName);
    return secret.value;
  } catch (err) {
    console.error(`❌ Failed to retrieve secret "${secretName}":`, err.message);
    throw err;
  }
}

module.exports = { getSecretValue };
