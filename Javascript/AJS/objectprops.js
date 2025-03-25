const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
};

// Object.defineProperty(person, "age" , {value:"45"});

person.age = 20

console.log(person.age)

// console.log(Object.getOwnPropertyNames(person))
// console.log(Object.getOwnPropertyDescriptor(person))
// console.log(Object.getOwnPropertySymbols(person))

console.log(Object.keys(person))
console.log(Object.getOwnPropertyNames(person))