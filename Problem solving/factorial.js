function factorial(number)
{
    let ans = 1;
    for(let i=2; i<=number; i++)
    {
        ans*=i;
        // console.log(ans);
    }
    console.log(ans);
}
factorial(6);