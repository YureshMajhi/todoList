import { todoArr } from "../Todo Array/todoArr";
import { renderTodo } from "../Todo Array/todoArr";

const title = document.querySelector("#title");
const description = document.querySelector("#description");
const date = document.querySelector("#date");
const lowP = document.querySelector("#lowP");
const mediumP = document.querySelector("#mediumP");
const highP = document.querySelector("#highP");
let priority = "";

// --------------------------------------------------------------------------------------------------------------------------
// Exporting form in the page
export const form = () => {
  // Displaying the form
  document.querySelector(".form-container").style = "display: block";
};

document.querySelector("#submit").addEventListener("click", function (event) {
  event.preventDefault();

  // Check which radio button is checked
  chechPriority();

  if (title.value && date.value) {
    todoArr.push(updateFormValue());
  } else {
    return;
  }

  clearFormValue();

  document.querySelector(".form-container").style = "display: none";

  // Rendering the new todo in the page
  renderTodo();
});

// ------------------------------------------------------------------------------------------------------------------------
// Storing values in a constructor
function FormValue(title, description, date, priority, id) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
  this.id = id;
}

// Updating the form value using constructor
const updateFormValue = () => {
  let formData = new FormValue(
    title.value,
    description.value,
    date.value,
    priority,
    "" + new Date().getTime()
  );
  return formData;
};

// Clearing the form value
const clearFormValue = () => {
  title.value = "";
  description.value = "";
  date.value = "";
  lowP.checked = false;
  mediumP.checked = false;
  highP.checked = false;
  priority = "";
};

// checking priority
const chechPriority = () => {
  if (lowP.checked) {
    priority = lowP.value;
  } else if (mediumP.checked) {
    priority = mediumP.value;
  } else if (highP.checked) {
    priority = highP.value;
  }
};
