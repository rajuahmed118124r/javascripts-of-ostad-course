const object_Data = [
    {
        person1:{
        name: "Raju",
        Roll: 30
        },
    },
    {
        person2:{
        name: "Billal",
        Roll: 18
        },
    },
    {
        person3:{
        name: "Imran",
        Roll: 20
        }
    }
]

console.log(object_Data[0]["person1"]["name"]) //should print Raju 
console.log(object_Data[0]["person1"]["Roll"]) //should print 30 
console.log(object_Data[0]["person1"]) //should print Raju and 30
console.log(object_Data) //should print full object


