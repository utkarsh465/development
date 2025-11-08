// console.log("hello from script.js");
// console.log("hello from script.js");


// let args = process.argv;

// for(let i = 2; i<args.length;i++){
//     console.log("hello to",args[i]);
// }


// MODULE.EXPORT , REQUIRE(), EXPORTS

const math = require("./Math_function.js");

console.log("sum is ",math.sum(2,3));
console.log("mul is ",math.mul(2,3));
console.log("PI is ",math.PI);
console.log("g is ",math.g);