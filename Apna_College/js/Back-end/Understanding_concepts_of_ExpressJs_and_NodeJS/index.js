const express = require("express");
const app = express();
app.set('view engine','ejs');

app.use((req,res,next)=>{
    console.log("MiddelWare working");
    next();
});
// ----------------------------Web site code---------------------------------------
function toggleNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
    sidebar.classList.toggle("closed");
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("open");
    }
};

// -------------------------------------------------------------------

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });
// app.get('/',(your_data,Server_response)=>{
//     Server_response.send('Hello World');
// });

// app.get('/profile/:username',(req,res)=>{
//     res.send(`Hello from ${req.params.username}`);
// });

//.send = .render 'in ejs'
app.get('/',(req,res)=>{
    res.render('index',{age:12});
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.listen(3000);