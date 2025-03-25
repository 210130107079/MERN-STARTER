function createIterator(array)
{
    let index=0
    return{
        next:()=> index < array.length ? {value:array[index++],done:false} : {done:true}
    };
}

const myArray = [1, 2, 3];
const iterator = createIterator(myArray);
console. log(iterator. next());
console. log(iterator. next());
console. log(iterator. next());
console. log(iterator. next());