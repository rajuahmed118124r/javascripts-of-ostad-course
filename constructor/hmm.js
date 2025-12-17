

for (let i = 0; i < car.length; i++) {
    if (car[i].name === name && car[i].productionYear === year) {
        car[i].model = model;
        flag++;
    }
}

if (flag === 0) {
    car.push({ name, model, productionYear: year });
}

const mySet = new Set();
car.forEach(c => mySet.add(c));

console.log(mySet);
