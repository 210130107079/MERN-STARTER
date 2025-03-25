let unit = prompt("Enter Units : ");
let bill=0;
const j=1000;
const k=900;
const l=800;
const m=700;
const n=600;

if(unit>0 && unit<=100)
{
    bill=unit*10;
    console.log(`You have to pay Total ${bill} Amount !`);
}

else if(unit>100 && unit<=200)
{
    let a = unit-100;
    bill = (a*9)+j;
    console.log(`You have to pay Total ${bill} Amount !`);
}

else if(unit>200 && unit<=300)
{
    let a = unit-200;
    bill = (a*8)+j+k;
    console.log(`You have to pay Total ${bill} Amount !`);
}

else if(unit>300 && unit<=400)
{
    let a = unit-300;
    bill = (a*7)+j+k+l;
    console.log(`You have to pay Total ${bill} Amount !`);
}

else if(unit>400 && unit<=500)
{
    let a = unit-400;
    bill = (a*6)+j+k+l+m;
    console.log(`You have to pay Total ${bill} Amount !`);
}

else
{
    let a = unit-500;
    bill = (a*5)+j+k+l+m+n;
    console.log(`You have to pay Total ${bill} Amount !`);
}