const car = [
    {
        name: "BMW",
        productionYear: 2025
    },
    {
        name: "HONDA",
        productionYearL: 2024
    }
]

function json_push(name, year, model)
{
    let flag=0;
    for(let i=0; i<car.length; i++)
    {
        if(car[i].name==name && car[i].productionYear==year)
        {
            car[i].model = model;
            flag=1;
        }
    }
    if(flag==0)
    {
        let tmpData = {
            name: name,
            productionYear: year,
            model: model
        }
        car.push(tmpData);
    }
    console.log(car);
}

// json_push("BMW", 2021, "Civic");

json_push(["Honda", "2025", "Civic", "Bangladesh"]);
// json_push({name: "BMW", productionYear: "2025", model:"EX"});