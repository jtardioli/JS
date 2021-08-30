import { createNote, refreshNotes, } from "./notes"
import { setFilters } from "./filters"
import { renderNotes } from './views'

renderNotes()

// Event listeners
document.querySelector('#create-note').addEventListener('click', (e) => {
    const uuid = createNote()
    location.assign('/edit.html#' + uuid)
    
})


document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes') {
        refreshNotes()
        renderNotes()
    }
})

