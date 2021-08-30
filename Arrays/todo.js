todos = [{
    text: 'learn js',
    completed: true
}, {
    text: 'talk to nadi',
    completed: false
}, {
    text: 'die',
    completed: true
} ]

const sortTodos = function (todos) {
    todos.sort(function (a,b) {
        if (a.completed === true && b.completed === false) {
            return 1
        } else if (a.completed === false && b.completed === true) {
            return -1
        } else {return 0}
    })
}

sortTodos(todos)
console.log(todos)

// const getThingsTodo = function(todos) {
//     return todos.filter(function (todo, index) {
//         return !todo.completed
//     })

// }
// console.log(getThingsTodo(todos))


// const deleteTodo = function (todos, text) {
//    removedTodoIndex =  todos.findIndex( function (item, index) {
//         return item.text.toLowerCase() === text.toLowerCase()
//    })

//    if (removedTodoIndex > -1) {
//        todos.splice(removedTodoIndex, 1)
//    } else {
//        console.log('Todo not found!')
//    }
// }

// console.log(todos)
// deleteTodo(todos, 'learn js')
// console.log('-------------')
// console.log(todos)