const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const userAccountSchema = new mongoose.Schema({
  userId: {
    type: objectId,
    required: true,
    unique: true,
  },
  userTotalAmount:{
    type:Number,
    default: "100",
  }
},{timeStamp:true});

const userAccount = mongoose.model("userAccount", userAccountSchema);

module.exports = userAccount;