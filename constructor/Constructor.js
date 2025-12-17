class Constructor{
    constructor(brand, color, year)
    {
        this.brand = brand;
        this.color = color;
        this.year = year;
    }
}

const obj = new Constructor("BMW","Black",2025);
console.log(obj.brand, obj.color, obj.year);