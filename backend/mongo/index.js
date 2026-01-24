const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');   

//upar waale line ko likhne ka same tareeka neeche haii

main()
    .then(()=>{
        console.log("cannection successful");
    })
    .catch((err) => {
        console.log("no connection");
    });
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

// const User = mongoose.model("user",userSchema);
const product = mongoose.model("product",userSchema);