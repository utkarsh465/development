const express = require("express");
const app = express();
const port = 8080;

const { v4 : uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:true}));

const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id:uuidv4(),
        username : "utkarsh",
        content : "i love coding",
    },

    {
        id:uuidv4(),
        username : "Raj",
        content : "hard work is important to achieve the success ",
    },

    {
        id:uuidv4(),
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
    let id = uuidv4();
    posts.push({id,username,content})
    // res.send("post request working");
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
   let {id} = req.params;
   let post = posts.find((p) => id === p.id);
   console.log(post);
//    res.send("request working");
   res.render("show.ejs",{post});
   res.redirect("/posts");
});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
    console.log(post);

});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => p.id !== id);
    // res.send("deleted successfully");
    res.redirect("/posts");
});
// it is use to start the server

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});  