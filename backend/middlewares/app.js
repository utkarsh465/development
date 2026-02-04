import express from "express";
const app = express();

// app.get("/",(req,res) =>{
//     res.send("Hello, World!");
// });

app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
       return next();   
    }
    res.send("ACCESS DENIED!");
});



app.get("api",(req,res)=>{
    res.send("Welcome to the protected API route!");
})

app.listen("8080",()=>{
    console.log("Server is running on port 8080");
});