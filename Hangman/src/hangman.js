class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word
        this.wordArray = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.status = 'Playing'
    }
    get getPuzzle() {
        let puzzle = ''
        //Iterate through the wordArray and find out which letters should be censored
        this.wordArray.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
        })
        return puzzle
    }
    makeGuess(char) {
        if (this.status === 'Playing') {
            if (!this.guessedLetters.includes(char.toLowerCase())) {
                this.guessedLetters.push(char)
            if (!this.wordArray.includes(char)) {
                this.remainingGuesses--
                }  
            }
        }
    }
    gameStatus() {
        if (this.remainingGuesses === 0) {
            this.status = 'Failed'
        } 
    
        const finished = this.wordArray.every((letter) => {
            return this.guessedLetters.includes(letter) || letter === ' '
        })
    
        if (finished) {
            this.status = 'Finished'
        }
    }   
    get statusMessage() {
        let guessesEl = document.querySelector('#remaining-guesses')
        if(this.status === 'Playing') {
           
            guessesEl.textContent = `Guesses left: ${this.remainingGuesses}`
        }
        if(this.status === 'Failed') {
    
            guessesEl.textContent = `Nice try! The word was ${this.word} `
        }
        if(this.status === 'Finished') {
    
            guessesEl.textContent = `Great work, you guessed the word`
        }
    }
}

export {Hangman as default}






