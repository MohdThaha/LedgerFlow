// v2.8
 
const mongoose = require("mongoose");
const { Schema } = mongoose;
 
 
const staffSchema = new Schema({
  organizationId: { type: String },
 
  staffImage: { type: String },
  staffName: { type: String },
  gender: { type: String },
 
  contactNumber: { type: String },
  email: { type: String },
  address: { type: String },
 
  enablePortal: { type: Boolean },
 
  dob: { type: String },
  doj: { type: String },
 
  uploadDocument: { type: String },
 
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }, //role

  orderWorkType : [{
     orderWorkTypeName : { type: String },
     orderWorkTypeCount :{ type: Number },
     orderServiceCount : { type: Number , default: 0 },
     }],

  orderManufWorkType: [{
     workTypeName : { type: String },
     workTypeCount :{ type: Number },
     serviceCount : { type: Number , default: 0 },
     }],

  internalOrderWorkType: [{
     internalOrderWorkTypeName : { type: String },
     internalOrderWorkTypeCount :{ type: Number },
     internalOrderServiceCount : { type: Number , default: 0 },
     }],

  internalManufWorkType:[{
      internalManufWorkTypeName : { type: String },
      internalManufWorkTypeCount :{ type: Number },
      internalManufServiceCount : { type: Number , default: 0 },
  }],

  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'StaffDD' }, //department
  departmentName: { type: String },
 
  domainDesignation: { type: String },
 
  salaryType: { type: String },//Monthly , per week
  salaryAmount: { type: Number },
 
  service:[{
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
    serviceRate: { type: Number },
  }],
 
  branch:[{
    branchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' },
  }],
 
  createdDateTime: { type: Date, default: () => new Date() },
 
});
 
const Staff = mongoose.model("Staff", staffSchema);
 
module.exports = Staff;