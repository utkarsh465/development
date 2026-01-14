
// case 1 for using module.exports

// const sum = (a,b) => a+b;
// const mul = (a,b) => a*b;
// const PI = 3.14;
// const g = 9.8;

// let object = {
//     sum:sum,
//     mul:mul,
//     PI:PI,
//     g:g
// };

// module.exports = object;

// case 2 for using MediaSourceHandle.export or export

// const sum = (a,b) => a+b;
// const mul = (a,b) => a*b;
// const PI = 3.14;
// const g = 9.8;

// module.exports = {
//     sum:sum,
//     mul:mul,
//     PI:PI,
//     g:g
// };


// case 3 for using module.exports and exports

// module.exports.sum = (a,b) => a+b;
// module.exports.mul = (a,b) => a*b;
// module.exports.PI = 3.14;
// module.exports.g = 9.8;

// console.log("case 4 for using only exports");

// exports.sum = (a,b) => a+b;
// exports.mul = (a,b) => a*b;
// exports.PI = 3.14;
// exports.g = 9.8;




// REQUIRE V/S IMPORT

export const sum = (a,b) => a+b;
export const mul = (a,b) => a*b;
export const PI = 3.14;
export const g = 9.8;