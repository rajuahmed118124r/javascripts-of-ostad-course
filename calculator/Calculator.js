class Calculator{
    sum(a,b)
    {
        return a+b;
    }
    sub(a,b)
    {
        if(a>b)
        {
            return a-b;
        }
        return b-a;
    }
    multi(a,b)
    {
        return a*b;
    }
    div(a,b)
    {
        if(a>b)
        {
            return a/b;
        }
        return b/a;
    }
}

module.exports = Calculator;