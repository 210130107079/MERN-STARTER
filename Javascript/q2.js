function myMap(array,callbackfunction)
{
    const result = [];

    for(let i=0 ; i<array.length; i++){
        result.push(callbackfunction(array[i],i,array))
    }
    return result;
}

const number = [1,2,3,4,5];
const squared = myMap(number,num=> num*num)
console.log(squared);