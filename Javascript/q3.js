function deBounce(func,delay){
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        setTimeout(()=>func.apply(this, args),delay);
    };
}

const logMessage = deBounce((messgae)=>console.log(messgae),2000)
logMessage("Hello")