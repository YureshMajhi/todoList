let todoArr = [];
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const date = document.querySelector("#date");
const lowP = document.querySelector("#lowP");
const mediumP = document.querySelector("#mediumP");
const highP = document.querySelector("#highP");

export const form = () => {
  // Displaying the form
  document.querySelector(".form-container").style = "display: block";

  // form button click behaviour
  document.querySelector("#submit").addEventListener("click", function (event) {
    // removing the default behaviour of submit button
    event.preventDefault();

    // Hiding the form
    document.querySelector(".form-container").style = "display: none";
  });
};
