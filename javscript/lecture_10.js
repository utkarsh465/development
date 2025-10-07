// let btns = document.querySelectorAll('button');

// for (btn of btns){
//     // btn.addEventListener("click",sayHello);
//     // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//         console.log("you double clicked the button!!");
//     });


// }
// function sayHello(){
//     alert("Hello");
// }
// function sayName(){
//     alert("welcome!! utkarsh");
// }   


// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("you clicked on paragraph");

// })

let p = document.querySelector("p");
let btn = document.querySelector("button");
let h1 =document.querySelector("h1");
let h2 = document.querySelector("h2");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "yellow";
}

btn.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h2.addEventListener("click",changeColor);


