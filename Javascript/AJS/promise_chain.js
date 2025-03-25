let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am Promise 1 - 2s")
        resolve(10)
    },2000)
})

p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("I am Promise 2 - 4s")
            resolve(20)
        },4000)
    })
    return p2
}).then((value)=>{
    console.log(value)
    let p3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("I am Promise 3 - 6s")
            resolve(30)
        },6000)
    })
    return p3
}).then((value)=>{
    console.log(value)
})