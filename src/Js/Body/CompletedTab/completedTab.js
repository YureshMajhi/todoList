import {
  setTodoArr,
  todoLocal,
  renderTodo,
  completedArr,
} from "../Todo Array/todoArr.js";
import { header, container } from "../../component.js";

// Main function for Inbox Tab
export const completedTabFile = () => {
  container.innerHTML = "";

  header.textContent = "Completed";
  container.append(header);

  if (todoLocal) {
    setTodoArr(todoLocal);
    renderTodo(completedArr());
  }
};
