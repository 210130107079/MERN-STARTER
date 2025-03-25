let num = [10,20,30,40,50,60];
console.log("Original Array : ",num);

//Adding an element
num.push(70);
console.log("Array after adding an element.\n",num);

//Removing an element
num.pop();
console.log("Array after adding an element.\n",num);

//Finding index of an element in array
let x = num.indexOf(50);
console.log(x);

//Checking if an element exists in the array or not
let exist = num.includes(30);
console.log("Does 30 exist ?\n",exist);

//Slicing an array
let slnum = num.slice(1,4);
console.log("Sliced Array :\n",slnum);

//Reversing an array
let reversenum = num.reverse();
console.log("Array after reversing :",reversenum);
console.log(num);

//Array from string
let strarray = Array.from("HELLO");
console.log("Array created from string :",strarray);

let min = Math.min.apply(null,num);
console.log(min);

let max = Math.max.apply(null,num);
console.log(max);

const newArr = num.map((x) => x * 2);
console.log(newArr);