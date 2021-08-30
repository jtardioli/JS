import uuidv4 from 'uuid/v4'
// Setup the empty todos array

let todos = []

// loadTodos
// Arguments: none
// Return value: none

//Fetch existing todos from Local Storage
const loadTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ?  JSON.parse(todosJSON) :[]
    } catch (e) {
        return []
    } 
}

const refreshTodos = () => {
    todos = loadTodos()
}
 

// saveTodos
// Arguments: none
// Return value: none

// save todos to Local Storage
const saveTodos = function () {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
// Arguments: none
// Return value: todos array

const getTodos = () => todos

// createTodo
// Arguments: todo text
// Return value: none

const createTodo = (todoText) => {
    const input = todoText.trim(' ')
    if (input.length > 0) {
        todos.push({
            id: uuidv4(),
            text: input,
            completed: false
        })
        saveTodos(todos)
    }
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none

const removeTodo = (id) => {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id = id
    })
    todos.splice(todoIndex,1)
    saveTodos()
}



// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

const toggleTodo = (id) => {
    const checkboxIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
     
    todos[checkboxIndex].completed = !todos[checkboxIndex].completed
    saveTodos()
}


// Make sure to call loadTodos and setup the exports


todos = loadTodos()

export { loadTodos, refreshTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }