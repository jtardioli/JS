// // Callback
// const getDataCallback = (num, callback) => {
//     setTimeout(() => {
//         if(typeof num === 'number') {
//             callback(undefined, num * 2)
//         } else {
//             callback('Number must be a number')
//         }
//     },2000)
// }

// getDataCallback((err, data) => {
//     if (err) {
//         console.log(err)

//     } else {
//         getDataCallback(data, (err, data) => {
//             if (err) {
//                 console.log(err)
        
//             } else {
//                 console.log(data)
//             }
//         })
//     }
// })

// Promise


const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2): reject('number must be provied')
        // reject('This is the error')
    }, 2000)
}) 

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

// Promise chaining

getDataPromise(10).then((data) => {
 return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)  
}).catch((err) => {
    console.log(err)
})