const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  addressId: { type: String, unique: true },
  balance: Number,
  key: Object,
  profile: {
    name: String,
    gender: String,
    location: String,
    website: String,
    picture: String
  }
}, { timestamps: true });



const User = mongoose.model('User', userSchema);

module.exports = User;
