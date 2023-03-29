const obj = {
    name: "Sakhia", 
    age: "102", 
    location: "MTL"
}


//1. Square Brackets
//object['key'] = value
console.log(obj)
obj.height = "180"
console.log(obj)
obj.location = "Vancouver"
console.log(obj)
obj.name  = "Sam"
console.log(obj)
obj.destination = obj.location
delete obj.location
console.log(obj)
//2. Dot Notation
// object.key = value
// console.log(obj.name)

//3. Variables
// let key = "name"
// console.log(obj[key])


// const array = ["Sakhia", "Michael", "Brad", "Annie"]
// const array1 = {
//     "0": "Sakhia", 
//     "1": "Michael", 
//     "2": "Brad", 
//     "3": "Annie" 
// }
// console.log(array[1])
// console.log(array1[1])

const func = () => {
    console.log("Hello")
}

const func1 = {
    function: () => {
        console.log("Hello")
    }
}

console.log(func)

func.height = "180"
console.log(func)
func.location = "Vancouver"
console.log(func)
func.name  = "Sam"
console.log(func)
func.destination = func.location
delete func.location
console.log(func)

const data = () => {
    console.log("This is my function")
}

// console.log(typeof obj)
// console.log(typeof array)
// console.log(typeof func)