const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://localhost:27017/newdb");
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String },
    image: {
      type:String,
      
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, 
      ref: 'Post' }],
    dp: { type: String }, // Assuming dp is a URL or file path
    email: { type: String, required: true, unique: true },
    fullname: [{ type: String }] // Assuming fullName is an array of strings
});
userSchema.plugin(plm);
module.exports = mongoose.model('User', userSchema);
