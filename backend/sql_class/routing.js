const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

const express = require('express');
const app = express();
const path = require("path");

const methodoverirde = require("method-override");
app.use(methodoverirde("_method"));
app.use(express.urlencoded({ extended: true }));      //form ke data ko parse krne ke liye iska use krte hai 

// usiing ejs as view engine

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

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
      let count = result[0]["count(*)"];
      // res.send(result[0]["count(*)"]);
      res.render("home.ejs", { count });
    });

  }
  catch(err){    
  console.log(err);
  res.send("some error in DB") 
  }
})


// creating show route to fetch and show(userid , username, email)

app.get("/users",(req,res) => {
  // res.send("success");
  let q = `SELECT * FROM users`;
  try{
    connection.query(q, (err,users) => {
      if(err) throw err;
        // console.log(result);
        // res.send(result);
        res.render("showusers.ejs", { users });
    });

  }
  catch(err){    
  console.log(err);
  res.send("some error in DB") 
  }

})

// Creating EDIT ROute

app.get("/users/:id/edit",(req,res) => {
  let {id} = req.params;
  let q = `select * from users where id = '${id}'`;
  try{
    connection.query(q, (err,users) => {
      if(err) throw err;
      let user = users[0];
        // console.log(result);      
        res.render("edit.ejs", { user });
    });

  }
  catch(err){    
  console.log(err);
  res.send("some error in DB") 
  }
})

// update {DB} route
app.patch("/users/:id", (req,res) => {
  // res.send("update route reached");
  let {id} = req.params;
  let{password:formPass,username:newUsername} = req.body;

  let q = `select * from users where id = '${id}'`;
  try{
    connection.query(q, (err,users) => {
      if(err) throw err;
      let user = users[0];

      if(formPass != user.password_hash){
        res.send("wrong password");
      }
      else{
        let q2 = `UPDATE users SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err,result) => {
          if(err) throw err;
          res.redirect("/users");
        });
      }
      // console.log(result);      
      // res.send(user);
    });

  }
  catch(err){    
  console.log(err);
  res.send("some error in DB") 
  }
});



// STARTING SERVER
app.listen("8080",() =>{
    console.log("server is listening on port 8080");
})


