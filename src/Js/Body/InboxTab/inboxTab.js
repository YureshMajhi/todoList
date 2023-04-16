import { form } from "../Form/form.js";
import { renderTodo, setTodoArr, todoLocal } from "../Todo Array/todoArr.js";

export const container = document.querySelector(".container");

// Main function for Inbox Tab
export const inboxTabFile = () => {
  // Removing the contents of container to add new contents
  container.innerHTML = "";

  // Creating Header
  const header = document.createElement("h1");
  header.textContent = "Inbox";

  // Creating add task button
  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "+ Add task";
  addTaskBtn.classList.add("addTask");

  // Appending the header and the button in the container
  container.append(header, addTaskBtn);

  if (todoLocal) {
    setTodoArr(todoLocal);
    renderTodo();
  }

  // Add task button clicked
  document.querySelector(".addTask").addEventListener("click", function () {
    form();
  });
};
