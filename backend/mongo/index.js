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

const User = mongoose.model("user",userSchema);

// User.find({age:{$lt:21}})
// User.findOne({age:{$lt:21}})
//     .then((res) =>{
//         console.log(res);
//     }).catch(err =>{
//         console.log(err);
//     })

// User.updateOne({age:{$lt:21}},{name:"utkarsh"})
// User.updateMany({age:{$gt:21}},{name:"Steve"})
//     .then((res) =>{
//         console.log(res);
//     }).catch(err =>{
//         console.log(err);
//     })


// User.deleteOne({age:{$gt:21}})
//     .then((res) =>{
//         console.log(res);
//     }).catch(err =>{
//         console.log(err);
//     })



// User.deleteMany({age:{$gt:20}})
//     .then((res) =>{
//         console.log(res);
//     }).catch(err =>{
//         console.log(err);
//     })



User.findByIdAndDelete("69766bff0b4bcbad0c2e521d")
    .then((res) =>{
        console.log(res);
    }).catch(err =>{
        console.log(err);
    })


User.findOneAndDelete({name:"utkarsh"})
    .then((res) =>{
        console.log(res);
    }).catch(err =>{
        console.log(err);
    })
// const product = mongoose.model("product",userSchema);

// const user1 = new User({
//     name:"utkarsh",
//     email:"utkarsh@gmail.com",
//     age:21
// });

// user1.save();

// const user2 = new User({
//     name:"harsh",
//     email:"harsh@gmail.com",
//     age:21
// });

// user2.save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


// User.insertMany ([
//     {name:"Rahul",email:"rahul@gmail.com",age:21},
//     {name:"Diksha",email:"diksha@gmail.com",age:20},
//     {name:"Raj",email:"raj@gmail.com",age:22}
// ]).then((res) =>{
//     console.log(res);
// });