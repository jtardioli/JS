let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'Meditations',
    author: 'Marcus aeurales',
    pageCount: 150
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        longerSummary:  `${book.title} by ${book.author} and is ${book.pageCount} long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookeSummary = getSummary(otherBook)

console.log(bookSummary.summary)

//Challenge

let converter = function (f) {
    return {
        c: (f - 32) * (5/9),
        k: f + 273
    }
}

console.log(converter(70).c)