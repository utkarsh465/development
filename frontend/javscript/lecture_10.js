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

// let p = document.querySelector("p");
// let btn = document.querySelector("button");
// let h1 =document.querySelector("h1");
// let h2 = document.querySelector("h2");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "yellow";
// }

// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h2.addEventListener("click",changeColor);

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked!!");
// })

// KEYBOARDS EVENTS

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("key was pressed!");
// });

// inp.addEventListener("keydown",function(event){
//     console.log("code = ",event.code);
//     if(event.code == "ArrowUp"){
//         console.log("CHARACTER MOVE UPWARDS");
//     }else if(event.code == "ArrowDown"){
//         console.log("CHARACTER MOVE downwards");
//     }else if(event.code == "ArrowLeft"){
//         console.log("CHARACTER MOVE left");
//     }else if(event.code == "ArrowRight"){
//         console.log("CHARACTER MOVE right");
//     }
// });

 
const students = [
  { name: "Alice", city: "New York", age: 20 },
  { name: "Bob", city: "Los Angeles", age: 22 },
  { name: "Charlie", city: "Chicago", age: 19 }
];

students.forEach(student => {
  console.log(`My name is ${student.name}, I am ${student.age} years old, and I live in ${student.city}.`);
});

const totals = products.reduce(
  (acc, product) => {
    acc.totalQuantity += product.quantity;
    acc.totalPrice += product.price * product.quantity;
    return acc;
  },
  { totalQuantity: 0, totalPrice: 0 } // initial values
);

console.log(`Total Quantity: ${totals.totalQuantity}`);
console.log(`Total Price: $${totals.totalPrice}`);

const student = [
  { name: "Alice", city: "New York", age: 20 },
  { name: "Bob", city: "Los Angeles", age: 22 },
  { name: "Charlie", city: "Chicago", age: 19 }
];

students.forEach(student => {
  console.log(`My name is ${student.name}, I am ${student.age} years old, and I live in ${student.city}.`);
});