// argv:is an array containing the command line arguments passed when the Node.js process was launched.

console.log(process.argv);

function sum(a,b)
{
    return a+b;
}

let sum1=(a,b)=>{
    return a+b;
}


function product (a,b)
{
    return a*b;
}

module.exports={
    sum,product
}

