import style from "./Styles/main.css";
import component from "./Js/component.js";

// showing page Layout
const render = new component();
render.inboxTab();

// inbox button clicked
document.querySelector(".inbox-el").addEventListener("click", function () {
  render.inboxTab();
});

document.querySelector(".today-el").addEventListener("click", function () {
  render.todayTab();
});

document.querySelector(".this_week-el").addEventListener("click", function () {
  render.weekTab();
});

document.querySelector(".completed-el").addEventListener("click", function () {
  render.completedTab();
});
