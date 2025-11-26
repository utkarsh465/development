const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));

const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.set(express.static(path.join(__dirname,"public")));

// this is kind of a route to check whether server is working or not  
app.get("/",(req,res)=>{
    res.send("server working well!!");
});

// it is use to start the server

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});  