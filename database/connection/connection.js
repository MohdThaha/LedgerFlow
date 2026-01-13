const mongoose = require("mongoose");

const { getSecretValue } = require("../../services/azureKeyVaultService");

const mongooseOptions = {
  maxPoolSize: 5, 
  serverSelectionTimeoutMS: 5000, 
  socketTimeoutMS: 45000, 
};

const connectWithRetry = async () => {  
  try {
    let DB;

    if (process.env.ENVIRONMENT === "PROD") {
      DB = await getSecretValue("DATABASE");
    }else if (process.env.ENVIRONMENT === "SBX") {
      DB = await getSecretValue("SBX-SEWNEX-DATABASE");
    }else {
      DB = process.env.DATABASE;
    }   

    await mongoose.connect( DB ); 
    console.log(`🍃...${process.env.ENVIRONMENT} ${process.env.PROJECT_NAME} DATABASE CONNECTED SUCCESSFULLY...🍃`);
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    setTimeout(connectWithRetry, 5000); 
  }
};

connectWithRetry();
