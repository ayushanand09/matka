const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const accountSchema = new mongoose.Schema({
  userId: {
    type: objectId,
    required: true,
    unique: true,
  },
  totalAmount:{
    type:String,
    default: "0",
  }
},{timeStamp:true});

const account = mongoose.model('account', accountSchema);

module.exports = account;