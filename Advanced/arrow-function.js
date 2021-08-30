const square = (num) => {
    return num * num
}

const squareLog = (num) => num * num

const people = [{
    name: 'anderew',
    age: 27
}, {
    name: 'vikram',
    age: 31
}, {
    name: 'Jess',
    age:22
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)


console.log(under30)

const ch = people.find((person) => person.age === 22)
console.log(ch)