const getPuzzle = async (wordCount) => {

    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }

}

export { getPuzzle as default } 


// const getCountry = async (countryName) => {
//     const response = await fetch('http://restcountries.eu/rest/v2/all')
//         if (response.status === 200) {
//             const data = await response.json()
//             let country = data.find((country) => {
//                 return country.alpha2Code === countryName
//             })
//             return country.name

//         } else {
//             throw new Error(`unable to fetch country`)
//         }

// }

// // const getLocation = async () => {
// //     const response = await fetch(`http://ipinfo.io/json?token=212a9c8e301666`)
// //         if (response.status === 200) {
// //             return response.json()
// //         } else {
// //             throw new Error('Could not fetch location')
// //         }

// // } 

// // const getCurrentCountry = async () => {
// //     let data = await getLocation()
// //     data = data.country
// //     return await getCountry(data)
        

// // }
