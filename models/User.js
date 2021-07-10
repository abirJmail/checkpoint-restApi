const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, },
    email: { type: String,},
    telephone: { type: Number,},
    adress:{type: String,}
  });
  
  module.exports = User = mongoose.model("users", userSchema);