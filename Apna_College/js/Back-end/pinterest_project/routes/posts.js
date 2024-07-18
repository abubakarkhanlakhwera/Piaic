const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/newdb");
const postSchema = new mongoose.Schema({
    user:  {type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    postText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    likes: { type: Array, default: []}
});

module.exports = mongoose.model('Post', postSchema);
