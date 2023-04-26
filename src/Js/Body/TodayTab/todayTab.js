import {
  setTodoArr,
  todoLocal,
  filteredArr,
  renderTodo,
} from "../Todo Array/todoArr.js";
import { header, container } from "../../component.js";

// Main function for Inbox Tab
export const todayTabFile = () => {
  container.innerHTML = "";

  header.textContent = "Today";
  container.append(header);

  if (todoLocal) {
    setTodoArr(todoLocal);
    renderTodo(filteredArr);
  }
};
