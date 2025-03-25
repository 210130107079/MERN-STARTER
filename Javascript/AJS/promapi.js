let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 1")
    },1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Error 2")
    },2000) 
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 3")
    },3000)
})

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

// Promise.all
// let promise = Promise.all([p1,p2,p3])
// promise.then((value)=>{
//     console.log(value)
// })

// Promise.allSettled
//p2 is rejected
// let promise = Promise.allSettled([p1,p2,p3])
// promise.then((value)=>{
//     console.log(value)
// })

// Promise.race
// let promise = Promise.race([p1,p2,p3])
// promise.then((value)=>{
//     console.log(value)
// })

// Promise.any
// let promise = Promise.any([p1,p2,p3])
// promise.then((value)=>{
//     console.log(value)
// })