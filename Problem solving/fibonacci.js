function fibonacci(number)
{
    let num1=0, num2=1, curr;
    console.log(num1, num2);
    for(let i=2; i<=number; i++)
    {
        curr = num1 + num2;
        console.log(curr);
        num1 = num2;
        num2 = curr;
    }
}

fibonacci(7);