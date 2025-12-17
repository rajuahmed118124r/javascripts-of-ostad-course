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

function display(index, key)
{
    console.log(car[index][key]);
}

display(0,"productionYear");

