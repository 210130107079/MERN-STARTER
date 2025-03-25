const numbers = [45, 4, 9, 16, 25];
console.log("Original Array :",numbers);

//For-each
let fearray = numbers.forEach((a)=>{
    console.log(a+5);
});

//Map
let marray = numbers.map((element)=>{
    return element*element;
})
console.log(marray);

let marray1 = numbers.map((element)=>{
    return element*10;
})
console.log(marray1);

//Flat
let farray = numbers.flatMap((x)=>x*2);
console.log(farray);

//Filter
let filarray = numbers.filter((value,index,array)=>{
    return value > 10;
});
console.log(filarray);

//Reduce
let rarray = numbers.reduce((p1,p2)=>{
    return p1+p2;   
});