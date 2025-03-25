const months = ['Jan', 'March', 'April', 'June'];

// Adding February
months.splice(1,0,"Feb");
console.log(months);

//Replacing June with May
months.splice(4,1,'May')
console.log(months);

//Adding remaining Months
months.splice(5,0,'June')
months.splice(6,0,'July')
months.splice(7,0,'Aug')
months.splice(8,0,'Sept')
months.splice(9,0,'Oct')
months.splice(10,0,'Nov')
months.splice(11,0,'Dec')
console.log(months);

//Deleting first two months
months.splice(0,2)
console.log(months);

//Deleting last two months
months.splice(8,2)
console.log(months);

//Removing Oct from the Array
months.splice(months.length-1,1)
console.log(months);

//Removing july using minus integer in parameter
months.splice(-3,1)
console.log(months);