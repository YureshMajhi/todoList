import { form } from "../Form/form.js";
import {
  setTodoArr,
  todoLocal,
  todoArr,
  renderTodo,
} from "../Todo Array/todoArr.js";
// import { renderTodo } from "../renderTodo/renderTodo.js";
import { header, container } from "../../component.js";

// Main function for Inbox Tab
export const inboxTabFile = () => {
  container.innerHTML = "";

  header.textContent = "Inbox";

  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "+ Add task";
  addTaskBtn.classList.add("addTask");

  // Appending the header and the button in the container
  container.append(header, addTaskBtn);

  if (todoLocal) {
    setTodoArr(todoLocal);
    renderTodo(todoArr);
  }

  // Add task button clicked
  document.querySelector(".addTask").addEventListener("click", function () {
    form();
  });
};
