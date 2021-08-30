const notes = [{
    title: 'my next trip',
    body: 'I would like to go to spain'

},{
    title: 'habbites to work on',
    body: 'exercise eating a bit better'

}, {
    title: 'office mods',
    body: 'get a new seat'
}]


const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {return 0}
    })
}

sortNotes(notes)
console.log(notes)

// const findNotes = function (notes, query) {
//     return notes.filter(function (note, index) {
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
    
// }

// console.log(findNotes(notes, 'work'))





// const findNote = function (notes, noteTitle) {
//     const note = notes.find(function (note, index) {
//         return note.title === noteTitle
//     })
//     return note
// }

// // const findNote = function (notes, noteTitle) {
// //     const index = notes.findIndex(function (note, index) {
// //         return note.title === noteTitle
// //     })
// // }



// index = notes.findIndex(function (note, index) {
//     return note.title === 'habbites to wor on'
// })

