var mysql = require('mysql');
var con = mysql.createConnection({
    //configuration Object
    host: "localhost",
    user: "root",
    password: "root",
    database: "demo"
});

// con.connect(function(err){
//     if(err){
//         throw err;
//     }
//     console.log("Connected to MySQL database");
// });

// Creating a database
// con.connect(function(err){
//     if(err){
//         throw err;
//     }
//     con.query("CREATE DATABASE demo",function(err,result){
//         if(err){
//             throw err;
//         }
//         console.log("Database created");
//     });
// });

// Creating a Table
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

//Inserting values in table
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var values = [
//         ['Pritam Kumar','Bhopal'],
//         ['Arvind Kumar','Bihar'],
//         ['Vineet Gupta','New Delhi']
//     ];
//     var sql = "INSERT INTO customers(name,address) Values ?";
//     con.query(sql,[values], function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       console.log("Data Inserted Successfully.");
//     });
//   });

// Selecting the data from the database
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "SELECT * FROM CUSTOMERS WHERE address = 'Banglore'";
//     con.query(sql,function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       console.log("Data fetched Successfully.");
//     });
//   });

// Deleting the data from the database
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //var sql = "DELETE FROM CUSTOMERS WHERE address = 'Banglore'";
    var sql = "UPDATE CUSTOMERS SET name = 'Nand Kumar' WHERE address = 'Bihar'";
    con.query(sql,function (err, result) {
      if (err) throw err;
      console.log(result);
      //console.log("Data Deleted Successfully.");
      console.log("Data Updated Successfully.");
    });
  });