const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));

const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username : "utkarsh",
        content : "i love coding",
    },

    {
        username : "Raj",
        content : "hard work is important to achieve the success ",
    },

    {
        username : "XYZ",
        content : "i got selected for my first internship",
    }
];

// this is kind of a route to check whether server is working or not  

// app.get("/",(req,res)=>{
//     res.send("server working well!!");
// });

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});


app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});


app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username,content} = req.body;
    posts.push({username,content})
    // res.send("post request working");
    res.redirect("/posts");
});


// it is use to start the server

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});  