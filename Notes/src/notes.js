import uuidv4 from 'uuid/v4'
import moment from 'moment'
let notes = []

//Read existing notes from local storage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON  ? JSON.parse(notesJSON) : []
    } catch (e){
        return []

    }
       
}

let refreshNotes = () => {
    notes = loadNotes()
}

//Save notes to localStorage
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}


// expose notes from module
const getNotes = () => notes

const createNote = () => {
    const uuid = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: uuid,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes()
    return  uuid
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex,1)
        saveNotes()
    } 
}

// Sort Notes
const sortNotes = (sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a,b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            }  else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
            
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a,b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            }  else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
            
        })
    } else if (sortBy === 'byAlphabetical') {
        return notes.sort((a,b) => {
            console.log(a.title.toLowerCase())
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            }  else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
            
        })
    } 
    else { return notes }
    
}

const updateNote = (id, updates) => {
    const note = notes.find((note) => note.id === id)

    if(!note) {
        return undefined
    }

    if (typeof updates.title === 'string') {
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }

    if (typeof updates.body === 'string') {
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }

    saveNotes()
    console.log(notes)
    return note
}


notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNote, refreshNotes }