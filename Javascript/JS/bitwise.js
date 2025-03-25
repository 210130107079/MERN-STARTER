// Read, Write, Execute
//00000001 = 1
//00000010 = 2
//00000100 = 4

const readPermission = 1
const writePermission = 2
const executePermission = 4

let myPermisison = 0
myPermisison = myPermisison | executePermission | readPermission

const message = (myPermisison & executePermission) ? "YES" : "NO"
console.log(message)

const message1 = (myPermisison & writePermission) ? "YES" : "NO"
console.log(message1)

const message2 = (myPermisison & readPermission) ? "YES" : "NO"
console.log(message2)