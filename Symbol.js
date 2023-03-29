

let person = {
    name: "Jack"
};

let id = Symbol("id");

person[id] = "Another value";


console.log(person)