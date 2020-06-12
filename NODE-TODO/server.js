// const express = require("express");
// const bodyParser = require("body-parser");
// var MongoClient = require("mongodb");
// var url ="mongodb+srv://root:goldtree9@cluster0-vbvpz.mongodb.net/node_todo_shared?retryWrites=true&w=majority";

// var app = express();

// app.use(bodyParser());

// MongoClient.connect(url)
// .then((client) =>{
//     console.log("connected successfully");
// })
// .catch((err) => console.log("Error",err));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/quotes", function(req,res){
//     console.log(req.body);
//     res.send();
// })

// app.listen("3001", () => {
//   console.log("Listening on port 3001");
// });

const express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb");
// var url =
//   "mongodb+srv://root:goldtree9@cluster0-vbvpz.mongodb.net/node_mongo_demo?retryWrites=true&w=majority";
var url = "mongodb+srv://root:root@cluster0-efsgl.mongodb.net/node_mongo_demo?retryWrites=true&w=majority";


app.use(bodyParser());

MongoClient.connect(url)
  .then((client) => {

    const db= client.db("node_mongo_demo");
    const quotesCollection=db.collection("quotes");
    //Routes
    app.get("/", function (req, res) {
      res.sendFile(__dirname + "/index.html");
    });

    app.post("/quotes", function (req, res) {
      console.log(req.body);
      res.send();
    });
    //Start The Server
    app.listen("3001", () => {
      console.log("Listening on port 3001");
    });
  })
  .catch((err) => {
    throw err;
  });

