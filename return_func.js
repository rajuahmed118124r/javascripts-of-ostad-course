const readline = require('readline-sync');

function sum(a, b) 
{
    const rstl = a + b;
    return rstl;
}

function result(val) 
{
    const data = sum(3, 8);
    const cal = data - 4 + val;
    console.log("Result:", cal);
}

const val = Number(readline.question("Enter a number: "));
result(val);
