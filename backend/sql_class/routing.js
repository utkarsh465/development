const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

const express = require('express');
const app = express();
const path = require("path");


// usiing ejs as view engine

app.ejs("view engine","ejs");
app.use("views",path.join(__dirname,"/views"));

// FORMING CONNECTION
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  database:'delta_app',
  password:'Utkarsh@9955'      
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];  
};
// CREATING HOME ROUTE (GET REQUEST    /)

app.get("/",(req,res) =>{
  let q = `SELECT count(*) FROM users`;
  try{
    connection.query(q, (err,result) => {
      if(err) throw err;
      console.log(result[0]["count(*)"]);
      // res.send(result[0]["count(*)"]);
      res.send("success");
    });

  }
  catch(err){    
  console.log(err);
  res.send("some error in DB") 
  }
})

// STARTING SERVER
app.listen("8080",() =>{
    console.log("server is listening on port 8080");
})


// try{
//   connection.query(q, [users1], (err,result) => {
//     if(err) throw err;
//     console.log(result);
//   });

// }
// catch(err){    
//   console.log(err); 
// }

// connection.end();