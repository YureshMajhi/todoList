let todoArr = [];
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const date = document.querySelector("#date");
const lowP = document.querySelector("#lowP");
const mediumP = document.querySelector("#mediumP");
const highP = document.querySelector("#highP");
let priority = "";

export const form = () => {
  // Displaying the form
  document.querySelector(".form-container").style = "display: block";
};

// form button click behaviour
document.querySelector("#submit").addEventListener("click", function (event) {
  // removing the default behaviour of submit button
  event.preventDefault();

  if (lowP.checked) {
    priority = lowP.value;
  } else if (mediumP.checked) {
    priority = mediumP.value;
  } else if (highP.checked) {
    priority = highP.value;
  }

  if (title.value && description.value && date.value) {
    todoArr.push(updateFormValue());
  }
  console.log(todoArr);
  clearFormValue();

  // Hiding the form after all process is finished
  document.querySelector(".form-container").style = "display: none";
});

// Storing values in a constructor
function FormValue(title, description, date, priority) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
}

// Updating the form value using constructor
const updateFormValue = () => {
  let formData = new FormValue(
    title.value,
    description.value,
    date.value,
    priority
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
