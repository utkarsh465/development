const express = require('express');
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

// PASSING DATA TO EJS TEMPLATES


// app.get("/rollDice",(req,res)=>{
//     res.render("rollDice.ejs");
// });

            // OR

app.get("/rollDice",(req,res)=>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { diceVal });
});


// INSTAGRAM.EJS

// app.get("/ig/:username",(req,res)=>{
//     let{ username } = req.params;
    // console.log(username);
//     res.render("instagram.ejs", { username });
// });


app.get("/ig/:username", (req, res)=>{
    const followers = ["john_doe", "jane_smith", "cool_user", "fun_guy", "nature_lover", "tech_guru", "foodie", "traveler", "artist", "musician","utkarsh","naina","Raj"];
    const less_connection = ["Xyz","pqr","john_doe", "jane_smith", "cool_user", "fun_guy", "nature_lover", "tech_guru", "foodie"]
    let{ username } = req.params;
    // console.log(username);
    res.render("instagram.ejs", { username, followers, less_connection });
});


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});

