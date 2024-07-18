npm install -g express-generator
express --view=ejs
indexjs code:
    router.get('/createuser', async function(req, res) {
let createduser = await userModel.create({
  username: "Ahmad",
  password: "Ahmad",
  posts   : [],
  email:  "ahmad@gmail.com",
  fullName: "Ahmad Yar",
});
  res.send(createduser);
});

router.get("/createpost", async (req,res) => {
  let createdpost = await postModel.create({
    postText: "Hello kaise ho saare",   
    user: "669286074a43ed0f8f97c38e" 
  });
  let user = await userModel.findOne({_id:"669286074a43ed0f8f97c38e"});
  user.posts.push(createdpost._id);
  await 
  user.save();
  res.send("done");
});
router.get("/alluserposts", async (req,res) => {
  let user = await userModel.findOne({_id:"669286074a43ed0f8f97c38e"})
  .populate("posts");
  res.send(user);
})