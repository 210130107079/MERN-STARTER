const array1 = ['a', 'b', 'c', 'd', 'e'];
// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// (index, start , end) Parameters
// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));

const array2 = ['a','b','c']
const iterator2 = array2.entries()
console.log(iterator2.next().value);
console.log(iterator2.next().value);    
console.log(iterator2.next().value);
// console.log(iterator2.next().value); This will show undefined cause the array has only 3 elements
// console.log(iterator2.next().value); This too
// console.log(iterator2.next().value); And this too
const isString = array2.every((element)=>typeof(element)=== "string")
const isInt = array2.every((element)=>typeof(element)=== "number")
console.log(isInt);
console.log(isString);

const array3 = [1,2,3,4,5,6,7,8]
console.log(array3.fill(0,1));
// console.log(array3.fill(value,start,end)); Parameter
console.log(array3.fill(10,1));

// Array.find()
// Array.findIndex()
// Array.findLast()
// Array.findLastIndex()

const array4 = [0, 1, [2, [3, [4, 5]]]];
console.log(array4.flat(3));

const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

const array5 = [1,2,3]
array5.shift()
console.log(array5);
array5.unshift(1)
console.log(array5);

const array6 = [1,2,3,'a','b','c']
console.log(array6.some((element)=>typeof(element)==="number"));
console.log(array6.some((element)=>typeof(element)==="string"));

const array7 = [3,2,1]
const array8 = ['Mar','Feb','Jan']
const sortedNum = array7.toSorted()
const reversedMonths = array8.toReversed()
console.log(sortedNum);
console.log(reversedMonths);
array7.unshift(6,5,4);
console.log(array7);

const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null,numbers)
console.log(max);
const min = Math.min.apply(null,numbers)
console.log(min);