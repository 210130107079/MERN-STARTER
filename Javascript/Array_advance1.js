const users = [
    { id: 1, name: 'User1', age: 32, salary: 35810 },
    { id: 2, name: 'User2', age: 63, salary: 56939 },
    { id: 3, name: 'User3', age: 76, salary: 33283 },
    { id: 4, name: 'User4', age: 48, salary: 58136 },
    { id: 5, name: 'User5', age: 33, salary: 74238 },
    { id: 6, name: 'User6', age: 75, salary: 46766 },
    { id: 7, name: 'User7', age: 72, salary: 63456 },
    { id: 8, name: 'User8', age: 77, salary: 73635 },
    { id: 9, name: 'User9', age: 52, salary: 33610 },
    { id: 10, name: 'User10', age: 73, salary: 74356 },
    { id: 11, name: 'User11', age: 39, salary: 72369 },
    { id: 12, name: 'User12', age: 51, salary: 33914 },
    { id: 13, name: 'User13', age: 46, salary: 57587 },
    { id: 14, name: 'User14', age: 53, salary: 47801 },
    { id: 15, name: 'User15', age: 62, salary: 52988 },
    { id: 16, name: 'User16', age: 43, salary: 72887 },
    { id: 17, name: 'User17', age: 58, salary: 43322 },
    { id: 18, name: 'User18', age: 24, salary: 38457 },
    { id: 19, name: 'User19', age: 43, salary: 35954 },
    { id: 20, name: 'User20', age: 73, salary: 74824 },
    { id: 21, name: 'User21', age: 37, salary: 78895 },
    { id: 22, name: 'User22', age: 67, salary: 35074 },
    { id: 23, name: 'User23', age: 55, salary: 74758 },
    { id: 24, name: 'User24', age: 77, salary: 40927 },
    { id: 25, name: 'User25', age: 61, salary: 65957 },
    { id: 26, name: 'User26', age: 24, salary: 54635 },
    { id: 27, name: 'User27', age: 40, salary: 74800 },
    { id: 28, name: 'User28', age: 40, salary: 73189 },
    { id: 29, name: 'User29', age: 55, salary: 51142 },
    { id: 30, name: 'User30', age: 31, salary: 77725 },
    { id: 31, name: 'User31', age: 65, salary: 74531 },
    { id: 32, name: 'User32', age: 57, salary: 63466 },
    { id: 33, name: 'User33', age: 19, salary: 34143 },
    { id: 34, name: 'User34', age: 65, salary: 56328 },
    { id: 35, name: 'User35', age: 65, salary: 54621 },
    { id: 36, name: 'User36', age: 71, salary: 76763 },
    { id: 37, name: 'User37', age: 45, salary: 34918 },
    { id: 38, name: 'User38', age: 38, salary: 51043 },
    { id: 39, name: 'User39', age: 35, salary: 68847 },
    { id: 40, name: 'User40', age: 57, salary: 33761 },
    { id: 41, name: 'User41', age: 24, salary: 31884 },
    { id: 42, name: 'User42', age: 23, salary: 70682 },
    { id: 43, name: 'User43', age: 77, salary: 54003 },
    { id: 44, name: 'User44', age: 74, salary: 33614 },
    { id: 45, name: 'User45', age: 43, salary: 56871 },
    { id: 46, name: 'User46', age: 36, salary: 69340 },
    { id: 47, name: 'User47', age: 44, salary: 32062 },
    { id: 48, name: 'User48', age: 29, salary: 73219 },
    { id: 49, name: 'User49', age: 52, salary: 59414 },
    { id: 50, name: 'User50', age: 34, salary: 47371 },
    { id: 51, name: 'User51', age: 28, salary: 40581 },
    { id: 52, name: 'User52', age: 39, salary: 75768 },
    { id: 53, name: 'User53', age: 65, salary: 60677 },
    { id: 54, name: 'User54', age: 53, salary: 46302 },
    { id: 55, name: 'User55', age: 48, salary: 47444 },
    { id: 56, name: 'User56', age: 44, salary: 75029 },
    { id: 57, name: 'User57', age: 56, salary: 63197 },
    { id: 58, name: 'User58', age: 74, salary: 31033 },
    { id: 59, name: 'User59', age: 60, salary: 72555 },
    { id: 60, name: 'User60', age: 69, salary: 61532 },
    { id: 61, name: 'User61', age: 75, salary: 63898 },
    { id: 62, name: 'User62', age: 28, salary: 76601 },
    { id: 63, name: 'User63', age: 45, salary: 62182 },
    { id: 64, name: 'User64', age: 50, salary: 70970 },
    { id: 65, name: 'User65', age: 52, salary: 54009 },
    { id: 66, name: 'User66', age: 57, salary: 53185 },
    { id: 67, name: 'User67', age: 39, salary: 73988 },
    { id: 68, name: 'User68', age: 61, salary: 74513 },
    { id: 69, name: 'User69', age: 74, salary: 77200 },
    { id: 70, name: 'User70', age: 75, salary: 72295 },
    { id: 71, name: 'User71', age: 73, salary: 63902 },
    { id: 72, name: 'User72', age: 70, salary: 38801 },
    { id: 73, name: 'User73', age: 38, salary: 39913 },
    { id: 74, name: 'User74', age: 18, salary: 30786 },
    { id: 75, name: 'User75', age: 65, salary: 33315 },
    { id: 76, name: 'User76', age: 66, salary: 57261 },
    { id: 77, name: 'User77', age: 37, salary: 37444 },
    { id: 78, name: 'User78', age: 33, salary: 66358 },
    { id: 79, name: 'User79', age: 33, salary: 75956 },
    { id: 80, name: 'User80', age: 76, salary: 67861 },
    { id: 81, name: 'User81', age: 37, salary: 40273 },
    { id: 82, name: 'User82', age: 65, salary: 69470 },
    { id: 83, name: 'User83', age: 35, salary: 50836 },
    { id: 84, name: 'User84', age: 27, salary: 75040 },
    { id: 85, name: 'User85', age: 64, salary: 62294 },
    { id: 86, name: 'User86', age: 41, salary: 45863 },
    { id: 87, name: 'User87', age: 60, salary: 72764 },
    { id: 88, name: 'User88', age: 48, salary: 31402 },
    { id: 89, name: 'User89', age: 35, salary: 69780 },
    { id: 90, name: 'User90', age: 67, salary: 67055 },
    { id: 91, name: 'User91', age: 58, salary: 68733 },
    { id: 92, name: 'User92', age: 49, salary: 70768 },
    { id: 93, name: 'User93', age: 27, salary: 45186 },
    { id: 94, name: 'User94', age: 25, salary: 49416 },
    { id: 95, name: 'User95', age: 62, salary: 42978 },
    { id: 96, name: 'User96', age: 69, salary: 53820 },
    { id: 97, name: 'User97', age: 39, salary: 48328 },
    { id: 98, name: 'User98', age: 30, salary: 74036 },
    { id: 99, name: 'User99', age: 33, salary: 76392 },
    { id: 100, name: 'User100', age: 72, salary: 71934 }
]

