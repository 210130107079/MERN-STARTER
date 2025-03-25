function deepClone(obj){

    if(obj === null || obj!=='object'){
        return obj;
    }

    if(Array.isArray(obj)){
        return obj.map(item=>deepClone(item))
    }

    const clonedObj ={}

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;

}

const original1 = { a: 1, b: { c: 2, d: [3, 4] } };
const copy1 = deepClone(original1)
console.log(copy1);

const original2 = {};
const copy2 = deepClone(original2)
console.log(copy2);

const original3 = null;
const copy3 = deepClone(original3)
console.log(copy3);