const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log("app is listenning on port");
});


////////////////////////////////////////////////////

// app.use((req,res) =>{
//     // console.log(req);
//     console.log("request received");
//     // res.send({
//     //     fruit : "apple",
//     //     color : "redirect",
//     // });
//     res.send("<h1>Fruits</h1>");
//     });

////////////////////////////////////////////////////

app.get("/",(req,res)=>{
    res.send("Helo Iam root " );
});

app.get("/apple",(req,res)=>{
    res.send("YOu contacted apple path " );
});

app.get("/mango",(req,res)=>{
    res.send("YOu contacted mango path " );
});

// app.get("*" , (req,res)=>{
//     res.send("Invalid Request");
// });

app.post("/",(req,res)=>{
    res.send("YOu sent a post request .")
});

// we find that nodemon is require to change the js file without stopping the server

///////////////////////////////////////////////

app.get("/:username", (req,res) =>{
    console.log(req.params);
    res.send("Hello, Iam root");
});

app.get("/:username/:id", (req,res) =>{
    let {username , id} = req.params;
    res.send(`Welcome to the page of @${username}`)
});

app.get("/search",(req,res)=>{
    let {q} = console.log(req.query);
    res.send(`<h1>These are serch results for ${q}</h1>`);
});