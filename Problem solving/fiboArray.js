function fibonacci(number)
{
    let arr = [0,1];
    for(let i=2; i<=number;i++)
    {
        let curr = arr[i-1]+arr[i-2];
        console.log(curr);
        // arr.push(curr);
    }
    console.log(arr);
}

fibonacci(7)