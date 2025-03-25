// A closure is the combination of a function bundled together with references to its surrounding
// state. Closures are created every time a function is created, at function creation time.

//
function outer()
{
    let closure = 0 
    function inner()
    {
        closure++
        console.log(closure)
    }
    inner()
}
outer()
outer()
outer()


//
function outer1(){
    let closure1 = 0
    function inner1(){
        closure1++
        console.log(closure1)
    }
    return inner1
}
const fn = outer1()
fn()
fn()
fn()