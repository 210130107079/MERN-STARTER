const words = ["cat", "sun", "tree", "blue", "fish", "elephant", "butterfly", "mountain", "universe", "adventure"];

console.log(words.filter(shortWord));

function shortWord(element){
    return element.length <= 6;
}