let name = ' Joshua Tardioli '

console.log(name.length)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

console.log(name.includes('fa'))

console.log(name.trim())

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('askdfjksadjhfpasswordalsdjflkasdj'))