// var express = require('express');
// var router = express.Router();

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.1.0.1:27017/practicekaro");

const userschema = mongoose.Schema({
  username:String,
  name:String,
  age:Number
});

// module.exports = mongoose.model("name",schema);
module.exports = mongoose.model("user",userschema);







// module.exports = router;
