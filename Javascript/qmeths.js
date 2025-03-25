const array = [
    {name:"A",city:"Ahmedabad"},
    {name:"B",city:"Vadodara"},
    {name:"C",city:"Vadodara"},
    {name:"D",city:"Surat"}
]

console.log(array.filter((x)=>x.city==="Vadodara"));
console.log(array.find((x)=>x.city === "Vadodara"));
console.log(array.map((x)=>x.city === "Vadodara")); 