const calculate = require("./Calculator");
const cal = new calculate();

class Result{
    getSum(a, b)
    {
        console.log(`Sum of ${a} and ${b} is: ${cal.sum(a,b)}`);
    }
    getSub(a,b)
    {
        if(a>b)
        {
            console.log(`Substraction of ${a} from ${b} is: ${cal.sub(a,b)}`);
        }
        else{
            console.log(`Substraction of ${b} from ${a} is: ${cal.sub(b,a)}`);
        }
    }
    getMul(a,b)
    {
        console.log(`Multiplication of ${a} and ${b} is: ${cal.multi(a,b)}`);
    }
    getDiv(a,b)
    {
        console.log(`Division result is: ${cal.div(a,b)}`);
    }
}
const res = new Result();
res.getSum(2,5);
res.getSub(2,5);
res.getMul(2,5);
res.getDiv(200,5);