const users = [
    { id: 1, name: "Alice", age: 25, salary: 50000 },
    { id: 2, name: "Bob", age: 30, salary: 60000 },
    { id: 3, name: "Charlie", age: 35, salary: 70000 },
    { id: 4, name: "David", age: 40, salary: 80000 },
    { id: 5, name: "Eve", age: 45, salary: 90000 }
  ];

// 1. filter(): Get users with age greater than 30
const bigAge = users.filter((user)=>user.age>30)
console.log(bigAge);

// 2. map(): Create a new array with users' names in uppercase
const upperName = users.map((user)=>user.name.toUpperCase())
console.log(upperName);

// 3. reduce(): Calculate the total salary of all users
const totalSalary = users.map(user=>user.salary).reduce((previous,next)=> previous+next)
console.log(totalSalary);

// 4. find(): Find the first user whose salary is more than 60,000
const greaterSalary = users.find((user)=>user.salary>60000)
console.log(greaterSalary);

// Advanced use case: Combining methods
// Get names of users older than 30, in uppercase, sorted alphabetically
const finalMethod = users.filter(user=>user.age>30).map(user=>user.name.toUpperCase()).sort()
console.log(finalMethod);