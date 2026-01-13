// v1.3

const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  organizationId: { type: String },
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  action: { type: String }, //GET, POST, PUT, DELETE
  approved: { type: Boolean, default: false },
  module: { type: String }, //Organization, Customer
  description: { type: String },
  reqBody: { type: String },
  createdDateTime: { type: Date, default: () => new Date() },

});

module.exports = mongoose.model('ActivityLog', activityLogSchema);
