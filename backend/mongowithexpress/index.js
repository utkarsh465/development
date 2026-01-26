const express = require("express");
const app = express();

const mongoose = require('mongoose');
const path = require("path");

// how to link style.css file to ejs file

app.use(express.static(path.join(__dirname,"public")));

const chat = require("./models/chat.js");

main()
    .then(() =>{
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.log(err)
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}


// let chat1 = new chat({
//     from:"steve",
//     to:"tony",
//     msg:"welcome back tony!we need you for the avengers endgame",
//     created_at:new Date(),                              //new Date creates Random date and time
// })

// chat1.save().then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// })


app.set("views",path.join(__dirname,"view"));
app.set("view engine","ejs");

app.get("/",(req,res) =>{
    res.send("server is working");
});

// INDEX ROUTE

app.get("/chats",async(req,res) =>{
    let chats = await chat.find();
    console.log(chats);
    
    res.render("index.ejs",{chats});
})

// new chats route

app.get("/chats/new",(req,res) =>{
    // console.log("new chat route");
    res.render("new.ejs");
})


app.listen(8080,() =>{
    console.log("Server is running on port 8080");
});