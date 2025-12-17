const arrayData = ["raju", 10, 20,"moaz", 10.67,"AMI", "Masum"];
let i=0;

while(i<arrayData.length)
{
    if(arrayData[i]=="moaz")
    {
        break;
    }
    else{
        console.log(arrayData[i]);
    } 
    i++;
}