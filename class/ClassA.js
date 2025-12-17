const clssB = require("./ClassB");
class ClassA{
    functionA()
    {
        console.log("Printing from ClassA");
        const obj = new clssB();
        obj.functionB();
        obj.functionC();
    }
}

const obj1 = new clssB();
obj1.fucntionD();
obj1.functionB();
const clssA = new ClassA;
clssA.functionA();
