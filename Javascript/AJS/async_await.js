async function Await()
{
    let vadodaraW = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("30 Deg")
        },3000)
    })  
    
    let ahmedabadW = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("40 Deg")
        },5000)
    })

    console.log("Fetching Vadodara weather...")
    let vadW = await vadodaraW
    console.log("Fethched weather of Vadodara :"+vadW);

    console.log("Fetching Ahmedabad weather...")
    let ahmW = await ahmedabadW
    console.log("Fethched weather of Ahmedabad :"+ahmW);
}

let a = Await()
a.then((value)=>{
    console.log(value)
})