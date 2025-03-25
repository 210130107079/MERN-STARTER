const ages = [12,34,65,14,63,24,26,35,37,43,38];

let adultage = ages.filter(isAdult)
console.log(adultage);
console.log("");

let childage = ages.filter(isChild)
console.log(childage);

function isAdult(element){
    return element > 21
}

function isChild(element){
    return element < 21
}