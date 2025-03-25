const array = [1,2,3,4,5,6,7,8,9,10]

let[x,y,...rest] = array;
console.log(x,y,rest);

function sum(a,b)
{
    return a+b
}

console.log(...array);
console.log(sum(...array));