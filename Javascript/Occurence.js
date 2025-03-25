const array = [1,2,3,3,4,2,4,5,6,7,6,5]
console.log(array)
const repeated = []

for(i=0;i<array.length-1;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            repeated.push(array[i])
        }
    }
}
console.log(repeated);