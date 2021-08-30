// const createCounter = () => {
//     let count = 0

//     return {
//         increment() {
//             count++
//         },
//         decrement() {
//             count--
//         },
//         get() {
//             return count
//         }
//     }
// }

// const counter = createCounter()
// counter.increment()
// counter.decrement()
// counter.decrement()
// console.log(counter.get())

// // adder
// const createAdder = (a) => {
//  return (b) => {
//     return a+b
//  }
// }

// const add10 = createAdder(10)
// console.log(add10(-2))
// console.log(add10(-20))

const createTipper = (tipPercent) => {
    const baseTip = tipPercent
    const getbillAmount = (billTotal) => {
        return baseTip * billTotal + billTotal
    }
 return getbillAmount 

}

const get15Tip = createTipper(.15)
const get20Tip = createTipper(.20)

const rondasTip = get15Tip(10)
const petesTip = get20Tip(10)

console.log(rondasTip)
console.log(petesTip)