// 1. filter(): Get users with age greater than 40
const bigAge = users.filter(user=>user.age>40)
console.log(bigAge)

// 2. map(): Create a new array with users' names in uppercase whom have age greater than 50
const upperAge = users.filter(user=>user.age>50).map(user=>user.name.toUpperCase())
console.log(upperAge)

// 3. reduce(): Calculate the total salary of all users
const totalSalary = users.map(user=>user.salary).reduce((prev,next)=>prev+next)
console.log(totalSalary)

// 4. find(): Find the first user whose salary is more than 50,000
const firstFifty = users.find(user=>user.salary>50000)
console.log(firstFifty)

// 5. Get a list of users with a salary between 40,000 and 60,000
const betweenCond = users.filter(user=>user.salary>40000 && user.salary<60000)
console.log(betweenCond)

// 6. Find the average age of all users salary
const averageSalary  = users.map(user=>user.salary).reduce((prev,next)=>prev+next)/users.length
console.log(averageSalary)

// 7. Find the average age of all users age
const averageAge = users.map(user=>user.age).reduce((prev,next)=>prev+next)/users.length
console.log(averageAge)

// 8. Check if every user earns more than 30,000
const morethanThirty = users.every(user=>user.salary>30000)
console.log(morethanThirty)

// 9. Check if at least one user is older than 70
const greaterthanSeventy = users.some(user=>user.age>70)
console.log(greaterthanSeventy)

// 10. Group users by age range (below 30, 30-50, above 50)
const groupedBy = {
    Below30 :users.filter(user=>user.age<30),
    btwn3050 :users.filter(user=>user.age>30 && user.age<50),
    above50:users.filter(user=>user.age>50)
}
console.log(groupedBy)

// 11. Sort users by salary in descending order
const ascSalary = users.sort((a,b) => a.salary-b.salary)
console.log(ascSalary)

// 12. Sort users by salary in descending order
const descSalary = users.sort((a,b)=>b.salary-a.salary)
console.log(descSalary)

// 11. Find the highest and lowest salary among users
const highSalary = Math.max(...users.map(user=>user.salary))
console.log(highSalary)
const lowSalary = Math.min(...users.map(user=>user.salary))
console.log(lowSalary)

// 12. Count how many users are above the age of 50
const countFifty = users.filter(user=>user.age>50).length
console.log(countFifty)

// 13. Create an array of user objects with only id and name properties
const userId = users.map(({id,name})=> ({id,name}))
console.log(userId)

// 14. Find the user with the longest name
const longestName = Math.max(...users.map(user=>user.name.length))
console.log(longestName)