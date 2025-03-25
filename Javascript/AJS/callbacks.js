// function Displayer(x){
//     console.log(x)
// }
// function sum(num1 , num2){
//     let sum = num1+num2
//     Displayer(sum)
// }
// sum(10,20)



function Displayer(x){
    console.log(x);
}
function sum(n1,n2,fn){
    let sum = n1+n2
    fn(sum)
}
sum(10,20,Displayer)