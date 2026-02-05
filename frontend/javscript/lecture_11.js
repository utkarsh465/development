// function hello(){
//     console.log("hello world!")
// }


// function one(){
//     return 1;
// }

// function two(){
//     return one() + one ();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// CALL BACK HELL EXAMPLE

// h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red",1000,() =>{
//     changeColor("orange",1000,() =>{
//         changeColor("yellow",1000,() =>{
//             changeColor("green",1000,() =>{
//                 changeColor("blue",1000,() =>{
//                     changeColor("indigo",1000);
//                 });
//             });
//         });
//     });
// });


// PROMISE EXAMPLE(improved version of promise)

// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("success:data was saved");
//         }
//         else{
//             reject("failure:weak connection");
//         }
//     });
// }

// savetoDb("save my given data with the helpm of this code")
//      .then(()=>{
//         console.log("data1 saved successfully");
//         return savetoDb("utkarsh");
//      })
//      .then(()=>{
//         console.log("data2 saved successfully");
//         return savetoDb("hello world");
//      })
//      .then(()=>{
//         console.log("data3 saved successfully");
//      })
//      .catch(()=>{
//         console.log("promise rejected due to weak connection")
//      })

// savetoDb("save my given data with the helpm of this code")
//      .then((result)=>{
//         console.log("data1 saved successfully");
//         console.log("result of promises",result)
//         return savetoDb("utkarsh");
//      })
//      .then((result)=>{
//         console.log("data2 saved successfully");
//         console.log("result of promises",result)
//         return savetoDb("hello world");
//      })
//      .then((result)=>{
//         console.log("data3 saved successfully");
//         console.log("result of promises",result)
//      })
//      .catch((error)=>{
//         console.log("promise rejected due to weak connection")
//         console.log("error details",error);
//      })


// LETS APPLY PROMISE TO OUR CALLBACK HELL EXAMMPLE

// h1 = document.querySelector("h1");
// function changeColor(color, delay, ){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed");
//         }, delay);
//     });
    
// }
// changeColor("red",1000)
// .then((result)=>{
//         console.log("red color was completed");

//         return changeColor("orange",1000);
//      })
//      .then((result)=>{
//         console.log("orange color completed");

//         return changeColor("blue",1000);
//      })
//      .then((result)=>{
//         console.log("blue color completed");
//         return changeColor("green",1000);
//      })
//      .then((result)=>{
//         console.log("green color completed");
//      })
//      .catch((error)=>{
//         console.log("promise rejected due to weak connection")
//         console.log("error details",error);
//      })

// ASYNC AND AWAIT KEYWORD EXAMPLE

// h1 = document.querySelector("h1");
// function changeColor(color, delay, ){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             if(num > 3){
//                 reject("promise rejected")
//             }
//             h1.style.color = color;
//             console.log(`${color} color completed`);
//             resolve("color changed");
//         }, delay);
//     });
// }

// async function demo(){
//     try{                                          // to handle the promises
//         await changeColor("red",1000);
//         await changeColor("orange",1000);
//         await changeColor("yellow",1000);
//         await changeColor("green",1000);
//         await changeColor("blue",1000);
//         await changeColor("indigo",1000);
//         await changeColor("violet",1000);
//         await changeColor("green",1000);
//     }
//     catch(error){                                     // to catch the error if any promise is rejected
//         console.log("error caught");
//         console.log(error);
//     }
// }
// demo();

// FIRST REQUEST USING FETCH API 
// fetch(url)

//let url  = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("data1",data.fact);
//         return (fetch(url));
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data2 = ",data2.fact);
//     })
//     .catch((err) =>{
//         console.log("error occured - ",err);
//     });

// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log("data.fact = ", data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log("data2.fact = ", data2.fact);
//     }
//     catch(err){
//         console.log("error occured - ",err);
//     }
//     console.log("function getFacts execution completed");
// }


// AXIOS EXAMPLE

// let url  = "https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//     }
//     catch(err){
//         console.log("error occured - ",err);
//     }
    
// }
// let btn = document.querySelector("button");

// btn.addEventListener("click",async() => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });


// let url  = "https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(err){
//         console.log("error occured - ",err);
//         return "no fact found";
//     }
    
// }




// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";
// btn.addEventListener("click",async() => {
//     let link = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
//     console.log(link);
// });

// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         //console.log(res.data.message);
//         return res.data.message;
//     }
//     catch(err){
//         console.log("error occured - ",err);
//         return "/"; // return a default image path in case of error
//     }
    
// }


