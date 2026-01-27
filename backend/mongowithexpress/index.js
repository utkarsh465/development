const express = require("express");
const app = express();

const mongoose = require('mongoose');
const path = require("path");
const method_override = require("method-override");
// how to link style.css file to ejs file

app.use(express.static(path.join(__dirname,"public")));
app.use(method_override("_method"));

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


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

// data ko parse krne ke liye use krte hai
app.use(express.urlencoded({extended:true}));

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


// create route

app.post("/chats",async(req,res) =>{
    let{from,to,msg} = req.body; 

    let newChat = new chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
});


// edit route

app.get("/chats/:id/edit",async(req,res) =>{
    let {id} = req.params;
    let chats =await chat.findById(id);
    res.render("edit.ejs",{chats});
})

// Update Route

app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let {msg:newMsg} = req.body;
    let updatedChat =  await chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true,new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

// Destroy or Delete Route 

app.delete("/chats/:id",async(req,res) =>{
    let {id} = req.params;
    let deleteChat = await chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats");
})

app.listen(8080,() =>{
    console.log("Server is running on port 8080");
});