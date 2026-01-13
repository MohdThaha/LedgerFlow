// services/prefixService.js
const Prefix = require('../database/model/prefix');
const Branch = require('../database/model/branch');

async function generatePrefixNumber(organizationId, branchId, prefixType, prefixNum) {
  // Step 1: Find branch
  let branch = null;
  if (branchId) {
    branch = await Branch.findOne({ _id: branchId, organizationId }).lean();
    if (!branch) throw new Error("Branch not found for this organization.");
  }

  // Step 2: Find prefix document for org
  const prefixDoc = await Prefix.findOne({ organizationId });
  if (!prefixDoc) throw new Error("No prefix document found for this organization.");

  let activeSeries;

  // Step 3: If branch has branchTransactionId → use that series
  if (branch?.branchTransactionId) {
    activeSeries = prefixDoc.series.find(
      (s) => s._id.toString() === branch.branchTransactionId.toString()
    );
  }

  // Step 4: If not found → fallback to active series
  if (!activeSeries) {
    activeSeries = prefixDoc.series.find((s) => s.status === true);
  }

  if (!activeSeries) {
    throw new Error(`No active ${prefixType} series found for this organization/branch.`);
  }

  // Step 5: Build number 
  const prefixField = prefixType;       
  const counterField = prefixNum; 

  if (activeSeries[prefixField] == null || activeSeries[counterField] == null) {
    throw new Error(`Invalid prefix config: missing ${prefixField} or ${counterField}`);
  }

  const generatedNumber = `${activeSeries[prefixField]}${activeSeries[counterField]}`;

  // Step 6: Increment counter
  activeSeries[counterField] += 1;
  await prefixDoc.save();

  return generatedNumber;
}


async function getPrefixNumber(organizationId, branchId, prefixType, prefixNum) {
  // Step 1: Find branch
  let branch = null;
  if (branchId) {
    branch = await Branch.findOne({ _id: branchId, organizationId }).lean();
    if (!branch) throw new Error("Branch not found for this organization.");
  }else{
    branch = await Branch.findOne({ branchName: "Main Branch", organizationId }).lean();
  }

  // Step 2: Find prefix document for org
  const prefixDoc = await Prefix.findOne({ organizationId });
  if (!prefixDoc) throw new Error("No prefix document found for this organization.");

  let activeSeries;

  // Step 3: If branch has branchTransactionId → use that series
  if (branch?.branchTransactionId) {
    activeSeries = prefixDoc.series.find(
      (s) => s._id.toString() === branch.branchTransactionId.toString()
    );
  }

  // Step 4: If not found → fallback to active series
  if (!activeSeries) {
    activeSeries = prefixDoc.series.find((s) => s.status === true);
  }

  if (!activeSeries) {
    throw new Error(`No active ${prefixType} series found for this organization/branch.`);
  }

  // Step 5: Build number 
  const prefixField = prefixType;       
  const counterField = prefixNum; 

  if (activeSeries[prefixField] == null || activeSeries[counterField] == null) {
    throw new Error(`Invalid prefix config: missing ${prefixField} or ${counterField}`);
  }

  const generatedNumber = `${activeSeries[prefixField]}${activeSeries[counterField]}`;

  return generatedNumber;
}


module.exports = { generatePrefixNumber, getPrefixNumber };
