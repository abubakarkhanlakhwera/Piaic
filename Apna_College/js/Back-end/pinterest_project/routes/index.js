var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");
const passport = require("passport");
const upload = require("./multer");
//user login
const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/login",(req,res) => {
  res.render("login",{error: req.flash('error')});
});
router.get('/profile', async (req,res) => {
  const user = await userModel.findOne({
    username: req.session.passport.user
  })
  res.render("profile",{user});
});

router.post("/register",  (req,res) => {
    const {username, email , fullname} = req.body;
    const userData = new userModel({username, email,  fullname});
    userModel.register(userData, req.body.password)
    .then(() => {
      passport.authenticate("local")(req,res,() => {
        res.redirect("/profile");
      });
    });
  
});

router.post("/login",passport.authenticate("local",{
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true,
}),(req,res) => {

});
router.get("/", (req,res) => {
  res.render("index");
});
router.get("/feed",(req,res) => {
  res.render("feed");
});

router.get("/profile",isLoggedIn,(req,res,next) => {
  res.render("index",{title: 'Express'});
});
router.get("/logout",(req,res) =>{
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/login',isLoggedIn,(req,res,next) => {
      res.render("profile");
    });
  });
});

 function isLoggedIn(req,res,next)  {
  if(req.isAuthenticated()) return next();
  res.redirect("/");
};
//multer route
router.post('/upload',isLoggedIn, upload.single('file'),async (req,res) => {
  if(!req.file){
    return res.status(400).send("NO files were uploaded");
  };
  const user = await userModel.findOne({username: req.session.passport.user});
 const postdata =  await postModel.create({
    image: req.file.filename,
    postText: req.body.filecaption ,
    user: user._id,
  });
  user.posts.push(postdata._id);
  res.send("done");
});


module.exports = router;
