const array = [1,2,3,4,5]

const[a,b,c,...rest]=array
console.log(a,b,c,rest);

const object = { a: 1,b: 5 }
const{x,y}=object
console.log(x,y)

function sum(v1,v2,v3,v4,v5)
{
    return v1+v2+v3+v4+v5;
}

console.log(sum(...array));

const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let[fruit1, , ,fruit2]=fruits;      //fruit1=bananas and fruit2=mangos
// let[fruit1,fruit2]=fruits;       fruit1=bananas and fruit2=oranges
console.log(fruit1)
console.log(fruit2)

//Swapping
let fName = 'John';
let lName = 'Doe';
[fName,lName]=[lName,fName];
console.log(fName)
console.log(lName)