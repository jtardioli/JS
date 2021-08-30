let temp = 65

if(temp >= 60 && temp <= 90) {
console.log('it is nice out')
}

// challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('only serve vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('offer both vegan and nonvegan meals')

} else {
    console.log('Dont offer vegan meals')
}

