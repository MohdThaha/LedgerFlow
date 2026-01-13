// v2.0

const mongoose = require("mongoose");
const { Schema } = mongoose;


const trialBalanceSchema = new Schema({
    organizationId: {type:String},
    branchId : {type: mongoose.Schema.Types.ObjectId, ref: 'Branch'},
    
    operationId: {type:String},
    transactionId: {type:String}, //prefix
    
    accountId: {type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'},

    action: {type:String},
    
    debitAmount: {type:Number},
    creditAmount: {type:Number},
    remark: {type:String},

    createdDateTime: { type: Date, default: () => new Date() },
});

const TrialBalances = mongoose.model("TrialBalances", trialBalanceSchema);

module.exports = TrialBalances;