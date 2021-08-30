import _ from "lodash"
import Hangman from "./hangman"
import getPuzzle from "./requests"

const hangmanEl = document.querySelector('.puzzle')
let game1 


//Listen for keyboard letters
window.addEventListener('keypress',(e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.gameStatus()
    render()
})

const render = () => {
    hangmanEl.innerHTML = ''
    game1.statusMessage
    game1.getPuzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        hangmanEl.appendChild(letterEl)
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
