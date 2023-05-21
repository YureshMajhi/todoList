/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Js/Body/CompletedTab/completedTab.js":
/*!**************************************************!*\
  !*** ./src/Js/Body/CompletedTab/completedTab.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completedTabFile": () => (/* binding */ completedTabFile)
/* harmony export */ });
/* harmony import */ var _Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Todo Array/todoArr.js */ "./src/Js/Body/Todo Array/todoArr.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component.js */ "./src/Js/component.js");



// Main function for Inbox Tab
var completedTabFile = function completedTabFile() {
  _component_js__WEBPACK_IMPORTED_MODULE_1__.container.innerHTML = "";
  _component_js__WEBPACK_IMPORTED_MODULE_1__.header.textContent = "Completed";
  _component_js__WEBPACK_IMPORTED_MODULE_1__.container.append(_component_js__WEBPACK_IMPORTED_MODULE_1__.header);
  if (_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.todoLocal) {
    (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.setTodoArr)(_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.todoLocal);
    (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.renderTodo)((0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.completedArr)());
  }
};

/***/ }),

/***/ "./src/Js/Body/Form/form.js":
/*!**********************************!*\
  !*** ./src/Js/Body/Form/form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _Todo_Array_todoArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Todo Array/todoArr */ "./src/Js/Body/Todo Array/todoArr.js");
/* harmony import */ var _InboxTab_inboxTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InboxTab/inboxTab */ "./src/Js/Body/InboxTab/inboxTab.js");


var title = document.querySelector("#title");
var description = document.querySelector("#description");
var date = document.querySelector("#date");
var lowP = document.querySelector("#lowP");
var mediumP = document.querySelector("#mediumP");
var highP = document.querySelector("#highP");
var priority = "";

// --------------------------------------------------------------------------------------------------------------------------
// Exporting form in the page
var form = function form() {
  // Displaying the form
  document.querySelector(".form-container").style = "display: block";
};
document.querySelector("#submit").addEventListener("click", function (event) {
  event.preventDefault();

  // Check which radio button is checked
  chechPriority();
  if (title.value && date.value) {
    _Todo_Array_todoArr__WEBPACK_IMPORTED_MODULE_0__.todoArr.push(updateFormValue());
  } else {
    return;
  }
  clearFormValue();
  document.querySelector(".form-container").style = "display: none";
  (0,_InboxTab_inboxTab__WEBPACK_IMPORTED_MODULE_1__.inboxTabFile)();
  localStorage.setItem("todoArr", JSON.stringify(_Todo_Array_todoArr__WEBPACK_IMPORTED_MODULE_0__.todoArr));
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
var updateFormValue = function updateFormValue() {
  var formData = new FormValue(title.value, description.value, date.value, priority, "" + new Date().getTime());
  return formData;
};

// Clearing the form value
var clearFormValue = function clearFormValue() {
  title.value = "";
  description.value = "";
  date.value = "";
  lowP.checked = false;
  mediumP.checked = false;
  highP.checked = false;
  priority = "";
};

// checking priority
var chechPriority = function chechPriority() {
  if (lowP.checked) {
    priority = lowP.value;
  } else if (mediumP.checked) {
    priority = mediumP.value;
  } else if (highP.checked) {
    priority = highP.value;
  }
};

/***/ }),

/***/ "./src/Js/Body/InboxTab/inboxTab.js":
/*!******************************************!*\
  !*** ./src/Js/Body/InboxTab/inboxTab.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inboxTabFile": () => (/* binding */ inboxTabFile)
/* harmony export */ });
/* harmony import */ var _Form_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Form/form.js */ "./src/Js/Body/Form/form.js");
/* harmony import */ var _Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Todo Array/todoArr.js */ "./src/Js/Body/Todo Array/todoArr.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component.js */ "./src/Js/component.js");


// import { renderTodo } from "../renderTodo/renderTodo.js";


// Main function for Inbox Tab
var inboxTabFile = function inboxTabFile() {
  _component_js__WEBPACK_IMPORTED_MODULE_2__.container.innerHTML = "";
  _component_js__WEBPACK_IMPORTED_MODULE_2__.header.textContent = "Inbox";
  var addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "+ Add task";
  addTaskBtn.classList.add("addTask");

  // Appending the header and the button in the container
  _component_js__WEBPACK_IMPORTED_MODULE_2__.container.append(_component_js__WEBPACK_IMPORTED_MODULE_2__.header, addTaskBtn);
  if (_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__.todoLocal) {
    (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__.setTodoArr)(_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__.todoLocal);
    (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__.renderTodo)(_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__.todoArr);
  }

  // Add task button clicked
  document.querySelector(".addTask").addEventListener("click", function () {
    (0,_Form_form_js__WEBPACK_IMPORTED_MODULE_0__.form)();
  });
};

/***/ }),

/***/ "./src/Js/Body/TodayTab/todayTab.js":
/*!******************************************!*\
  !*** ./src/Js/Body/TodayTab/todayTab.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todayTabFile": () => (/* binding */ todayTabFile)
/* harmony export */ });
/* harmony import */ var _Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Todo Array/todoArr.js */ "./src/Js/Body/Todo Array/todoArr.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component.js */ "./src/Js/component.js");



// Main function for Inbox Tab
var todayTabFile = function todayTabFile() {
  _component_js__WEBPACK_IMPORTED_MODULE_1__.container.innerHTML = "";
  _component_js__WEBPACK_IMPORTED_MODULE_1__.header.textContent = "Today";
  _component_js__WEBPACK_IMPORTED_MODULE_1__.container.append(_component_js__WEBPACK_IMPORTED_MODULE_1__.header);
  if (_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.todoLocal) {
    (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.setTodoArr)(_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.todoLocal);
    (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.renderTodo)((0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.todayArr)());
  }
};

/***/ }),

/***/ "./src/Js/Body/Todo Array/todoArr.js":
/*!*******************************************!*\
  !*** ./src/Js/Body/Todo Array/todoArr.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completedArr": () => (/* binding */ completedArr),
