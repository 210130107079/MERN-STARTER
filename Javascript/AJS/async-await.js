function walkedDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const walkeddog = true

            if(walkeddog){
                resolve("You walked the Dog !");
            }
            else{
                reject("You did not wlaked the Dog !");
            }
        },1000);
    })
}

function cleanThrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cleaned = true

            if(cleaned){
                resolve("You cleaned the Tharsh !")
            }
            else{
                reject("You didn't cleaned the Thrash !")
            }
        },2000)
    })
}

function didStudy(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const study = true

            if(study){
                resolve("You Studied !")
            }
            else{
                reject("You didn't Studied !")
            }
        },3000)
    })
}

async function main(){
    try {
        const studyy = await didStudy()
        console.log(studyy);

        const dogg = await walkedDog()
        console.log(dogg);

        const thrashh = await cleanThrash()
        console.log(thrashh);

    } catch (error) {
        console.error(error);
    }
}

main()