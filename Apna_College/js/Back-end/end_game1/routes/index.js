var express = require('express');
var router = express.Router();
const userModel = require("./users");

router.get("/",(req,res)=>{
  res.render('index');
});

router.get("/create",async(req,res)=>{
 await userModel.create({
  username:"harsh",
  age: 23,
  name: "ahmad"
});
res.send("createduser");
});

module.exports = router;
