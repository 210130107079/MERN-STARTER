const array = [1,2,3,3,4,2,4,5,6,7,6,5]
const repeated = []
const seenNumbers = []
console.log(array);

for ( let num of array){

    if(seenNumbers.includes(num)){
        if(!repeated.includes(num)){
            repeated.push(num)
        }
    }
    else{
        seenNumbers.push(num)
    }
}
console.log(repeated);