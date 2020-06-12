var express=require("express");
var app=express();
var handlebars=require("express-handlebars").create({defaultLayout:"main"});
var bodyparser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
app.engine("handlebars",handlebars.engine);
app.set("view engine",'handlebars');

app.use(express.static(__dirname + '/public'));
//app.use(bodyparser());
app.get("/",function(req,res){
  res.render("home");
  // res.end("Hello");
})

//app.use(express.static(__dirname + '/public'));
app.get("/signup",function(req,res){
  res.render("signup");
  // res.end("Hello");
})

app.get("/about",function(req,res){
  var quotes =  ["a", "b", "c", "d","e"];
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  res.render("about",{quote:randomQuote,variable:"Hello"});
  // res.end("Hello");
})


// app.use(function(req,res){
//   res.type("text/plain");
//   res.status(404);
//   res.send("404 Not Found");
// })

app.listen(3000,()=>{
  console.log("Server Running");
});

