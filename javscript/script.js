// console.log("hello_world!");
// console.log("utkarsh raj");

// let a = 10;
// let b = 15;
// console.log("sum is:",a+b);

// this is comment
// let pencilPrice = 10;
// let penPrice = 5;

// let output = "the total price is:"+(pencilPrice + penPrice) + "rupees.";
// console.log(`the total price is : ${pencilPrice + penPrice} rupees.`)

// ARITHEMATIC OPERATORS
// let a = 10;
// let b = 10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// UNARY OPERATORS
// console.log(a++)
// console.log(++a)

// ASSIGNMENT OPERATORS 
// console.log(a+=b);
// console.log(a-=b);
// console.log(a/=b);
// console.log(a*=b);

// CONDITIONAL STATEMENT

// console.log("before my if statement");
// let age =23;

// if(age >= 18){
//     console.log("you are ready for vote");
//     console.log("you can drive");
// }
// console.log("after my if statement");

// let firstName = "utkarsh";
// if(firstName == "utkarsh"){
//     console.log(`welcome${firstName}`);
// }

// PRACTICE QUESTION
// qs:- create a traffic light system that shows what to do based on color
// let color = "red";
// if(color === "red"){
//     console.log("stop");
// }
// if(color === "yellow"){
//     console.log("slow down");
// }
// if(color === "green"){
//     console.log("go");
// }

// qs-2

// let size = "L";

// if(size === "XL"){
//     console.log("price is rs.250");
// }
// else if(size === "L"){
//     console.log("price is rs.200");
// }
// else if(size === "M"){
//     console.log("price is rs.100");
// }
// else if(size === "S"){
//     console.log("price is rs.50");
// }
// else{
//     console.log("aap popcorn le nhi skte");
// }

// ASSIGNEMENT PART -2
// Q1
// let num = 5;
// if(num%10===0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

// Q2
// let name = prompt("enter your name:");
// let age = prompt("enter your age:");

// let msg = alert("name is age year old");
// console.log(msg);

// using template literals print the alert

// alert(`${name} is ${age} year old`);

// Q3
// let month = 6;
// switch(month){
//     case 1:
//         console.log("january");
//         console.log("february");
//         console.log("march");
//         break;

//     case 2:
//         console.log("april");
//         console.log("may");
//         console.log("june");
//         break;

//     case 3:
//         console.log("july");
//         console.log("august");
//         console.log("september");
//         break;

//     case 4:
//         console.log("october");
//         console.log("november");
//         console.log("december");
//         break;
//     default:
//         console.log("Invalid month");
// }

// Q4
// let str = "baby"

// if((str[0] === "a" || str[0] === "A") && (str.length > 5)){
//     console.log("golden string");
// }
// else{
//     console.log("not a golden string");
// }

// Q5

// let a = 10;
// let b = 50;
// let c = 30;

// if(a>b && a>c){
//     console.log("a is largest");
// }
// else if(b>c && b >a){
//     console.log("b is largest");
// }
// else{
//     console.log("c is largest");
// }
// Q6

// let num = 32;
// let nums = 42;

// if(num % 10 === 2 && nums % 10 ===2){
//     console.log("both numbers end with 2");
// }
// else{
//     console.log("one or both numbers do not end with 2");
// }

// ASSIGNMENT PART 3

// Q1

// let arr = [7,10,2,-4];
// let n = 3;                              //any positive  number

// let ans = arr.slice(0,n);
// console.log(ans);

// Q2

// let arr = [7,10,2,-4];
// let n = 3;                              //any positive  number

// let ans = arr.splice(arr.length -n);
// console.log(ans);

// Q3

// let str = prompt("enter a string:")
// if(str.length == 0){
//     console.log("blank");
// }
// else{
//     console.log("not blank");
// }

// Q4

// let str = "UTKaRSH raJ";
// let idx = 10;
// if (str[idx] == str[idx].toLowerCase()) {
//     console.log("characterb is lower case");
// }
// else {
//     console.log("character is not lower case");
// }

// Q5

// let str = prompt("enter a string:");
// console.log(`original string: ${str}`);
// console.log(`string without spaces: ${str.trim()}`);

// Q6

// let arr = [1, 2, 3, 4, 5];
// let idx = 57;

// if (arr.includes(idx)) {
//     console.log(idx);                        //CASE 1
// }
// else{
//     console.log("not found");
// }

// if(arr.indexOf(idx) !== -1){
//     console.log(idx);
// }
// else{
//     console.log("not found");                   //CASE 2
// }

// loops

// for (i = 1; i <= 10; i++) {
//     let nums = i*5;
//     console.log(nums);
// }

// for (i = 1; i <= 10; i++) {
//     let nums = i*2;
//     console.log(nums);
// }

// for (i = 1; i <= 10; i++) {
//     let nums = i*3;
//     console.log(nums);
// }

// for (i = 1; i <= 10; i++) {
//     let nums = i*4;
//     console.log(nums);
// }

// for (i = 1; i <= 10; i++) {
//     let nums = i*6;
//     console.log(nums);
// }

// let n = prompt("enter a number:");
// n = parseInt(n);
// for (i = n; i <= n*10; i=i+n) {
//     // let nums = i*6;
//     console.log(i);
// }
// let heroes = [["Iron Man", "Captain America", "Thor"], ["Wonder Woman", "Batman", "Flash"]];

// for (let i = 0; i < heroes.length; i++) {
//     console.log(`List # ${i + 1}`);
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }


// let arr = [10, 20, 5, 42, 15, 22, 16,];
// let num = 15;
// function larger(arr,num) {
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }

// larger(arr,num);

// const student = {
//     name: "utkarsh",
//     age: 20,
//     eng: 30,
//     math: 30,
//     sci: 30,
//     getAvg(){
//         let avg =  (this.eng + this.math + this.sci)/3;
//         console.log(avg);
//     }
// };

// student.getAvg();

// try{
//     console.log(a);
// }
// catch(err){
//     console.log("a is not defined");
//     console.log(err);
// }

// const sum = (a, b) => {
//     return a + b;
// };

// const pow = (a, b) => {
//     return a**b;
// };

// const cube = (a) => {
//     return a*a*a;
// };

// const mul = (a, b) => {
//     return a * b;
// };

// const mul = (a, b) => (a * b);

// let arr = [10, 20, 30, 40, 50];

// let arrayAverage = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     let avg = sum/arr.length;
//     return avg;
// };

// console.log(arrayAverage(arr));

// const isEven = (num) => {
//     return num % 2 === 0;
// };
// console.log(isEven(4));
// console.log(isEven(5));
// let hello = "AudioWorkletNode";