import { getTodos, toggleTodo, removeTodo } from "./todos"
import { getFilters } from "./filters"
// renderTodos
// Arguments: none
// Return value: none

// Render application todos based on filters
const renderTodos = function () {

    let filteredTodos = getTodos().filter(function (todo) {
        return todo.text.toLowerCase().includes(getFilters().searchText.toLowerCase())
    })

    if (getFilters().hideCompleted) {
        filteredTodos = filteredTodos.filter(function (todo) {
            return !todo.completed
            
        })
    }


    document.querySelector('#todos').innerHTML = ''
    generateSummaryDOM(filteredTodos.filter((todo => {
        return todo.completed === false
    }))) 


    
    filteredTodos.forEach(function (todo) {

        const newEl = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(newEl)
        
    })
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    //Define individual parts of todo
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const textEl = document.createElement('span')
    const removeEl = document.createElement('button')
    removeEl.addEventListener('click', function () {
        removeTodo(todo.id)
        renderTodos()
    })
    const checkEl = document.createElement('input')
    checkEl.setAttribute('type', 'checkbox')
    checkEl.checked = todo.completed
    checkEl.addEventListener('change', function () {
        toggleTodo(todo.id)
        renderTodos()
        
    })

    //set up conatner
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)
    

    //set text contents of individual todos
    textEl.textContent = todo.text
    removeEl.textContent = 'remove'
    removeEl.classList.add('button', 'button--text')

    //add the pieces together
    containerEl.appendChild(checkEl)
    containerEl.appendChild(textEl)
    todoEl.appendChild(removeEl)
    return todoEl

}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

// Get the DOM elements for an list summarry
const generateSummaryDOM = function (filteredTodos) {
    const numOfTodosSummary = document.createElement('h3')
    numOfTodosSummary.classList.add('list-title')
    if (filteredTodos.length === 1) {
        numOfTodosSummary.textContent =`You have ${filteredTodos.length} todo left to complete`
    } else if (filteredTodos.length === 0) {
        numOfTodosSummary.textContent = 'No todos to show'
    } else {
        numOfTodosSummary.textContent =`You have ${filteredTodos.length} todos left to complete`
    }
    document.querySelector('#todos').appendChild(numOfTodosSummary)
    
}

// Make sure to set up the exports

export { renderTodos, generateTodoDOM, generateSummaryDOM }