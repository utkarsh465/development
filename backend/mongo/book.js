const mongoose = require("mongoose");
main()
    .then(()=>{
        console.log("cannection successful");
    })
    .catch((err) => {
        console.log("no connection");
    });
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/instagram");
}

const bookSchema = new mongoose.Schema({
    title:{
        type:"String",
        required:true
    },
    author:{
        type:"String",
    },
    price:{
        type:"Number",
        min:[1,"price is too low to buy"]
    },
    discount:{
        type:Number,
        default:0
    },
    Category:{
        type:String,
        enum:["fiction","non-fiction"],
    },
    genre:{
        type:[String],

    }
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title:"marvel comics part-II",
    author:"stan lee",
    price:899,
    Category:"non-fiction",
    genre:["action","adventure","Comics"]
});

let book2 = new Book({
    title:"marvel comics part-I",
    author:"stan lee",
    price:999,
    Category:"non-fiction",
    genre:["action","adventure","Comics"]
});


// book1.save()
//     .then((res) =>{
//         console.log(res);
//     }).catch(err =>{
//         console.log(err.errors.price.properties.message);
//     });

book2.save()
    .then((res) =>{
        console.log(res);
    }).catch(err =>{
        console.log(err.errors.price.properties.message);
    });

// Book.findByIdAndUpdate("6976820bbcad0c5cefff93bf",{price:4999},{runValidators:true})
//     .then((res) =>{
//         console.log(res);
//     }).catch(err =>{
//         console.log(err);
//     })