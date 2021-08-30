const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a string')
    }
}

try {
    const result = getTip('test')
    console.log(result)
} catch (e) {
    console.log('catch block is running')
}
