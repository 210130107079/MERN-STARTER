class Person{
    constructor(firstname,lastname)
    {
        this.firstname = firstname
        this.lastname = lastname
    }

    saymyName()
    {
       return this.firstname+' '+this.lastname
    }

    syamyfname()
    {
        return this.firstname
    }

    saymylname()
    {
        return this.lastname
    }
}

const p1 = new Person("Izuku","Midoriya")
console.log(p1.saymyName())
console.log(p1.syamyfname())
console.log(p1.saymylname());