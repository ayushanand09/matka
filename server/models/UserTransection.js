const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const userTranSchema = new mongoose.Schema({
  userId: {
    type: objectId,
    required: true,
  },
  accountId: {
    type:objectId,
    required: true
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

const userTransection = mongoose.model('userTransection', userTranSchema);

module.exports = userTransection;