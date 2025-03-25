function person(firstname,lastname)
{
    this.firstname = firstname
    this.lastname = lastname
}

const p1 = new person("Bruce","Wayne")
const p2 = new person("Izuku","Midoriya")

person.prototype.getFullName = function(){
    return this.firstname+' '+this.lastname
}

console.log(p1.getFullName())
console.log(p2.getFullName())

//Inheritance
function SuperHero(firstname,lastname)
{
    person.call(this,firstname,lastname)
    this.isSuperHero = true
}
SuperHero.prototype.fightCrime = function(){
    console.log("Fighting Crime !");
}

SuperHero.prototype = Object.create(person.prototype)

const batman = new SuperHero()
SuperHero.prototype.constructor = SuperHero
console.log(batman.getFullName())