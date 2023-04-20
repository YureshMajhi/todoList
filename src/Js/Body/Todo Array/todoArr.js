import { container } from "../InboxTab/inboxTab";

export let todoArr = [];

export const todoLocal = JSON.parse(localStorage.getItem("todoArr"));

/* if Local storage exists then assigning the value of todoArr
to todoLocal from Inbox tab */
export function setTodoArr(newTodoArr) {
  todoArr = newTodoArr;
}

// Creating a div to list all todo items
const todoDiv = document.createElement("div");
todoDiv.classList.add("todoList");

// rendering the list of todo in the page
export const renderTodo = () => {
  todoDiv.innerHTML = "";

  todoArr.forEach(function (todo) {
    const individualDiv = document.createElement("div");

    const titleName = document.createElement("p");
    titleName.textContent = todo.title;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.dataset.todoId = todo.id;
    checkBox.onchange = changeTodo;
    if (todo.isDone == true) {
      checkBox.checked = true;
      titleName.style = "text-decoration: line-through";
    } else {
      checkBox.checked = false;
    }

    // Set color according to priority
    if (todo.priority == "Low") {
      individualDiv.style = "background-color: rgba(202, 202, 83, 0.439)";
    } else if (todo.priority == "Medium") {
      individualDiv.style = "background-color: rgba(87, 204, 87, 0.439)";
    } else if (todo.priority == "High") {
      individualDiv.style = "background-color: rgba(210, 94, 94, 0.439)";
    }

    const dateName = document.createElement("p");
    dateName.textContent = todo.date;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.id = todo.id;
    deleteBtn.addEventListener("click", deleteTodo);

    // Adding the elements to the page
    individualDiv.appendChild(checkBox);
    individualDiv.append(titleName, dateName, deleteBtn);
    todoDiv.appendChild(individualDiv);
    container.appendChild(todoDiv);
  });

  localStorage.setItem("todoArr", JSON.stringify(todoArr));
};

const deleteTodo = (e) => {
  removeTodo(e);
  renderTodo();
};

const removeTodo = (e) => {
  todoArr = todoArr.filter(function (todo) {
    if (todo.id === e.target.id) {
      return false;
    } else {
      return true;
    }
  });
};

const changeTodo = (e) => {
  const checkbox = e.target;

  const todoId = checkbox.dataset.todoId;
  const checked = checkbox.checked;

  toggleTodo(todoId, checked);
  renderTodo();
};

const toggleTodo = (todoId, checked) => {
  todoArr.forEach((todo) => {
    if (todo.id == todoId) {
      todo.isDone = checked;
    }
  });
};
