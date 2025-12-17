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

function json_push(obj)
{
    let flag=0;
    let {name, productionYear, model} = obj;
    for(let i=0; i<car.length; i++)
    {
        if(car[i].name==name && car[i].productionYear==productionYear)
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

json_push({name: "BMW", productionYear: 2025, model:"EX"});