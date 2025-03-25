//If else and else if statement
let a = prompt( "Hey whats you age?")

if(a<0){
    alert("This is an invalid age !");
}
else if(a<9){
    alert("You are a kid")
}
else{
    alert("You can drive !")
}


//Switch Statement
let time = "Afternoon";

switch(time){

    case "Morning":
        console.log("Good Morning !");
        break;

    case "Afternoon":
        console.log("Good Afternoon !");
        break;

    case "Evening":
        console.log("Good Evening !");
        break;

    case "Night":
        console.log("Good Night !");
        break;
}

//While Statement
let x=20;

while(x>10)
{
    x--;
    console.log(x)
}
console.log("Completed !");

//For Loop
for(let i=0;i<10;i++)
{
    console.log(i);
    console.log("Iteration Done !");
}