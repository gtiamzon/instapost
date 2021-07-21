// SECTION EXTERNAL MODULES// 
const express = require("express");



// SECTION INTERNAL MODULES// 

// SECTION INSTANCE MODULES// 
const app = express();

// SECTION CONFIGURATION//
const PORT = 4000;

// SECTION MIDDLE WARE// 

// SECTION ROUTES//
app.get("/", function(req,res){
  res.redirect("/posts");
});

// post 

// index GET - presentational
app.get("/posts", function(req, res){
  res.send("post index");
});

// new GET /posts - presentational form

// create POST /posts

// show GET /posts/:id - presentational

// edit GET /posts/:id/edit -presentational 

// update PUT /post/:id - functional 

// destroy  /posts/:id - fucntional 

// SECTION SERVER BIND// 
app.listen(PORT, ()=> {
  console.log(
    `Instapost is live at port ${PORT} and ready to borrow your personal data.`
  );
});