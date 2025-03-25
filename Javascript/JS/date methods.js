const d = new Date()
console.log(d);

console.group("Year :",d.getFullYear());

console.group("Month :",d.getMonth());

console.group("Day :",d.getDay());

console.group("Hour :",d.getHours());

console.group("Minute :",d.getMinutes());

console.group("Second :",d.getSeconds());

console.group("Millisecond :",d.getMilliseconds());

/*

setDate()	        Set the day as a number (1-31)
setFullYear()	    Set the year (optionally month and day)
setHours()	        Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	    Set the minutes (0-59)
setMonth()	        Set the month (0-11)
setSeconds()	    Set the seconds (0-59)
setTime()	        Set the time (milliseconds since January 1, 1970)

*/