function grade(num)
{
    if(num>=80 && num<=100)
    {
        return 4.0;
    }
    else if(num>=75 && num<=79)
    {
        return 3.75;
    }
    else if(num>=70 && num<=74)
    {
        return 3.50;
    }
    else if(num>=65 && num<=69)
    {
        return 3.25;
    }
    else if(num>=60 && num<=64)
    {
        return 3.00;
    }
    else if(num>=55 && num<=59)
    {
        return 2.75;
    }
    else if(num>=50 && num<=54)
    {
        return 2.50;
    }
    else if(num>=45 && num<=49)
    {
        return 2.25;
    }
    else if(num>=40 && num<=44)
    {
        return 2.00;
    }
    else{
        return 0;
    }
}

const arryMarks = [0, 80, 70, 65, 75, 45, 68];
let total_grade = 0, i;

for(i=0; i<arryMarks.length; i++)
{
    if(arryMarks[i]<40)
    {
        console.log("Sorry! You failed in the exam");
        return;
    }
    total_grade+=grade(arryMarks[i]);
}

console.log("CGPA is:", (total_grade/7).toFixed(2));

