const mongoose = require('mongoose');

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

let allChats = [
    {
    from:"steve",
    to:"tony",
    msg:"welcome back tony!we need you for the avengers endgame",
    created_at:new Date(),                              
    },
    {
    from:"steve",
    to:"peter",
    msg:"i am from new york.WHere are you from?",
    created_at:new Date(),                              
    },
    {
    from:"peter",
    to:"steve",
    msg:"hello man! i am your big fan",
    created_at:new Date(),                              
    },
    {
    from:"thor",
    to:"all avengers",
    msg:"Bring me thanos!!!!!",
    created_at:new Date(),                              
    },
]

chat.insertMany(allChats);

