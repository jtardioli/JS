import {uuidv4} from 'uuid/v4'
import { getFilters} from "./filters";
import { refreshTodos,  createTodo } from './todos'
import { renderTodos } from './views'



// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos
renderTodos()

// Set up search text handler
//Listen Filter todos
document.querySelector('#filter-todo').addEventListener('input', function (e) {
    getFilters().searchText = e.target.value
    renderTodos()
})


// Set up checkbox handler
//Hide completed
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    getFilters().hideCompleted = e.target.checked
    renderTodos()
})


// Set up form submission handler
//Add Todo
document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    createTodo(e.target.elements.newTodo.value.trim(' ')) 
    e.target.elements.newTodo.value = ''
    renderTodos()

})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
    if(e.key === 'todos') {
        refreshTodos()
        renderTodos()
    }
})
