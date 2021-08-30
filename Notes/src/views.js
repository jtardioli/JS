import moment from 'moment'
import {getFilters} from './filters'
import {sortNotes, getNotes, } from './notes' 

//Generate dom structure for a note
const generateNoteDom = (note) => {
    const noteEl = document.createElement('a')
    const textEL = document.createElement('p')
    const statusEl = document.createElement('p')
    


    //set up the note typer
    if(note.title.length > 0) {
        textEL.textContent = note.title
    } else {
        textEL.textContent = 'Unnamed note'

    }
    textEL.classList.add('list-item__title')
    
    // Setup the link
    noteEl.setAttribute('href', '/edit.html#' + note.id)
    noteEl.classList.add('list-item')

    //Set up status message
    statusEl.textContent = generateLastEdited(note)
    noteEl.appendChild(textEL)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)
    return noteEl
}




// Render application notes
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter( (note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDom(note)
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

// Generate last edited
const generateLastEdited = (note) => {
    const lastEdited = moment(note.updatedAt).from(moment())
    return `Last edited ${lastEdited}`
    
}

const initializeEditPage = (noteId) => {
    const titleEl = document.querySelector('#note-title')
    const bodyEl = document.querySelector('#note-body')
    const lastEditedEl = document.querySelector('#last-edited')

    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if (!note) {
        location.assign('/index.html')
    }

    titleEl.value = note.title
    bodyEl.value = note.body
    //last edited
    lastEditedEl.textContent = generateLastEdited(note)
    console.log(getNotes())

    
}

export { generateNoteDom, renderNotes, generateLastEdited, initializeEditPage }