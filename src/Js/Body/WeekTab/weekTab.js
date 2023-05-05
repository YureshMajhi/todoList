import {
  setTodoArr,
  todoLocal,
  renderTodo,
  currentWeekArr,
} from "../Todo Array/todoArr.js";
import { header, container } from "../../component.js";

// Main function for Inbox Tab
export const weekTabFile = () => {
  container.innerHTML = "";

  header.textContent = "This Week";
  container.append(header);

  if (todoLocal) {
    setTodoArr(todoLocal);
    renderTodo(currentWeekArr());
  }
};
