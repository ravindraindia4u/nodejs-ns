var MongoClient=require("mongodb").MongoClient;
//var url="mongodb+srv://root:goldtree9@cluster0-vbvpz.mongodb.net/node_mongo_demo?retryWrites=true&w=majority";
var url = "mongodb+srv://root:root@cluster0-efsgl.mongodb.net/node_mongo_demo?retryWrites=true&w=majority";

//Creating mongodb connection
MongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
  if(err) throw err;
  console.log("Database Connected");

  // Creating Collection
  // var dbo = db.db('node_mongo_demo');
  // dbo.createCollection('customers',function(err,res){
  //   if(err) throw err;
  //   console.log('Collection Created');
  //   db.close();
  // });

  // Inserting Data into customers db
  var dbo = db.db('node_mongo_demo');

  // Inserting one record
  // var myObj = {
  //   name: 'Subodh Kumar',
  //   address: 'Banglore'
  // };
  // dbo.collection('customers').insertOne(myObj,function(err,result){

  // Inserting Multiple record at a time
  // var myObj = [
  //   {name: 'Aman verma', place: 'Jharkhand'},{name: 'Nishant Kumar', place: 'Nalanda'},{name:'Vishwash', place:'Punjab'}
  // ];
  // dbo.collection('customers').insertMany(myObj,function(err,result){
  //   if(err) throw err;
  //   console.log('Record Inserted');
  //   db.close();
  // });

  // Selecting Record form customers database
  // dbo.collection('customers').find({},{
  //   projection:{address:0,place:0}
  // }).toArray(function(err,result){
  //     if(err) throw err;
  //     console.log(result);
  //     db.close();
  //   });

  // Deleting record from customers database
  var delObj = {place:"Nalanda"};
  dbo.collection('customers').deleteMany(delObj,function(err,result){
    if(err) throw err;
    console.log(result);
    db.close();
  })
});

