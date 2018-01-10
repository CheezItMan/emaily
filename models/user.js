const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  uid: String,
  name: String,
  provider: String,
  credits: { type: Number, default: 0 },
});

mongoose.model('users', userSchema);
