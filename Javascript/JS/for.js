//Code-1
const num = prompt("Eneter any Number under 100 !\n");
let factorial = 1

if(num<0){
    console.log("Enter Valid Number !");
}
else{
    for(let i=1;i<=num;i++){
        factorial*=i;
    }

    console.log(factorial);
}




//Code-2
const students = [
    { name: "A", marks: 95 },
    { name: "B", marks: 90 },
    { name: "C", marks: 85 },
    { name: "D", marks: 80 },
    { name: "E", marks: 75 }
];

let totalMarks = 0;
let passed = 0;

for(let i=0 ; i<students.length ; i++)
{
    if(students[i].marks>=40)
    {
        totalMarks+= students[i].marks;
        passed++;
        console.log(`${students[i].name} has Passed !`);
    }
    else
    {
        console.log(`${students[i].name} has Failed !`);
    }
}

if(passed>0)
{
    const average = totalMarks/passed;
    console.log(`Average of the passed students is ${average}`);
}
else
{
    console.log("No Student has Passed !");
}