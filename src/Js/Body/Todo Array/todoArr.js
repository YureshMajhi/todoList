import { container } from "../InboxTab/inboxTab";

const todoArr = [
  { title: "hello", description: "hello", date: "222222", priority: "Low" },
  { title: "hi", description: "hi", date: "333333", priority: "Medium" },
  { title: "how", description: "how", date: "44444444444", priority: "High" },
];
export default todoArr;

// Creating a div to list all todo items
const todoDiv = document.createElement("div");
todoDiv.classList.add("todoList");

// rendering the list of todo in the page
export const renderTodo = () => {
  todoDiv.innerHTML = "";

  todoArr.forEach(function (todo) {
    // Creating div for each individual array
    const individualDiv = document.createElement("div");

    // Assigning variables for all form values
    const titleName = document.createElement("p");
    titleName.textContent = todo.title;

    const dateName = document.createElement("p");
    dateName.textContent = todo.date;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");

    // Adding the elements to the page
    individualDiv.append(titleName, dateName, deleteBtn);
    todoDiv.appendChild(individualDiv);
    container.appendChild(todoDiv);
  });
};
