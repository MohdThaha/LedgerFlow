const nodemailer = require('nodemailer');
const { getSecretValue } = require("../services/azureKeyVaultService");



// Async function to initialize transporter with secret
async function createTransporter() {
  try {
    let PASSWORD;

    if (process.env.ENVIRONMENT === "PROD" || process.env.ENVIRONMENT === "SBX") {
      PASSWORD = await getSecretValue('SEWNEX-PASSWORD');      
    } else {
      PASSWORD = process.env.PASSWORD;
    } 
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // True for port 465, false for other ports
      auth: {
        user: process.env.EMAIL,
        pass: PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    return transporter;
  } catch (err) {
    console.error("❌ Failed to create transporter:", err);
    return null;
  }
}

// Send error email
async function emailSend(functionName, errorMessage, errorStack) {
  const transporter = await createTransporter();

  if (!transporter) return false;

  try {
    await transporter.verify();
  } catch (verifyErr) {
    console.error('❌ SMTP Login Failed:', verifyErr);
    return false;
  }

  const mailOptions = {
    from: `"${process.env.ENVIRONMENT} ${process.env.PROJECT_NAME}" <${process.env.EMAIL}>`,
    to: email,
    subject: `🚨 ${process.env.ENVIRONMENT} ${process.env.PROJECT_NAME} Error Alert - ${functionName}`,
    text: `Hey ${userName},

An error occurred in the system.

🔧 Function: ${functionName}

❌ Error Message:
${errorMessage}

🧾 Stack Trace:
${errorStack}

Please look into it at your earliest convenience.

Cheers,  
${process.env.PROJECT_NAME}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('📧 Error email sent successfully');
    return true;
  } catch (sendErr) {
    console.error('❌ Error sending email:', sendErr);
    return false;
  }
}


module.exports = { emailSend };







