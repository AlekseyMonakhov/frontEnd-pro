let todos = [];

export function getTodos() {
    if(todos.length) {
        return todos;
    }
}

export function addTodo(todo) {
    todos.push(todo);
}

export function checkTodo(id) {
    return todos.find(todo => todo.id === id);
}
export function changeIsComplited(id) {
    let changedTodo;
    todos = todos.map((todo) => {
        if (todo.id === id) {
            return {...todo, done: !todo.done}
        }
        changedTodo = todo;
        return todo;
    });
    return changedTodo;
}

export function deleteTodo(id) {

    let delTodos = todos.filter(todo => todo.id === id)
    todos = todos.filter(todo => todo.id !== id);
    return {status: true, deletedTodo: delTodos};
}