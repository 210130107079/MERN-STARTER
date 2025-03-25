let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("After 2 Seconds !");
    },2000)
    resolve(5)
})

p1.then((value)=>{
        console.log(value);
})


let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("After 5 Seconds !");
        reject(new Error("I am an Error"))
    },5000)
})

p2.catch((err)=>{
        console.log(err);
})