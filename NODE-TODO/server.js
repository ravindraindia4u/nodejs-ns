const express = require("express");
var app = express();
var bodyParser = require("body-parser");
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var MongoClient = require("mongodb");
// var url =
//   "mongodb+srv://root:goldtree9@cluster0-vbvpz.mongodb.net/node_mongo_demo?retryWrites=true&w=majority";
var url = "mongodb+srv://root:root@cluster0-efsgl.mongodb.net/node_mongo_demo?retryWrites=true&w=majority";

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser());

MongoClient.connect(url,{ useUnifiedTopology: true })
  .then((client) => {

    const db= client.db("node_mongo_demo");
    const quotesCollection=db.collection("quotes");
    //Routes
    app.get("/", function (req, res) {
      db.collection('quotes').find().toArray()
      .then(result =>{
        // Show in index page
        console.log(result);
        res.render('index',{data:result})
      })
      .catch(err =>{
        console.log(err);
      })
      //res.sendFile(__dirname + "index");
    });

    app.post("/quotes", function (req, res) {
      // console.log(req.body);
      const { body } = req;
      quotesCollection.insertOne(body)
      .then((result) =>{
        console.log(result);
      })
      .catch((error) =>{
        console.log(error);
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

