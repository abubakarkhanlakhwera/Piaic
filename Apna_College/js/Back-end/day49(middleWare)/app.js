const express = require("express");
const app = express();
app.use((req,res,next) => {
    console.log("hi iam 1st middel ware");
    next();
});
app.use((req,res,next) => {
    console.log("hi iam 2nd middel ware");
    next();
});
app.use("/api",(req,res,next) => {
    let {token} = req.query;
    if(token == "giveaccess"){
        next();
    }
    res.send("Access denied");
});
app.get("/api",(req,res) => {
    res.send("data");
})
//loggger middle ware
// app.use((req,res,next) => {
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.path , req.responseTime, req.hostname);
//     return  next();
// });
app.get('/',(req,res) => {
    res.send("ahmad");
});


app.listen(8080, () => {
    console.log("server is listening to port 8080");
});