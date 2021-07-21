// SECTION EXTERNAL MODULES// 
const express = require("express");



// SECTION INTERNAL MODULES// 

// SECTION INSTANCE MODULES// 
const app = express();

// SECTION CONFIGURATION//
const PORT = 4000;

// SECTION MIDDLE WARE// 

// SECTION ROUTES//

// SECTION SERVER BIND// 
app.listen(PORT, ()=> {
  console.log(
    `Instapost is live at port ${PORT} and ready to borrow your personal data.`
  );
});