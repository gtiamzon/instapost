// SECTION EXTERNAL MODULES// 
const express = require("express");



// SECTION INTERNAL MODULES// 

// SECTION INSTANCE MODULES// 
const app = express();

// SECTION CONFIGURATION//
const PORT = 4000;

// SECTION MIDDLE WARE// 

// access body data
app.use(express.urlencoded({extended=true}));

// SECTION ROUTES//
app.get("/", function(req,res){
  res.redirect("/posts");
});

// post 

// index GET - presentational
app.get("/posts", function(req, res){
  res.send("post index");
});

// new GET /posts/new - presentational form
app.get("/posts/new", function(req, res){
  res.send("post create page");
});

// create POST /posts
app.post("/posts", function(req,res){
  console.log(req.body);
  //echo
  res.send({
    message: "hit the create route",
    body: req.body,
  })
})

// show GET /posts/:id - presentational
app.get("/posts/:id", function(req, res){
  //echo param id
  res.send(`post SHOW page id : ${req.params.id}`);
});

// edit GET /posts/:id/edit -presentational 
app.get("/posts/:id/edit", function(req, res){
  //echo param id
  res.send(`post EDIT page id : ${req.params.id}`);
});

// update PUT /post/:id - functional 
app.put("/post/:id", function(req,res){
  //echo body data and id
  res.send({
    message: "Hit the update route",
    body: req.body,
    id: req.params.id,
  });
});

// destroy  /posts/:id - fucntional 

// SECTION SERVER BIND// 
app.listen(PORT, ()=> {
  console.log(
    `Instapost is live at port ${PORT} and ready to borrow your personal data.`
  );
});