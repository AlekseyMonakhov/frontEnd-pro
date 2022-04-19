class TodoList {
    Items = [];

  
    add({id, title, description, done}) {
        const newTodoItem = new TodoItem({id, title, description, done});
        this.Items.push(newTodoItem);
    };
    completeAll() {
        this.Items.forEach((item) => item.done = true);
    };
}




class TodoItem {
    constructor ({id, title, description, done}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.done = done;
    };
}

const toDo = new TodoList();
toDo.add({id: 1 ,title: "task1" ,description: "feed cat",done: true});
toDo.add({id: 2 ,title: "task2" ,description: "feed another cat",done: true});
toDo.add({id: 3 ,title: "task3" ,description: "eat something",done: false});
toDo.completeAll();

console.log(toDo);


