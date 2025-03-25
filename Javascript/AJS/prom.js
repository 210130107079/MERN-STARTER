//Promise

let p = new Promise((resolve,reject)=>{

    const condition = true
    //resolve()
    //reject()
    setTimeout(()=>{
        if(condition){
            resolve("Promise Resolved !")
        }
        else{
            reject("Promise not Fulfilled !")
        }
    },5000)
})

let wait = await p
console.log(wait);
console.log("Hello !");