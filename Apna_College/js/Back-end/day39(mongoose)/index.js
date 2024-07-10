const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://localhost:27017/test");
}

main().then(() => {
    console.log("connection successful");
}).
catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User",userSchema);

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age : 78,
// });
// const user2 = new User({
//     name: "eve",
//     email: "eve@yahoo.in",
//     age : 78,
// });
// user1.save().then((res)=>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });

// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age:41 },
//     {name: "ahmad", email: "ahmad@gmail.com", age:74 },
//     {name: "ali", email: "ali@gmail.com", age: 52},
// ]).then((res) => {
//     console.log(res);
// });

// User.find({age: {$gt: 47}})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

User.updateOne({name: "ahmad"}, {age:49}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
 
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    auther: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
    },
    dicount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fictional"],
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Marvel Comics v2",
    price: 600,
    genre: ["comics","superheroes","fiction"],
});

book1
.save()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});