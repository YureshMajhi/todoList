import { form } from "../Form/form.js";
import todoArr from "../Todo Array/todoArr.js";

export const inboxTabFile = () => {
  // Selecting the container and emptiying it to add new contents
  const container = document.querySelector(".container");
  container.innerHTML = "";

  // Creating Header
  const header = document.createElement("h1");
  header.textContent = "Inbox";

  // Creating add task button
  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "+ Add task";
  addTaskBtn.classList.add("addTask");

  // Appending the header and the button in the container
  container.appendChild(header);
  container.appendChild(addTaskBtn);

  document.body.appendChild(container);

  // Add task button clicked
  document.querySelector(".addTask").addEventListener("click", function () {
    form();
  });
};
