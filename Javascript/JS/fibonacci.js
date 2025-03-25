const num = prompt("Enter the Length of Fibonacci Series : ");
let a=0,b=1,next;

console.log("Fibonacci Series : ")
for (i=0;i<=num;i++)
{
    console.log(b);
    next=a+b;
    a=b;
    b=next;
}