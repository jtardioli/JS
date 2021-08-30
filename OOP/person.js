class Person{
 constructor(firstName, lastName, age, likes = [] ){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes

 }
 getBio() {
    let bio = `${this.firstName} ${this.lastName} is ${this.age} years old`
    this.likes.forEach((like) => {
        bio += `. ${this.firstName} likes ${like}`
    })
    return bio   
 }

 set fullName (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
 }
}

class Employee extends Person{
    constructor(firstName, lastName, age, position, likes = [] ) {
        super(firstName, lastName, age,  likes = [] )
        this.position = position


    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age,  likes = [], grade) {
        super(firstName, lastName, age,  likes = [] )
        this.grade = grade


    }
    getBio() {
        let classStatus
        console.log(this.grade > 60)
        this.grade >= 70 ? classStatus = 'passing': classStatus = 'failing'
        return `${this.firstName} ${this.lastName} is ${classStatus} the class`
    }
    updategrade(num) {
        this.grade += num
    }
        
}

const me = new Student('Joshua', 'tardioli', 22, [], 70)
console.log(me.getBio())
me.fullName = 'fart martin'
me.updategrade(-50)
console.log(me.getBio())
