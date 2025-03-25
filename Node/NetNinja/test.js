const name = "Yoshi"
console.log(name);

const greet = (name) => {
    console.log('Hello, ${name}');
}

greet('Yoshi !');

console.log(global);

setTimeout(() => {
    console.log("Timeout !");
    clearInterval(int);
}, 3000);

const int = setInterval(()=>{
    console.log("Interval !");
},1000);