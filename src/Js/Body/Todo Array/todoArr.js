const todoArr = [];
export default todoArr;

export const renderTodo = () => {
  const todoDiv = document.createElement("div");

  todoArr.forEach(function (todo) {
    todoDiv.innerHTML = "";

    const titleName = document.createElement("p");
    titleName.textContent = todo.title;
    const descriptionName = document.createElement("p");
    descriptionName.textContent = todo.description;
    const dateName = document.createElement("p");
    dateName.textContent = todo.date;

    todoDiv.appendChild(titleName);
    todoDiv.appendChild(descriptionName);
    todoDiv.appendChild(dateName);

    document.body.appendChild(todoDiv);
  });
};