/* harmony export */   "currentWeekArr": () => (/* binding */ currentWeekArr),
/* harmony export */   "renderTodo": () => (/* binding */ renderTodo),
/* harmony export */   "setTodoArr": () => (/* binding */ setTodoArr),
/* harmony export */   "todayArr": () => (/* binding */ todayArr),
/* harmony export */   "todoArr": () => (/* binding */ todoArr),
/* harmony export */   "todoLocal": () => (/* binding */ todoLocal)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component */ "./src/Js/component.js");
// Model
// Model


var todoLocal = JSON.parse(localStorage.getItem("todoArr"));
var todoArr = [];
var today = new Date();
var todoDiv = document.createElement("div");
todoDiv.classList.add("todoList");

// View
// View
// Main function to render
var renderTodo = function renderTodo(todoArr) {
  todoDiv.innerHTML = "";
  todoArr.forEach(function (todo) {
    var individualDiv = document.createElement("div");
    var titleName = document.createElement("p");
    titleName.textContent = todo.title;
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.dataset.todoId = todo.id;
    checkBox.onchange = changeTodo;
    if (todo.isDone == true) {
      checkBox.checked = true;
      titleName.style = "text-decoration: line-through";
    } else {
      checkBox.checked = false;
    }

    // Set color according to priority
    if (todo.priority == "Low") {
      individualDiv.style = "background-color: rgba(202, 202, 83, 0.439)";
    } else if (todo.priority == "Medium") {
      individualDiv.style = "background-color: rgba(87, 204, 87, 0.439)";
    } else if (todo.priority == "High") {
      individualDiv.style = "background-color: rgba(210, 94, 94, 0.439)";
    }
    var dateName = document.createElement("p");
    dateName.textContent = todo.date;
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.id = todo.id;
    deleteBtn.addEventListener("click", deleteTodo);

    // Adding the elements to the page
    individualDiv.appendChild(checkBox);
    individualDiv.append(titleName, dateName, deleteBtn);
    todoDiv.appendChild(individualDiv);
    _component__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(todoDiv);
  });
};

// Architecture
// Architecture
/* assigning value from local storage */
var setTodoArr = function setTodoArr(newTodoArr) {
  todoArr = newTodoArr;
};
var todayArr = function todayArr() {
  return todoArr.filter(function (todo) {
    var todoDate = new Date(todo.date);
    return todoDate.getFullYear() == today.getFullYear() && todoDate.getMonth() == today.getMonth() && todoDate.getDate() == today.getDate();
  });
};
var currentWeekArr = function currentWeekArr() {
  var today = new Date();
  var startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Sunday
  var endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6)); // Saturday

  return todoArr.filter(function (todo) {
    var todoDate = new Date(todo.date);
    return todoDate >= startOfWeek && todoDate <= endOfWeek;
  });
};
var completedArr = function completedArr() {
  return todoArr.filter(function (todo) {
    return todo.isDone;
  });
};

// delete funtionality
var deleteTodo = function deleteTodo(e) {
  removeTodo(e);
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
  todoLocal = JSON.parse(localStorage.getItem("todoArr"));
  checkPage();
};
var removeTodo = function removeTodo(e) {
  todoArr = todoArr.filter(function (todo) {
    if (todo.id === e.target.id) {
      return false;
    } else {
      return true;
    }
  });
};

// Checkbox functionality
var changeTodo = function changeTodo(e) {
  var checkbox = e.target;
  var todoId = checkbox.dataset.todoId;
  var checked = checkbox.checked;
  toggleTodo(todoId, checked);
  checkPage();
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
};
var toggleTodo = function toggleTodo(todoId, checked) {
  todoArr.forEach(function (todo) {
    if (todo.id == todoId) {
      todo.isDone = checked;
    }
  });
};

// Check page before rendering
var checkPage = function checkPage() {
  if (_component__WEBPACK_IMPORTED_MODULE_0__.header.textContent == "Inbox") {
    renderTodo(todoArr);
  } else if (_component__WEBPACK_IMPORTED_MODULE_0__.header.textContent == "Today") {
    renderTodo(todayArr());
  } else if (_component__WEBPACK_IMPORTED_MODULE_0__.header.textContent == "This Week") {
    renderTodo(currentWeekArr());
  }
};

/***/ }),

/***/ "./src/Js/Body/WeekTab/weekTab.js":
/*!****************************************!*\
  !*** ./src/Js/Body/WeekTab/weekTab.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weekTabFile": () => (/* binding */ weekTabFile)
/* harmony export */ });
/* harmony import */ var _Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Todo Array/todoArr.js */ "./src/Js/Body/Todo Array/todoArr.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component.js */ "./src/Js/component.js");



// Main function for Inbox Tab
var weekTabFile = function weekTabFile() {
  _component_js__WEBPACK_IMPORTED_MODULE_1__.container.innerHTML = "";
  _component_js__WEBPACK_IMPORTED_MODULE_1__.header.textContent = "This Week";
  _component_js__WEBPACK_IMPORTED_MODULE_1__.container.append(_component_js__WEBPACK_IMPORTED_MODULE_1__.header);
  if (_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.todoLocal) {
    (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.setTodoArr)(_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.todoLocal);
    (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.renderTodo)((0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.currentWeekArr)());
  }
};

/***/ }),

