// Block scope - variables declared inside a pair of curly braces cannot be accessed from outside the block
// Function scope - variables declared inside a function cannot not be accessed from outside the function
// Global scope - globally scoped variables can be accessed inside a block or function

let a=10
function outer()
{
    let b=20
    function inner()
    {
        let c=30
        console.log(a,b,c)
    }
    inner()
}
outer()