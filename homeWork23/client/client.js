let removeCompletedTodo = document.querySelector("#remove-completed-todo-btn");
let showImportantTasks = document.querySelector("#show-important-tasks");
let form = document.querySelector("form.add-todo");
let searchField = document.querySelector("input#search");
const BASE_API = "http://localhost:3001";

let todos = [];

showImportantTasks.onclick = () => {
  showImportantTasks.classList.toggle("active");
  let importantTodos = document.querySelectorAll("div.todo");

  importantTodos.forEach((el) => {
    if (!el.firstElementChild.className.includes("important")) {
      el.classList.toggle("hide");
    }
  });
};

removeCompletedTodo.onclick = () => {
  let completedTodos = document.querySelectorAll("div.todo div input");
  completedTodos.forEach((el) => {
    if (el.checked) {
      removeTodo(el.id);
      el.parentElement.parentElement.remove();
    }
  });
};

function emptyTodos() {
  const todoContainer = document.querySelector(".task-list");
  const clearTodo = todoContainer.querySelectorAll(".todo");
  clearTodo.forEach((todo) => {
    todo.remove();
  });
  let emptyTodos = document.createElement("div");
  emptyTodos.style.textAlign = "center";
  emptyTodos.classList.add("todo");

  let emptyTodosTitle = document.createElement("h2");
  emptyTodosTitle.style.fontSize = "2.5rem";
  emptyTodosTitle.textContent = "Todos are empty, add some...";

  emptyTodos.append(emptyTodosTitle);
  todoContainer.append(emptyTodos);
}
function removeTodo(id) {
  fetch(`${BASE_API}/todos/${id}`, {
    method: "DELETE",
  })
    .then(() => getTodos())
    .catch(() => showErr("Cannot delete todo"));
}

function changeIsComplited(id) {
  fetch(`${BASE_API}/todos/${id}`, {
    method: "PUT",
  })
    .then(() => getTodos())
    .catch(() => showErr("Cannot update todo"));
}

function renderTodos(todos) {
  const todoContainer = document.querySelector(".task-list");
  const clearTodo = todoContainer.querySelectorAll(".todo");
  clearTodo.forEach((todo) => {
    todo.remove();
  });

  todos.forEach((todo) => {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    let todoDescrtContainer = document.createElement("div");
    if (todo.important === true) {
      todoDescrtContainer.classList.add("important");
    }
    let deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.addEventListener("click", () => removeTodo(todo.id));
    todoDescrtContainer.classList.add("descr-container");
    deleteTodoBtn.classList.add("delete-todo");

    let deleteTodoBtnSpanFirst = document.createElement("span");
    let deleteTodoBtnSpanSecond = document.createElement("span");
    deleteTodoBtn.append(deleteTodoBtnSpanFirst, deleteTodoBtnSpanSecond);

    let todoCheckBox = document.createElement("input");
    todoCheckBox.addEventListener("click", () => changeIsComplited(todo.id));
    todoCheckBox.setAttribute("id", `${todo.id}`);
    todoCheckBox.setAttribute("type", "checkbox");
    if (todo.done === true) {
      todoCheckBox.setAttribute("checked", `true`);
    }
    todoCheckBox.setAttribute("name", `${todo.id}`);
    let todoTitle = document.createElement("label");
    todoTitle.setAttribute("for", `${todo.id}`);
    todoTitle.textContent = `${todo.description}`;

    todoDescrtContainer.append(todoCheckBox, todoTitle);
    todoDiv.append(todoDescrtContainer, deleteTodoBtn);
    todoContainer.append(todoDiv);
  });
}
function showErr(message) {
  let errContainer = document.createElement("div");
  let errTitle = document.createElement("p");
  errContainer.classList.add("error");
  errTitle.textContent = message;
  errContainer.append(errTitle);
  document.body.append(errContainer);
  setTimeout(() => {
    errContainer.remove();
  }, 6000);
}

async function getTodos() {
  try {
    const response = await fetch(`${BASE_API}/todos`);
    if (response && response.status === 200) {
      todos = await response.json();
      renderTodos(todos);
    }
    if (response && response.status === 204) {
      emptyTodos();
    }
  } catch (err) {
    showErr("Failed to load todos list");
  }
}

getTodos();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let description = event.target.querySelector("#todo-description").value;
  let important = event.target.querySelector(`#make-important`).checked;

  fetch(`${BASE_API}/todos`, {
    method: "POST",
    body: JSON.stringify({
      description: description,
      important: important,
    }),
  })
    .then(() => getTodos())
    .catch(() => showErr("Failed to load todos list"));

  event.target.reset();
});

searchField.addEventListener("change", (event) => {
  let searchValue = event.target.value;
  let todosTitle = Array.from(document.querySelectorAll(".todo label"));
  todosTitle.forEach((todo) => {
    if (!todo.textContent.includes(searchValue)) {
      todo.parentElement.parentElement.classList.add("hide-search");
    }
    if (todo.textContent.includes(searchValue)) {
      todo.parentElement.parentElement.classList.remove("hide-search");
    }
  });
});
