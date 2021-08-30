import { initializeEditPage, generateLastEdited } from "./views"
import { updateNote, removeNote, refreshNotes  } from "./notes"

const noteId = location.hash.substring(1)
const lastEditedEl = document.querySelector('#last-edited')
initializeEditPage(noteId)

// Edit and update note title
document.querySelector('#note-title').addEventListener('input',(e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    lastEditedEl.textContent = generateLastEdited(note)
})




// Edit and update note body
document.querySelector('#note-body').addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    lastEditedEl.textContent = generateLastEdited(note)
})



document.querySelector('#remove-note').addEventListener('click', () => {
    removeNote(noteId)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        
        refreshNotes()
        initializeEditPage(noteId)
        
    }
})


