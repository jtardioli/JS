let num = 103.941
//console.log(num.toFixed(2))

let min = 0
let max = 1

let randomNum = Math.floor(Math.random() * (max - min + 1) + min)

//console.log(randomNum)

let numGuess = function (guess) {
    let min = 0
    let max = 1
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(guess)
    console.log(randomNum)
    return guess == randomNum
}

console.log(numGuess(1))