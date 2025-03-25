const prices = [5, 30, 10, 25, 15, 20];

// let total = prices.reduce(sum)
// console.log(total);

// let maxvalue = prices.reduce(max)
// console.log(maxvalue);

// let minvalue = prices.reduce(min)
// console.log(minvalue);

// function sum(previous , next){
//     return previous + next ;
// }

// function max(previous,next){
//     return Math.max(previous,next)
// }

// function min(previous,next){
//     return Math.min(previous,next)
// }

const total = prices.reduce((previous,next)=>{
    return previous + next
})
console.log(total);

const maxvalue = prices.reduce((previous,next)=>{
    return Math.max(previous,next)
})
console.log(maxvalue);

const minvalue = prices.reduce((previous,next)=>{
    return Math.min(previous,next)
})
console.log(minvalue);