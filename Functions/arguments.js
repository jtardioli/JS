let add = function(a, b,) {
    return a + b
}

let result = add(10,1)
console.log(result)

// default
let getScoreText = function (name = 'Anon', score = 0) {
    return 'Name:'
}

getScoreText('Andrew', 100)

//challenge
let getTip = function(price, tip = .2) {
    total = (price * tip) + price
    return total
}

console.log(getTip(10, .8))

