// Model
// Model
import { container } from "../../component";
import { header } from "../../component";

export let todoLocal = JSON.parse(localStorage.getItem("todoArr"));
export let todoArr = [];

const today = new Date();

const todoDiv = document.createElement("div");
todoDiv.classList.add("todoList");

// View
// View
// Main function to render
export const renderTodo = (todoArr) => {
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
};

// Architecture
// Architecture
/* assigning value from local storage */
export const setTodoArr = (newTodoArr) => {
  todoArr = newTodoArr;
};

export const todayArr = () => {
  return todoArr.filter((todo) => {
    const todoDate = new Date(todo.date);
    return (
      todoDate.getFullYear() == today.getFullYear() &&
      todoDate.getMonth() == today.getMonth() &&
      todoDate.getDate() == today.getDate()
    );
  });
};

export const currentWeekArr = () => {
  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Sunday
  const endOfWeek = new Date(
    today.setDate(today.getDate() - today.getDay() + 6)
  ); // Saturday

  return todoArr.filter((todo) => {
    const todoDate = new Date(todo.date);
    return todoDate >= startOfWeek && todoDate <= endOfWeek;
  });
};

export const completedArr = () => {
  return todoArr.filter((todo) => todo.isDone);
};

// delete funtionality
const deleteTodo = (e) => {
  removeTodo(e);
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
  todoLocal = JSON.parse(localStorage.getItem("todoArr"));

  checkPage();
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

// Checkbox functionality
const changeTodo = (e) => {
  const checkbox = e.target;

  const todoId = checkbox.dataset.todoId;
  const checked = checkbox.checked;

  toggleTodo(todoId, checked);
  checkPage();

  localStorage.setItem("todoArr", JSON.stringify(todoArr));
};

const toggleTodo = (todoId, checked) => {
  todoArr.forEach((todo) => {
    if (todo.id == todoId) {
      todo.isDone = checked;
    }
  });
};

// Check page before rendering
const checkPage = () => {
  if (header.textContent == "Inbox") {
    renderTodo(todoArr);
  } else if (header.textContent == "Today") {
    renderTodo(todayArr());
  } else if (header.textContent == "This Week") {
    renderTodo(currentWeekArr());
  }
};
