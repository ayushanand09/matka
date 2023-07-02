const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const accountTranSchema = new mongoose.Schema({
  userId: {
    type: objectId,
    required: true,
  },
  accountId: {
    type:objectId,
    default: 0,
  },
  amount:{
    type:Number,
    required:true
  },
  transactionType:{
        type : String,
        enum :["bet","betCancel","win"],
    require:true
  }
},{timeStamps:true});

const accountTransection = mongoose.model('accountTransection', accountTranSchema);

module.exports = accountTransection;