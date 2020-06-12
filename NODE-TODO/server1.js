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
    const db = client.db("node_mongo_demo");
    const quotesCollection = db.collection("quotes");
    //Routes
    app.get("/", function (req, res) {
      db.collection("quotes")
        .find()
        .toArray()
        .then((result) => {
          //Show in index page
          //res.render("index.handlebars", { result: result });
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
      res.sendFile(__dirname + "/index.html");
    });

    app.post("/quotes", function (req, res) {
      const { body } = req;
      quotesCollection
        .insertOne(body)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });

      res.send();
    });
    //Start The Server
    app.listen("3000", () => {
      console.log(`Server is running at http://localhost:3000/`);
    });
  })
  .catch((err) => {
    throw err;
  });
