import style from "./Styles/main.css";
import component from "./Js/component.js";

// showing page Layout
const render = new component();
render.inboxTab();

// Display on inbox button clicked
document.querySelector(".inbox-el").addEventListener("click", function () {
  render.inboxTab();
});
