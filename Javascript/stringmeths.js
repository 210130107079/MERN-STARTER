const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log("String.at()");
console.log(`Character at index 5 is ${sentence.at(5)}`);
console.log(`Character at index 14 is ${sentence.at(14)}`);
console.log("");

console.log("String.charAt()");
console.log(`Character at index 5 is ${sentence.charAt(5)}`);
console.log(`Character at index 14 is ${sentence.charAt(14)}`);
console.log("");

console.log("String.charCodeAt()");
const index = 10;
console.log(`The character code at ${sentence.charCodeAt(index)} is ${sentence.charAt(index)}`);
console.log("");

console.log("String.endsWith()");
console.log(sentence.endsWith("dog."));
console.log(sentence.endsWith("cat."));
console.log("");

console.log("String.includes()");
console.log(sentence.includes("quick"));
console.log(sentence.includes("soham"));
console.log("");

console.log("String.indexOf()");
console.log(sentence.indexOf("quick"));
console.log(sentence.indexOf("hi"));
console.log("");

console.log("String.match()");
const s1 = "Hi. My Name is Izuku."
const s3 = "ABJALKJIOEASD"
const s2 = /[A-Z]/g;
console.log(s1.match(s2));
console.log(s3.match(s2));
console.log("");

console.log("String.padEnd()");
const str1 = "200"
console.log(str1.padEnd(10,"."));
console.log("");

console.log("String.padStart()");
const str2 = "200"
console.log(str2.padStart(10,"*"));
console.log("");

console.log("String.repeat()");
console.log(str2.repeat(5));
console.log("");

console.log("String.replace()");
console.log(str2.replace("200","500"));
console.log("");

console.log("String.slice()");
console.log(sentence.slice(10));
console.log(sentence.slice(20));
console.log("");