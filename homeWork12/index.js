class TodoList {
    Items = [];

    completeAll() {
        this.Items.forEach((item) => item.done = true);
    };
    add(params) {
        const newTodoItem = new TodoItem(params);
        this.Items.push(newTodoItem);
    };
}




class TodoItem {
    constructor (params) {
        this.id = params.id;
        this.title = params.title;
        this.description = params.description;
        this.done = params.done;
    };
}

function TodoItem(id, title, description, done) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.done = done;
}

