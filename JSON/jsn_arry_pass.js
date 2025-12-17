const car = [
    {
        name: "BMW",
        productionYear: 2025
    },
    {
        name: "HONDA",
        productionYear: 2024
    }
]

function json_push(jsnarry)
{
    let flag=0;
    let [name, year, model, country] = jsnarry;
    for(let i=0; i<car.length; i++)
    {
        if(car[i].name.toLowerCase()==name.toLowerCase() && car[i].productionYear==year)
        {
            car[i].model = model;
            car[i].country = country;
            flag=1;
        }
    }
    if(flag==0)
    {
        let tmpData = {
            name: name,
            productionYear: year,
            model: model,
            country: country
        }
        car.push(tmpData);
    }
    console.log(car);
}

json_push(["Honda", "2027", "Civic", "Bangladesh"]);
