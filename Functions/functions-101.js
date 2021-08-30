let greetUser = function () {
    console.log('Welcome User')
}

greetUser()

let square = function (num) {
 let result = num * num
 return result
}

square(3)
console.log(square(3))

//Challenge area
let convertFtoC = function (f) {
    c = (f - 32) * (5/9)
    return c
}
console.log(convertFtoC(68))