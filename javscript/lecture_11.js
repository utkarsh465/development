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