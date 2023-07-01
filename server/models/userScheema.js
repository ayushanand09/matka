const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountId: {
    type:objectId,
    default: "null",
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;