/***/ "./src/Js/component.js":
/*!*****************************!*\
  !*** ./src/Js/component.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "default": () => (/* binding */ component),
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _Body_InboxTab_inboxTab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Body/InboxTab/inboxTab.js */ "./src/Js/Body/InboxTab/inboxTab.js");
/* harmony import */ var _Body_TodayTab_todayTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Body/TodayTab/todayTab.js */ "./src/Js/Body/TodayTab/todayTab.js");
/* harmony import */ var _Body_WeekTab_weekTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Body/WeekTab/weekTab.js */ "./src/Js/Body/WeekTab/weekTab.js");
/* harmony import */ var _Body_CompletedTab_completedTab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Body/CompletedTab/completedTab.js */ "./src/Js/Body/CompletedTab/completedTab.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var container = document.querySelector(".container");
var header = document.createElement("h1");
var component = /*#__PURE__*/function () {
  function component() {
    _classCallCheck(this, component);
  }
  _createClass(component, [{
    key: "inboxTab",
    value: function inboxTab() {
      (0,_Body_InboxTab_inboxTab_js__WEBPACK_IMPORTED_MODULE_0__.inboxTabFile)();
    }
  }, {
    key: "todayTab",
    value: function todayTab() {
      (0,_Body_TodayTab_todayTab_js__WEBPACK_IMPORTED_MODULE_1__.todayTabFile)();
    }
  }, {
    key: "weekTab",
    value: function weekTab() {
      (0,_Body_WeekTab_weekTab_js__WEBPACK_IMPORTED_MODULE_2__.weekTabFile)();
    }
  }, {
    key: "completedTab",
    value: function completedTab() {
      (0,_Body_CompletedTab_completedTab_js__WEBPACK_IMPORTED_MODULE_3__.completedTabFile)();
    }
  }]);
  return component;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* font */\n\n:root {\n  --dark-gray: #413e3e;\n  --midlight-gray: #c4c3c3;\n  --hover-gray: #9c9999;\n  --body-gray: #dddcdc;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Poppins\", sans-serif;\n}\n\nbody {\n  background-color: var(--body-gray);\n  padding-left: 248px;\n  padding-top: 112px;\n  padding-right: 20px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n/* ------------------------------------------------------ */\n/* Header */\n.header {\n  background-color: var(--dark-gray);\n  padding: 1.4rem 0 1.4rem 3rem;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.header h1,\n.header i {\n  display: inline;\n  color: white;\n  font-weight: 600;\n  font-size: 2.4rem;\n  letter-spacing: 1px;\n  word-spacing: 5px;\n}\n\n.header h1 {\n  padding-left: 0.5rem;\n}\n/* ----------------------------------------------------------- */\n/* Sidebar */\n.side-bar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  top: 102px;\n  z-index: 0;\n  background-color: var(--midlight-gray);\n  padding: 1rem;\n  width: 13rem;\n  color: var(--dark-gray);\n  font-weight: 400;\n}\n\n.side-bar div p i {\n  padding-right: 0.5rem;\n}\n\n.side-bar div p {\n  padding: 0.5rem 0 0.5rem 1rem;\n  border-radius: 5px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n.side-bar div p:hover {\n  background-color: var(--hover-gray);\n  font-weight: 600;\n}\n\n/* Body */\n/* --------------------------------------------------------- */\n.container h1 {\n  color: var(--dark-gray);\n}\n\n/* ------------------------------------------------------- */\n/* Inbox Tab */\n.addTask {\n  margin-top: 1rem;\n  width: 100%;\n  padding: 0.4rem 1rem;\n  text-align: left;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--midlight-gray);\n  color: var(--dark-gray);\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.addTask:hover {\n  font-weight: 600;\n  background-color: var(--hover-gray);\n}\n\n.todoList {\n  margin-top: 1rem;\n}\n\n.todoList div {\n  margin: 1rem 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 40px 8px 40px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.todoList div:hover {\n  background-color: var(--midlight-gray);\n}\n\n.delete-btn {\n  position: absolute;\n  right: -10px;\n  top: -5px;\n  border-radius: 50%;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 1px solid var(--dark-gray);\n  background-color: var(--dark-gray);\n  color: white;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  display: none;\n}\n\n.todoList div:hover .delete-btn {\n  display: block;\n}\n\n.todoList div p:first-of-type {\n  font-weight: 600;\n}\n.todoList div p:last-of-type {\n  color: var(--dark-gray);\n}\n\n/* -------------------------------------------------------- */\n/* Form Section */\n.form-container {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.192);\n  height: 100vh;\n  width: 100vw;\n}\n\nform {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  background-color: var(--body-gray);\n  width: 40rem;\n  padding: 0 1 2rem 1.4rem;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\nform button {\n  position: absolute;\n  right: 0.2rem;\n  top: 0.2rem;\n  height: 2rem;\n  width: 2rem;\n  border: none;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n}\n\nform button:hover {\n  transform: scale(1.2);\n}\n\nform h3 {\n  background-color: var(--dark-gray);\n  padding: 0.4rem 0 0.4rem 0.7rem;\n  color: white;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n\n.form-content {\n  margin: 0.5rem 1rem 1rem 1rem;\n}\n\nform {\n  color: var(--dark-gray);\n}\n\ninput[type=\"text\"],\ninput[type=\"submit\"],\ntextarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px;\n}\n\ninput[type=\"radio\"] {\n  margin-left: 10px;\n}\n\ninput,\ntextarea {\n  margin-bottom: 0.8rem;\n}\n\ninput[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  left: 1rem;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #bbb;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\ninput[type=\"checkbox\"]:checked {\n  background-color: var(--hover-gray);\n  border-color: var(--hover-gray);\n}\n\n/* ------------------------------------------------------------------------------------- */\n\n/* Responsive design */\n@media (max-width: 782px) {\n  body {\n    padding-left: 190px;\n  }\n\n  .side-bar {\n    width: 140px;\n  }\n}\n\n@media (max-width: 620px) {\n  .todoList div {\n    flex-direction: column;\n  }\n  .header h1,\n  .header i {\n    font-size: 2rem;\n  }\n  .side-bar {\n    top: 92px;\n  }\n}\n\n@media (max-width: 450px) {\n  body {\n    padding-left: 160px;\n  }\n  .container h1 {\n    font-size: 1.6rem;\n  }\n  .side-bar {\n    width: 120px;\n  }\n  .side-bar div p {\n    font-size: 13px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/Styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/* font */\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap\");\n\n:root {\n  --dark-gray: #413e3e;\n  --midlight-gray: #c4c3c3;\n  --hover-gray: #9c9999;\n  --body-gray: #dddcdc;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Poppins\", sans-serif;\n}\n\nbody {\n  background-color: var(--body-gray);\n  padding-left: 248px;\n  padding-top: 112px;\n  padding-right: 20px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n/* ------------------------------------------------------ */\n/* Header */\n.header {\n  background-color: var(--dark-gray);\n  padding: 1.4rem 0 1.4rem 3rem;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.header h1,\n.header i {\n  display: inline;\n  color: white;\n  font-weight: 600;\n  font-size: 2.4rem;\n  letter-spacing: 1px;\n  word-spacing: 5px;\n}\n\n.header h1 {\n  padding-left: 0.5rem;\n}\n/* ----------------------------------------------------------- */\n/* Sidebar */\n.side-bar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  top: 102px;\n  z-index: 0;\n  background-color: var(--midlight-gray);\n  padding: 1rem;\n  width: 13rem;\n  color: var(--dark-gray);\n  font-weight: 400;\n}\n\n.side-bar div p i {\n  padding-right: 0.5rem;\n}\n\n.side-bar div p {\n  padding: 0.5rem 0 0.5rem 1rem;\n  border-radius: 5px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n.side-bar div p:hover {\n  background-color: var(--hover-gray);\n  font-weight: 600;\n}\n\n/* Body */\n/* --------------------------------------------------------- */\n.container h1 {\n  color: var(--dark-gray);\n}\n\n/* ------------------------------------------------------- */\n/* Inbox Tab */\n.addTask {\n  margin-top: 1rem;\n  width: 100%;\n  padding: 0.4rem 1rem;\n  text-align: left;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--midlight-gray);\n  color: var(--dark-gray);\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.addTask:hover {\n  font-weight: 600;\n  background-color: var(--hover-gray);\n}\n\n.todoList {\n  margin-top: 1rem;\n}\n\n.todoList div {\n  margin: 1rem 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 40px 8px 40px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.todoList div:hover {\n  background-color: var(--midlight-gray);\n}\n\n.delete-btn {\n  position: absolute;\n  right: -10px;\n  top: -5px;\n  border-radius: 50%;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 1px solid var(--dark-gray);\n  background-color: var(--dark-gray);\n  color: white;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  display: none;\n}\n\n.todoList div:hover .delete-btn {\n  display: block;\n}\n\n.todoList div p:first-of-type {\n  font-weight: 600;\n}\n.todoList div p:last-of-type {\n  color: var(--dark-gray);\n}\n\n/* -------------------------------------------------------- */\n/* Form Section */\n.form-container {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.192);\n  height: 100vh;\n  width: 100vw;\n}\n\nform {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  background-color: var(--body-gray);\n  width: 40rem;\n  padding: 0 1 2rem 1.4rem;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\nform button {\n  position: absolute;\n  right: 0.2rem;\n  top: 0.2rem;\n  height: 2rem;\n  width: 2rem;\n  border: none;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n}\n\nform button:hover {\n  transform: scale(1.2);\n}\n\nform h3 {\n  background-color: var(--dark-gray);\n  padding: 0.4rem 0 0.4rem 0.7rem;\n  color: white;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n\n.form-content {\n  margin: 0.5rem 1rem 1rem 1rem;\n}\n\nform {\n  color: var(--dark-gray);\n}\n\ninput[type=\"text\"],\ninput[type=\"submit\"],\ntextarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px;\n}\n\ninput[type=\"radio\"] {\n  margin-left: 10px;\n}\n\ninput,\ntextarea {\n  margin-bottom: 0.8rem;\n}\n\ninput[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  left: 1rem;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #bbb;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\ninput[type=\"checkbox\"]:checked {\n  background-color: var(--hover-gray);\n  border-color: var(--hover-gray);\n}\n\n/* ------------------------------------------------------------------------------------- */\n\n/* Responsive design */\n@media (max-width: 782px) {\n  body {\n    padding-left: 190px;\n  }\n\n  .side-bar {\n    width: 140px;\n  }\n}\n\n@media (max-width: 620px) {\n  .todoList div {\n    flex-direction: column;\n  }\n  .header h1,\n  .header i {\n    font-size: 2rem;\n  }\n  .side-bar {\n    top: 92px;\n  }\n}\n\n@media (max-width: 450px) {\n  body {\n    padding-left: 160px;\n  }\n  .container h1 {\n    font-size: 1.6rem;\n  }\n  .side-bar {\n    width: 120px;\n  }\n  .side-bar div p {\n    font-size: 13px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/Styles/main.css":
/*!*****************************!*\
  !*** ./src/Styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/Styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Styles/main.css */ "./src/Styles/main.css");
/* harmony import */ var _Js_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Js/component.js */ "./src/Js/component.js");



