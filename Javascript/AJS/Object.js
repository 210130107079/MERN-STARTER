//creating an empty Object
// const person = {}
// const person = new Object()

function person(firstname,lastname,age)
{
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
}

person.prototype.getFullName = function(){
    return this.firstname+' '+this.lastname
}

const myFather = new person("John", "Doe", 50, "blue");
const myMother = new person("Sally", "Rally", 48, "green");

console.log(myFather)
console.log(myMother)

console.log(myFather.getFullName())
console.log(myMother.getFullName())


const human = {
    firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
}

//Returns the whole object in key-value pair
let a = Object.entries(human)
console.log(a);

//Returns value of the object
let b = Object.values(human)
console.log(b);

//Returns the key related to object specified
let c = Object.keys(human)
console.log(c);

//For in
const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  for(let x in person)
  {
      console.log(x+" : "+person[x])
  }