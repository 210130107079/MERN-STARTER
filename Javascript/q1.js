const prompt = require('prompt-sync')()
const string = prompt("Enter a String to check if it's Palindrome or not ! :")

function isPalindrome(string){

    let leftside = 0
    let rightside = string.length-1

    while(leftside < rightside){

        if(string[leftside] !== string[rightside]){
            console.log("Invalid String Input !");
        }

        leftside++;
        rightside--;
    }

    console.log("The Given String is Palindrome String ! ");
}

console.log(isPalindrome(string));