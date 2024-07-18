let port = 5000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

async function main(){
    await mongoose.connect("mongodb://localhost:27017/newdb");
};

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
});
app.listen(port);

app.get("/chats",async (req,res) =>{
    let chats = await Chat.find();
    res.render("index",{chats});
});

app.get("/chats/new",(req,res) => {
    res.render("new");
});

app.post("/chats/new",(req,res) => {
    let {from,to,msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    res.render("index");
});