const express = require("express");
const app = express();

// app.get("/",(req,res) =>{
//     res.send("Hello, World!");
// });

app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "give access"){
        next();   
    }
    res.send("ACCESS DENIED!");
});

app.set("/api",(req,res)=>{
    res.send("hello from api");
})


app.listen("8080",()=>{
    console.log("Server is running on port 8080");
});