// showing page Layout
var render = new _Js_component_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFB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LE9BQU8sRUFBRSxZQUFZO0VBQ3hFOEQsTUFBTSxDQUFDRSxRQUFRLEVBQUU7QUFDbkIsQ0FBQyxDQUFDO0FBRUYxRSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ1MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDNUU4RCxNQUFNLENBQUNHLE9BQU8sRUFBRTtBQUNsQixDQUFDLENBQUM7QUFFRjNFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDUyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtFQUM1RThELE1BQU0sQ0FBQ0ksWUFBWSxFQUFFO0FBQ3ZCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSnMvQm9keS9Db21wbGV0ZWRUYWIvY29tcGxldGVkVGFiLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pzL0JvZHkvRm9ybS9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pzL0JvZHkvSW5ib3hUYWIvaW5ib3hUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSnMvQm9keS9Ub2RheVRhYi90b2RheVRhYi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Kcy9Cb2R5L1RvZG8gQXJyYXkvdG9kb0Fyci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Kcy9Cb2R5L1dlZWtUYWIvd2Vla1RhYi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Kcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvU3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1N0eWxlcy9tYWluLmNzcz80ZWQ3Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBzZXRUb2RvQXJyLFxuICB0b2RvTG9jYWwsXG4gIHJlbmRlclRvZG8sXG4gIGNvbXBsZXRlZEFycixcbn0gZnJvbSBcIi4uL1RvZG8gQXJyYXkvdG9kb0Fyci5qc1wiO1xuaW1wb3J0IHsgaGVhZGVyLCBjb250YWluZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50LmpzXCI7XG5cbi8vIE1haW4gZnVuY3Rpb24gZm9yIEluYm94IFRhYlxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlZFRhYkZpbGUgPSAoKSA9PiB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkXCI7XG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcblxuICBpZiAodG9kb0xvY2FsKSB7XG4gICAgc2V0VG9kb0Fycih0b2RvTG9jYWwpO1xuICAgIHJlbmRlclRvZG8oY29tcGxldGVkQXJyKCkpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgdG9kb0FyciB9IGZyb20gXCIuLi9Ub2RvIEFycmF5L3RvZG9BcnJcIjtcbmltcG9ydCB7IGluYm94VGFiRmlsZSB9IGZyb20gXCIuLi9JbmJveFRhYi9pbmJveFRhYlwiO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xuY29uc3QgbG93UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG93UFwiKTtcbmNvbnN0IG1lZGl1bVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lZGl1bVBcIik7XG5jb25zdCBoaWdoUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlnaFBcIik7XG5sZXQgcHJpb3JpdHkgPSBcIlwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0aW5nIGZvcm0gaW4gdGhlIHBhZ2VcbmV4cG9ydCBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAvLyBEaXNwbGF5aW5nIHRoZSBmb3JtXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250YWluZXJcIikuc3R5bGUgPSBcImRpc3BsYXk6IGJsb2NrXCI7XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gQ2hlY2sgd2hpY2ggcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWRcbiAgY2hlY2hQcmlvcml0eSgpO1xuXG4gIGlmICh0aXRsZS52YWx1ZSAmJiBkYXRlLnZhbHVlKSB7XG4gICAgdG9kb0Fyci5wdXNoKHVwZGF0ZUZvcm1WYWx1ZSgpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjbGVhckZvcm1WYWx1ZSgpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250YWluZXJcIikuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcblxuICBpbmJveFRhYkZpbGUoKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvQXJyXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9BcnIpKTtcbn0pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFN0b3JpbmcgdmFsdWVzIGluIGEgY29uc3RydWN0b3JcbmZ1bmN0aW9uIEZvcm1WYWx1ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBpZCkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLmlkID0gaWQ7XG59XG5cbi8vIFVwZGF0aW5nIHRoZSBmb3JtIHZhbHVlIHVzaW5nIGNvbnN0cnVjdG9yXG5jb25zdCB1cGRhdGVGb3JtVmFsdWUgPSAoKSA9PiB7XG4gIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtVmFsdWUoXG4gICAgdGl0bGUudmFsdWUsXG4gICAgZGVzY3JpcHRpb24udmFsdWUsXG4gICAgZGF0ZS52YWx1ZSxcbiAgICBwcmlvcml0eSxcbiAgICBcIlwiICsgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgKTtcbiAgcmV0dXJuIGZvcm1EYXRhO1xufTtcblxuLy8gQ2xlYXJpbmcgdGhlIGZvcm0gdmFsdWVcbmNvbnN0IGNsZWFyRm9ybVZhbHVlID0gKCkgPT4ge1xuICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgZGF0ZS52YWx1ZSA9IFwiXCI7XG4gIGxvd1AuY2hlY2tlZCA9IGZhbHNlO1xuICBtZWRpdW1QLmNoZWNrZWQgPSBmYWxzZTtcbiAgaGlnaFAuY2hlY2tlZCA9IGZhbHNlO1xuICBwcmlvcml0eSA9IFwiXCI7XG59O1xuXG4vLyBjaGVja2luZyBwcmlvcml0eVxuY29uc3QgY2hlY2hQcmlvcml0eSA9ICgpID0+IHtcbiAgaWYgKGxvd1AuY2hlY2tlZCkge1xuICAgIHByaW9yaXR5ID0gbG93UC52YWx1ZTtcbiAgfSBlbHNlIGlmIChtZWRpdW1QLmNoZWNrZWQpIHtcbiAgICBwcmlvcml0eSA9IG1lZGl1bVAudmFsdWU7XG4gIH0gZWxzZSBpZiAoaGlnaFAuY2hlY2tlZCkge1xuICAgIHByaW9yaXR5ID0gaGlnaFAudmFsdWU7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSBcIi4uL0Zvcm0vZm9ybS5qc1wiO1xuaW1wb3J0IHtcbiAgc2V0VG9kb0FycixcbiAgdG9kb0xvY2FsLFxuICB0b2RvQXJyLFxuICByZW5kZXJUb2RvLFxufSBmcm9tIFwiLi4vVG9kbyBBcnJheS90b2RvQXJyLmpzXCI7XG4vLyBpbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4uL3JlbmRlclRvZG8vcmVuZGVyVG9kby5qc1wiO1xuaW1wb3J0IHsgaGVhZGVyLCBjb250YWluZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50LmpzXCI7XG5cbi8vIE1haW4gZnVuY3Rpb24gZm9yIEluYm94IFRhYlxuZXhwb3J0IGNvbnN0IGluYm94VGFiRmlsZSA9ICgpID0+IHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCB0YXNrXCI7XG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIik7XG5cbiAgLy8gQXBwZW5kaW5nIHRoZSBoZWFkZXIgYW5kIHRoZSBidXR0b24gaW4gdGhlIGNvbnRhaW5lclxuICBjb250YWluZXIuYXBwZW5kKGhlYWRlciwgYWRkVGFza0J0bik7XG5cbiAgaWYgKHRvZG9Mb2NhbCkge1xuICAgIHNldFRvZG9BcnIodG9kb0xvY2FsKTtcbiAgICByZW5kZXJUb2RvKHRvZG9BcnIpO1xuICB9XG5cbiAgLy8gQWRkIHRhc2sgYnV0dG9uIGNsaWNrZWRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9ybSgpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQge1xuICBzZXRUb2RvQXJyLFxuICB0b2RvTG9jYWwsXG4gIHJlbmRlclRvZG8sXG4gIHRvZGF5QXJyLFxufSBmcm9tIFwiLi4vVG9kbyBBcnJheS90b2RvQXJyLmpzXCI7XG5pbXBvcnQgeyBoZWFkZXIsIGNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnQuanNcIjtcblxuLy8gTWFpbiBmdW5jdGlvbiBmb3IgSW5ib3ggVGFiXG5leHBvcnQgY29uc3QgdG9kYXlUYWJGaWxlID0gKCkgPT4ge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcblxuICBpZiAodG9kb0xvY2FsKSB7XG4gICAgc2V0VG9kb0Fycih0b2RvTG9jYWwpO1xuICAgIHJlbmRlclRvZG8odG9kYXlBcnIoKSk7XG4gIH1cbn07XG4iLCIvLyBNb2RlbFxuLy8gTW9kZWxcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRcIjtcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGxldCB0b2RvTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FyclwiKSk7XG5leHBvcnQgbGV0IHRvZG9BcnIgPSBbXTtcblxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG5jb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0XCIpO1xuXG4vLyBWaWV3XG4vLyBWaWV3XG4vLyBNYWluIGZ1bmN0aW9uIHRvIHJlbmRlclxuZXhwb3J0IGNvbnN0IHJlbmRlclRvZG8gPSAodG9kb0FycikgPT4ge1xuICB0b2RvRGl2LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgdG9kb0Fyci5mb3JFYWNoKGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgY29uc3QgaW5kaXZpZHVhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCB0aXRsZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZU5hbWUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuXG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja0JveC5kYXRhc2V0LnRvZG9JZCA9IHRvZG8uaWQ7XG4gICAgY2hlY2tCb3gub25jaGFuZ2UgPSBjaGFuZ2VUb2RvO1xuICAgIGlmICh0b2RvLmlzRG9uZSA9PSB0cnVlKSB7XG4gICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRpdGxlTmFtZS5zdHlsZSA9IFwidGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2hcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNldCBjb2xvciBhY2NvcmRpbmcgdG8gcHJpb3JpdHlcbiAgICBpZiAodG9kby5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XG4gICAgICBpbmRpdmlkdWFsRGl2LnN0eWxlID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMiwgMjAyLCA4MywgMC40MzkpXCI7XG4gICAgfSBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09IFwiTWVkaXVtXCIpIHtcbiAgICAgIGluZGl2aWR1YWxEaXYuc3R5bGUgPSBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoODcsIDIwNCwgODcsIDAuNDM5KVwiO1xuICAgIH0gZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PSBcIkhpZ2hcIikge1xuICAgICAgaW5kaXZpZHVhbERpdi5zdHlsZSA9IFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTAsIDk0LCA5NCwgMC40MzkpXCI7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkYXRlTmFtZS50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xuICAgIGRlbGV0ZUJ0bi5pZCA9IHRvZG8uaWQ7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb2RvKTtcblxuICAgIC8vIEFkZGluZyB0aGUgZWxlbWVudHMgdG8gdGhlIHBhZ2VcbiAgICBpbmRpdmlkdWFsRGl2LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICBpbmRpdmlkdWFsRGl2LmFwcGVuZCh0aXRsZU5hbWUsIGRhdGVOYW1lLCBkZWxldGVCdG4pO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoaW5kaXZpZHVhbERpdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICB9KTtcbn07XG5cbi8vIEFyY2hpdGVjdHVyZVxuLy8gQXJjaGl0ZWN0dXJlXG4vKiBhc3NpZ25pbmcgdmFsdWUgZnJvbSBsb2NhbCBzdG9yYWdlICovXG5leHBvcnQgY29uc3Qgc2V0VG9kb0FyciA9IChuZXdUb2RvQXJyKSA9PiB7XG4gIHRvZG9BcnIgPSBuZXdUb2RvQXJyO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvZGF5QXJyID0gKCkgPT4ge1xuICByZXR1cm4gdG9kb0Fyci5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IG5ldyBEYXRlKHRvZG8uZGF0ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIHRvZG9EYXRlLmdldEZ1bGxZZWFyKCkgPT0gdG9kYXkuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgdG9kb0RhdGUuZ2V0TW9udGgoKSA9PSB0b2RheS5nZXRNb250aCgpICYmXG4gICAgICB0b2RvRGF0ZS5nZXREYXRlKCkgPT0gdG9kYXkuZ2V0RGF0ZSgpXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3VycmVudFdlZWtBcnIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgc3RhcnRPZldlZWsgPSBuZXcgRGF0ZSh0b2RheS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIHRvZGF5LmdldERheSgpKSk7IC8vIFN1bmRheVxuICBjb25zdCBlbmRPZldlZWsgPSBuZXcgRGF0ZShcbiAgICB0b2RheS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIHRvZGF5LmdldERheSgpICsgNilcbiAgKTsgLy8gU2F0dXJkYXlcblxuICByZXR1cm4gdG9kb0Fyci5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IG5ldyBEYXRlKHRvZG8uZGF0ZSk7XG4gICAgcmV0dXJuIHRvZG9EYXRlID49IHN0YXJ0T2ZXZWVrICYmIHRvZG9EYXRlIDw9IGVuZE9mV2VlaztcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcGxldGVkQXJyID0gKCkgPT4ge1xuICByZXR1cm4gdG9kb0Fyci5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaXNEb25lKTtcbn07XG5cbi8vIGRlbGV0ZSBmdW50aW9uYWxpdHlcbmNvbnN0IGRlbGV0ZVRvZG8gPSAoZSkgPT4ge1xuICByZW1vdmVUb2RvKGUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9BcnJcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0FycikpO1xuICB0b2RvTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FyclwiKSk7XG5cbiAgY2hlY2tQYWdlKCk7XG59O1xuXG5jb25zdCByZW1vdmVUb2RvID0gKGUpID0+IHtcbiAgdG9kb0FyciA9IHRvZG9BcnIuZmlsdGVyKGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgaWYgKHRvZG8uaWQgPT09IGUudGFyZ2V0LmlkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBDaGVja2JveCBmdW5jdGlvbmFsaXR5XG5jb25zdCBjaGFuZ2VUb2RvID0gKGUpID0+IHtcbiAgY29uc3QgY2hlY2tib3ggPSBlLnRhcmdldDtcblxuICBjb25zdCB0b2RvSWQgPSBjaGVja2JveC5kYXRhc2V0LnRvZG9JZDtcbiAgY29uc3QgY2hlY2tlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XG5cbiAgdG9nZ2xlVG9kbyh0b2RvSWQsIGNoZWNrZWQpO1xuICBjaGVja1BhZ2UoKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9BcnJcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0FycikpO1xufTtcblxuY29uc3QgdG9nZ2xlVG9kbyA9ICh0b2RvSWQsIGNoZWNrZWQpID0+IHtcbiAgdG9kb0Fyci5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgaWYgKHRvZG8uaWQgPT0gdG9kb0lkKSB7XG4gICAgICB0b2RvLmlzRG9uZSA9IGNoZWNrZWQ7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIENoZWNrIHBhZ2UgYmVmb3JlIHJlbmRlcmluZ1xuY29uc3QgY2hlY2tQYWdlID0gKCkgPT4ge1xuICBpZiAoaGVhZGVyLnRleHRDb250ZW50ID09IFwiSW5ib3hcIikge1xuICAgIHJlbmRlclRvZG8odG9kb0Fycik7XG4gIH0gZWxzZSBpZiAoaGVhZGVyLnRleHRDb250ZW50ID09IFwiVG9kYXlcIikge1xuICAgIHJlbmRlclRvZG8odG9kYXlBcnIoKSk7XG4gIH0gZWxzZSBpZiAoaGVhZGVyLnRleHRDb250ZW50ID09IFwiVGhpcyBXZWVrXCIpIHtcbiAgICByZW5kZXJUb2RvKGN1cnJlbnRXZWVrQXJyKCkpO1xuICB9XG59O1xuIiwiaW1wb3J0IHtcbiAgc2V0VG9kb0FycixcbiAgdG9kb0xvY2FsLFxuICByZW5kZXJUb2RvLFxuICBjdXJyZW50V2Vla0Fycixcbn0gZnJvbSBcIi4uL1RvZG8gQXJyYXkvdG9kb0Fyci5qc1wiO1xuaW1wb3J0IHsgaGVhZGVyLCBjb250YWluZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50LmpzXCI7XG5cbi8vIE1haW4gZnVuY3Rpb24gZm9yIEluYm94IFRhYlxuZXhwb3J0IGNvbnN0IHdlZWtUYWJGaWxlID0gKCkgPT4ge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xuICBjb250YWluZXIuYXBwZW5kKGhlYWRlcik7XG5cbiAgaWYgKHRvZG9Mb2NhbCkge1xuICAgIHNldFRvZG9BcnIodG9kb0xvY2FsKTtcbiAgICByZW5kZXJUb2RvKGN1cnJlbnRXZWVrQXJyKCkpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgaW5ib3hUYWJGaWxlIH0gZnJvbSBcIi4vQm9keS9JbmJveFRhYi9pbmJveFRhYi5qc1wiO1xuaW1wb3J0IHsgdG9kYXlUYWJGaWxlIH0gZnJvbSBcIi4vQm9keS9Ub2RheVRhYi90b2RheVRhYi5qc1wiO1xuaW1wb3J0IHsgd2Vla1RhYkZpbGUgfSBmcm9tIFwiLi9Cb2R5L1dlZWtUYWIvd2Vla1RhYi5qc1wiO1xuaW1wb3J0IHsgY29tcGxldGVkVGFiRmlsZSB9IGZyb20gXCIuL0JvZHkvQ29tcGxldGVkVGFiL2NvbXBsZXRlZFRhYi5qc1wiO1xuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb21wb25lbnQge1xuICBpbmJveFRhYigpIHtcbiAgICBpbmJveFRhYkZpbGUoKTtcbiAgfVxuXG4gIHRvZGF5VGFiKCkge1xuICAgIHRvZGF5VGFiRmlsZSgpO1xuICB9XG5cbiAgd2Vla1RhYigpIHtcbiAgICB3ZWVrVGFiRmlsZSgpO1xuICB9XG5cbiAgY29tcGxldGVkVGFiKCkge1xuICAgIGNvbXBsZXRlZFRhYkZpbGUoKTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogZm9udCAqL1xcblxcbjpyb290IHtcXG4gIC0tZGFyay1ncmF5OiAjNDEzZTNlO1xcbiAgLS1taWRsaWdodC1ncmF5OiAjYzRjM2MzO1xcbiAgLS1ob3Zlci1ncmF5OiAjOWM5OTk5O1xcbiAgLS1ib2R5LWdyYXk6ICNkZGRjZGM7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ncmF5KTtcXG4gIHBhZGRpbmctbGVmdDogMjQ4cHg7XFxuICBwYWRkaW5nLXRvcDogMTEycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBwYWRkaW5nOiAxLjRyZW0gMCAxLjRyZW0gM3JlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5oZWFkZXIgaDEsXFxuLmhlYWRlciBpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB3b3JkLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBTaWRlYmFyICovXFxuLnNpZGUtYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDEwMnB4O1xcbiAgei1pbmRleDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGxpZ2h0LWdyYXkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiAxM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnNpZGUtYmFyIGRpdiBwIGkge1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4uc2lkZS1iYXIgZGl2IHAge1xcbiAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZS1iYXIgZGl2IHA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4vKiBCb2R5ICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLmNvbnRhaW5lciBoMSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIEluYm94IFRhYiAqL1xcbi5hZGRUYXNrIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGxpZ2h0LWdyYXkpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hZGRUYXNrOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmF5KTtcXG59XFxuXFxuLnRvZG9MaXN0IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi50b2RvTGlzdCBkaXYge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogOHB4IDQwcHggOHB4IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvTGlzdCBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkbGlnaHQtZ3JheSk7XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIHRvcDogLTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JheSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvTGlzdCBkaXY6aG92ZXIgLmRlbGV0ZS1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvTGlzdCBkaXYgcDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi50b2RvTGlzdCBkaXYgcDpsYXN0LW9mLXR5cGUge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogRm9ybSBTZWN0aW9uICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE5Mik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWdyYXkpO1xcbiAgd2lkdGg6IDQwcmVtO1xcbiAgcGFkZGluZzogMCAxIDJyZW0gMS40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwLjJyZW07XFxuICB0b3A6IDAuMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbmZvcm0gaDMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwIDAuNHJlbSAwLjdyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiYmI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmF5KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBSZXNwb25zaXZlIGRlc2lnbiAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODJweCkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmctbGVmdDogMTkwcHg7XFxuICB9XFxuXFxuICAuc2lkZS1iYXIge1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xcbiAgLnRvZG9MaXN0IGRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuaGVhZGVyIGgxLFxcbiAgLmhlYWRlciBpIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLnNpZGUtYmFyIHtcXG4gICAgdG9wOiA5MnB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2MHB4O1xcbiAgfVxcbiAgLmNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcbiAgLnNpZGUtYmFyIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgfVxcbiAgLnNpZGUtYmFyIGRpdiBwIHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvU3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVM7O0FBR1Q7RUFDRSxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBLDJEQUEyRDtBQUMzRCxXQUFXO0FBQ1g7RUFDRSxrQ0FBa0M7RUFDbEMsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQSxnRUFBZ0U7QUFDaEUsWUFBWTtBQUNaO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsVUFBVTtFQUNWLFVBQVU7RUFDVixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxnQkFBZ0I7QUFDbEI7O0FBRUEsU0FBUztBQUNULDhEQUE4RDtBQUM5RDtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSw0REFBNEQ7QUFDNUQsY0FBYztBQUNkO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSw2REFBNkQ7QUFDN0QsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLCtCQUErQjtBQUNqQzs7QUFFQSwwRkFBMEY7O0FBRTFGLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBOztJQUVFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogZm9udCAqL1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWRhcmstZ3JheTogIzQxM2UzZTtcXG4gIC0tbWlkbGlnaHQtZ3JheTogI2M0YzNjMztcXG4gIC0taG92ZXItZ3JheTogIzljOTk5OTtcXG4gIC0tYm9keS1ncmF5OiAjZGRkY2RjO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktZ3JheSk7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OHB4O1xcbiAgcGFkZGluZy10b3A6IDExMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogSGVhZGVyICovXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgcGFkZGluZzogMS40cmVtIDAgMS40cmVtIDNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGVhZGVyIGgxLFxcbi5oZWFkZXIgaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgd29yZC1zcGFjaW5nOiA1cHg7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlLWJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAxMDJweDtcXG4gIHotaW5kZXg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRsaWdodC1ncmF5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMTNyZW07XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zaWRlLWJhciBkaXYgcCBpIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnNpZGUtYmFyIGRpdiBwIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGUtYmFyIGRpdiBwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWdyYXkpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyogQm9keSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5jb250YWluZXIgaDEge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBJbmJveCBUYWIgKi9cXG4uYWRkVGFzayB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRsaWdodC1ncmF5KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkVGFzazpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxufVxcblxcbi50b2RvTGlzdCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2IHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDhweCA0MHB4IDhweCA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTEwcHg7XFxuICB0b3A6IC01cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2OmhvdmVyIC5kZWxldGUtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4udG9kb0xpc3QgZGl2IHA6bGFzdC1vZi10eXBlIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIEZvcm0gU2VjdGlvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOTIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ncmF5KTtcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIHBhZGRpbmc6IDAgMSAycmVtIDEuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMC4ycmVtO1xcbiAgdG9wOiAwLjJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuZm9ybSBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG5mb3JtIGgzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBwYWRkaW5nOiAwLjRyZW0gMCAwLjRyZW0gMC43cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLmZvcm0tY29udGVudCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYmJiO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWhvdmVyLWdyYXkpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogUmVzcG9uc2l2ZSBkZXNpZ24gKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzgycHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE5MHB4O1xcbiAgfVxcblxcbiAgLnNpZGUtYmFyIHtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcXG4gIC50b2RvTGlzdCBkaXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmhlYWRlciBoMSxcXG4gIC5oZWFkZXIgaSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIC5zaWRlLWJhciB7XFxuICAgIHRvcDogOTJweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNjBweDtcXG4gIH1cXG4gIC5jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gIH1cXG4gIC5zaWRlLWJhciB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gIH1cXG4gIC5zaWRlLWJhciBkaXYgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9TdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vSnMvY29tcG9uZW50LmpzXCI7XG5cbi8vIHNob3dpbmcgcGFnZSBMYXlvdXRcbmNvbnN0IHJlbmRlciA9IG5ldyBjb21wb25lbnQoKTtcbnJlbmRlci5pbmJveFRhYigpO1xuXG4vLyBpbmJveCBidXR0b24gY2xpY2tlZFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveC1lbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZW5kZXIuaW5ib3hUYWIoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWVsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlbmRlci50b2RheVRhYigpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhpc193ZWVrLWVsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlbmRlci53ZWVrVGFiKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWQtZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVuZGVyLmNvbXBsZXRlZFRhYigpO1xufSk7XG4iXSwibmFtZXMiOlsic2V0VG9kb0FyciIsInRvZG9Mb2NhbCIsInJlbmRlclRvZG8iLCJjb21wbGV0ZWRBcnIiLCJoZWFkZXIiLCJjb250YWluZXIiLCJjb21wbGV0ZWRUYWJGaWxlIiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJ0b2RvQXJyIiwiaW5ib3hUYWJGaWxlIiwidGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJsb3dQIiwibWVkaXVtUCIsImhpZ2hQIiwicHJpb3JpdHkiLCJmb3JtIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNoZWNoUHJpb3JpdHkiLCJ2YWx1ZSIsInB1c2giLCJ1cGRhdGVGb3JtVmFsdWUiLCJjbGVhckZvcm1WYWx1ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiRm9ybVZhbHVlIiwiaWQiLCJmb3JtRGF0YSIsIkRhdGUiLCJnZXRUaW1lIiwiY2hlY2tlZCIsImFkZFRhc2tCdG4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9kYXlBcnIiLCJ0b2RheVRhYkZpbGUiLCJwYXJzZSIsImdldEl0ZW0iLCJ0b2RheSIsInRvZG9EaXYiLCJmb3JFYWNoIiwidG9kbyIsImluZGl2aWR1YWxEaXYiLCJ0aXRsZU5hbWUiLCJjaGVja0JveCIsInR5cGUiLCJkYXRhc2V0IiwidG9kb0lkIiwib25jaGFuZ2UiLCJjaGFuZ2VUb2RvIiwiaXNEb25lIiwiZGF0ZU5hbWUiLCJkZWxldGVCdG4iLCJkZWxldGVUb2RvIiwiYXBwZW5kQ2hpbGQiLCJuZXdUb2RvQXJyIiwiZmlsdGVyIiwidG9kb0RhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImN1cnJlbnRXZWVrQXJyIiwic3RhcnRPZldlZWsiLCJzZXREYXRlIiwiZ2V0RGF5IiwiZW5kT2ZXZWVrIiwiZSIsInJlbW92ZVRvZG8iLCJjaGVja1BhZ2UiLCJ0YXJnZXQiLCJjaGVja2JveCIsInRvZ2dsZVRvZG8iLCJ3ZWVrVGFiRmlsZSIsImNvbXBvbmVudCIsInJlbmRlciIsImluYm94VGFiIiwidG9kYXlUYWIiLCJ3ZWVrVGFiIiwiY29tcGxldGVkVGFiIl0sInNvdXJjZVJvb3QiOiIifQ==