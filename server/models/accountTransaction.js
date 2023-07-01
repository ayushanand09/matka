const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const accountTranSchema = new mongoose.Schema({
  userId: {
    type: objectId,
    required: true,
    unique: true,
  },
  accountId: {
    type:objectId,
    default: 0,
  },
  amount:{
    type:String,
    required:true
  },
  transactionType:{
        type : String,
        enum :["bet","betCancel"],
    require:true
  }
},{timeStamps:true});

const accountTran = mongoose.model('accountTran', accountTranSchema);

module.exports = accountTran;