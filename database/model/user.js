// v1.5

const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
  organizationId: { type: String },
  userName: { type: String },
  userNum: { type: String },
  userEmail: { type: String },
  password: { type: String },
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  isActive: { type: Boolean, default: true },
  isNewPassword: { type: Boolean, default: true },
    
});

const User = mongoose.model("User", userSchema);

module.exports = User;