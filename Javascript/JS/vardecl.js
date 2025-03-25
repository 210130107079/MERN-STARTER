console.log("Variable Declaration !")

var a = 30;
var b = "Hello";
const name = "This" //Cannot be changed - throws an error (Initialization must be done !)

console.log(a);

{
    //Let only works inside specific block
    let a = 50;
    console.log(a);
}


//

console.log("Coditional Statements !");
let a=25;

if(a>21){
    // alert("Valid Age to Drive !");
    console.log("Valid Age to Drive !");
}
else{
    // alert("Not Valid Age ! Try again later !");
    console.log("Not Valid Age ! Try again later !");
}