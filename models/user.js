const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  uid: String,
  name: String,
  provider: String,
});

mongoose.model('users', userSchema);
