class Constructor_1{
    constructor(name, roll, dept)
    {
        this.name = name;
        this.roll = roll;
        this.dept = dept;
    }
    displayInfo()
    {
        console.log(`My name is: ${this.name}`);
        console.log(`My roll is: ${this.roll}`);
        console.log(`My department name is: ${this.dept}`);
    }
}

module.exports = Constructor_1;




