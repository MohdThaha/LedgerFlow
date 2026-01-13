// redisClient.js
require('dotenv').config();
const Redis = require('ioredis');
const { getSecretValue } = require('../../services/azureKeyVaultService');

let redisClient = null;

async function createRedisClient() {
  const REDIS_PORT = process.env.REDIS_PORT || 6380; 
  const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
  let REDIS_PASSWORD;

  // Load secrets
  if (['PROD', 'SBX'].includes(process.env.ENVIRONMENT)) {
    REDIS_PASSWORD = await getSecretValue('REDIS-PASSWORD');
  } else {
    REDIS_PASSWORD = process.env.REDIS_PASSWORD || undefined;
  }

  const client = new Redis({
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
    maxRetriesPerRequest: null, // prevent crash when server is down
    retryStrategy(times) {
      const delay = Math.min(times * 500, 30000); // exponential backoff up to 30s
      console.warn(`⚠️ Redis reconnect attempt #${times} in ${delay}ms`);
      return delay;
    },
  });

  // Event logging
  client.on('error', (err) => {
    console.error('❌ Redis connection error:', err.message);
  });

  client.on('connect', () => {
    console.log(
      `⚡ ${process.env.ENVIRONMENT || 'DEV'} ${process.env.PROJECT_NAME || ''} REDIS CONNECTED SUCCESSFULLY ON PORT: ${REDIS_PORT} ⚡`
    );
  });

  client.on('end', () => {
    console.warn('⚠️ Redis connection closed. Waiting for reconnect...');
  });

  return client;
}

// Export a single shared promise client
module.exports = (async () => {
  if (!redisClient) {
    redisClient = await createRedisClient();
  }
  return redisClient;
})();
