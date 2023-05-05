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

  // rendering according to page
  if (_component__WEBPACK_IMPORTED_MODULE_0__.header.textContent == "Inbox") {
    renderTodo(todoArr);
  } else if (_component__WEBPACK_IMPORTED_MODULE_0__.header.textContent == "Today") {
    renderTodo(todayArr());
  } else if (_component__WEBPACK_IMPORTED_MODULE_0__.header.textContent == "This Week") {
    renderTodo(currentWeekArr());
  }
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
  renderTodo(todoArr);
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
};
var toggleTodo = function toggleTodo(todoId, checked) {
  todoArr.forEach(function (todo) {
    if (todo.id == todoId) {
      todo.isDone = checked;
    }
  });
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
___CSS_LOADER_EXPORT___.push([module.id, "/* font */\n\n:root {\n  --dark-gray: #413e3e;\n  --midlight-gray: #c4c3c3;\n  --hover-gray: #9c9999;\n  --body-gray: #dddcdc;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Poppins\", sans-serif;\n}\n\nbody {\n  background-color: var(--body-gray);\n  padding-left: 30%;\n  padding-right: 15%;\n  padding-top: 7rem;\n}\n\n/* Header */\n.header {\n  background-color: var(--dark-gray);\n  padding: 1.4rem 0 1.4rem 3rem;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.header h1,\n.header i {\n  display: inline;\n  color: white;\n  font-weight: 600;\n  font-size: 2.4rem;\n  letter-spacing: 1px;\n  word-spacing: 5px;\n}\n\n.header h1 {\n  padding-left: 0.5rem;\n}\n\n/* Sidebar */\n.side-bar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  top: 102px;\n  z-index: 0;\n  background-color: var(--midlight-gray);\n  padding: 1rem;\n  width: 13rem;\n  color: var(--dark-gray);\n  font-weight: 400;\n}\n\n.side-bar div p i {\n  padding-right: 0.5rem;\n}\n\n.side-bar div p {\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n.side-bar div p:hover {\n  background-color: var(--hover-gray);\n  font-weight: 600;\n}\n\n/* Body */\n.container h1 {\n  color: var(--dark-gray);\n}\n\n/* Inbox Tab */\n.addTask {\n  margin-top: 1rem;\n  width: 100%;\n  padding: 0.4rem 1rem;\n  text-align: left;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--midlight-gray);\n  color: var(--dark-gray);\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.addTask:hover {\n  font-weight: 600;\n  background-color: var(--hover-gray);\n}\n\n.todoList {\n  margin-top: 1rem;\n}\n\n.todoList div {\n  margin: 1rem 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 40px 8px 40px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.todoList div:hover {\n  background-color: var(--midlight-gray);\n}\n\n.delete-btn {\n  position: absolute;\n  right: -10px;\n  top: -5px;\n  border-radius: 50%;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 1px solid var(--dark-gray);\n  background-color: var(--dark-gray);\n  color: white;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  display: none;\n}\n\n.todoList div:hover .delete-btn {\n  display: block;\n}\n\n.todoList div p:first-of-type {\n  font-weight: 600;\n}\n.todoList div p:last-of-type {\n  color: var(--dark-gray);\n}\n\n/* Form Section */\n.form-container {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.192);\n  height: 100vh;\n  width: 100vw;\n}\n\nform {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  background-color: var(--body-gray);\n  width: 40rem;\n  padding: 0 1 2rem 1.4rem;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\nform button {\n  position: absolute;\n  right: 0.2rem;\n  top: 0.2rem;\n  height: 2rem;\n  width: 2rem;\n  border: none;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n}\n\nform button:hover {\n  transform: scale(1.2);\n}\n\nform h3 {\n  background-color: var(--dark-gray);\n  padding: 0.4rem 0 0.4rem 0.7rem;\n  color: white;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n\n.form-content {\n  margin: 0.5rem 1rem 1rem 1rem;\n}\n\nform {\n  color: var(--dark-gray);\n}\n\ninput[type=\"text\"],\ninput[type=\"submit\"],\ntextarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px;\n}\n\ninput[type=\"radio\"] {\n  margin-left: 10px;\n}\n\ninput,\ntextarea {\n  margin-bottom: 0.8rem;\n}\n\ninput[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  left: 1rem;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #bbb;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\ninput[type=\"checkbox\"]:checked {\n  background-color: var(--hover-gray);\n  border-color: var(--hover-gray);\n}\n\n/* ------------------------------------------------------------------------------------- */\n", "",{"version":3,"sources":["webpack://./src/Styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/* font */\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap\");\n\n:root {\n  --dark-gray: #413e3e;\n  --midlight-gray: #c4c3c3;\n  --hover-gray: #9c9999;\n  --body-gray: #dddcdc;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Poppins\", sans-serif;\n}\n\nbody {\n  background-color: var(--body-gray);\n  padding-left: 30%;\n  padding-right: 15%;\n  padding-top: 7rem;\n}\n\n/* Header */\n.header {\n  background-color: var(--dark-gray);\n  padding: 1.4rem 0 1.4rem 3rem;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.header h1,\n.header i {\n  display: inline;\n  color: white;\n  font-weight: 600;\n  font-size: 2.4rem;\n  letter-spacing: 1px;\n  word-spacing: 5px;\n}\n\n.header h1 {\n  padding-left: 0.5rem;\n}\n\n/* Sidebar */\n.side-bar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  top: 102px;\n  z-index: 0;\n  background-color: var(--midlight-gray);\n  padding: 1rem;\n  width: 13rem;\n  color: var(--dark-gray);\n  font-weight: 400;\n}\n\n.side-bar div p i {\n  padding-right: 0.5rem;\n}\n\n.side-bar div p {\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n.side-bar div p:hover {\n  background-color: var(--hover-gray);\n  font-weight: 600;\n}\n\n/* Body */\n.container h1 {\n  color: var(--dark-gray);\n}\n\n/* Inbox Tab */\n.addTask {\n  margin-top: 1rem;\n  width: 100%;\n  padding: 0.4rem 1rem;\n  text-align: left;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--midlight-gray);\n  color: var(--dark-gray);\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.addTask:hover {\n  font-weight: 600;\n  background-color: var(--hover-gray);\n}\n\n.todoList {\n  margin-top: 1rem;\n}\n\n.todoList div {\n  margin: 1rem 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 40px 8px 40px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.todoList div:hover {\n  background-color: var(--midlight-gray);\n}\n\n.delete-btn {\n  position: absolute;\n  right: -10px;\n  top: -5px;\n  border-radius: 50%;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 1px solid var(--dark-gray);\n  background-color: var(--dark-gray);\n  color: white;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  display: none;\n}\n\n.todoList div:hover .delete-btn {\n  display: block;\n}\n\n.todoList div p:first-of-type {\n  font-weight: 600;\n}\n.todoList div p:last-of-type {\n  color: var(--dark-gray);\n}\n\n/* Form Section */\n.form-container {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.192);\n  height: 100vh;\n  width: 100vw;\n}\n\nform {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  background-color: var(--body-gray);\n  width: 40rem;\n  padding: 0 1 2rem 1.4rem;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\nform button {\n  position: absolute;\n  right: 0.2rem;\n  top: 0.2rem;\n  height: 2rem;\n  width: 2rem;\n  border: none;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n}\n\nform button:hover {\n  transform: scale(1.2);\n}\n\nform h3 {\n  background-color: var(--dark-gray);\n  padding: 0.4rem 0 0.4rem 0.7rem;\n  color: white;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n\n.form-content {\n  margin: 0.5rem 1rem 1rem 1rem;\n}\n\nform {\n  color: var(--dark-gray);\n}\n\ninput[type=\"text\"],\ninput[type=\"submit\"],\ntextarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px;\n}\n\ninput[type=\"radio\"] {\n  margin-left: 10px;\n}\n\ninput,\ntextarea {\n  margin-bottom: 0.8rem;\n}\n\ninput[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  left: 1rem;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #bbb;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\ninput[type=\"checkbox\"]:checked {\n  background-color: var(--hover-gray);\n  border-color: var(--hover-gray);\n}\n\n/* ------------------------------------------------------------------------------------- */\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdEQUFTLEVBQUU7QUFDOUJDLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFOztBQUVqQjtBQUNBeEUsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQ3hFNkQsTUFBTSxDQUFDQyxRQUFRLEVBQUU7QUFDbkIsQ0FBQyxDQUFDO0FBRUZ4RSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ1MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDeEU2RCxNQUFNLENBQUNFLFFBQVEsRUFBRTtBQUNuQixDQUFDLENBQUM7QUFFRnpFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDUyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtFQUM1RTZELE1BQU0sQ0FBQ0csT0FBTyxFQUFFO0FBQ2xCLENBQUMsQ0FBQztBQUVGMUUsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQzVFNkQsTUFBTSxDQUFDSSxZQUFZLEVBQUU7QUFDdkIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Kcy9Cb2R5L0NvbXBsZXRlZFRhYi9jb21wbGV0ZWRUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSnMvQm9keS9Gb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSnMvQm9keS9JbmJveFRhYi9pbmJveFRhYi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Kcy9Cb2R5L1RvZGF5VGFiL3RvZGF5VGFiLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pzL0JvZHkvVG9kbyBBcnJheS90b2RvQXJyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pzL0JvZHkvV2Vla1RhYi93ZWVrVGFiLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9TdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvU3R5bGVzL21haW4uY3NzPzRlZDciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHNldFRvZG9BcnIsXG4gIHRvZG9Mb2NhbCxcbiAgcmVuZGVyVG9kbyxcbiAgY29tcGxldGVkQXJyLFxufSBmcm9tIFwiLi4vVG9kbyBBcnJheS90b2RvQXJyLmpzXCI7XG5pbXBvcnQgeyBoZWFkZXIsIGNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnQuanNcIjtcblxuLy8gTWFpbiBmdW5jdGlvbiBmb3IgSW5ib3ggVGFiXG5leHBvcnQgY29uc3QgY29tcGxldGVkVGFiRmlsZSA9ICgpID0+IHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIjtcbiAgY29udGFpbmVyLmFwcGVuZChoZWFkZXIpO1xuXG4gIGlmICh0b2RvTG9jYWwpIHtcbiAgICBzZXRUb2RvQXJyKHRvZG9Mb2NhbCk7XG4gICAgcmVuZGVyVG9kbyhjb21wbGV0ZWRBcnIoKSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyB0b2RvQXJyIH0gZnJvbSBcIi4uL1RvZG8gQXJyYXkvdG9kb0FyclwiO1xuaW1wb3J0IHsgaW5ib3hUYWJGaWxlIH0gZnJvbSBcIi4uL0luYm94VGFiL2luYm94VGFiXCI7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG5jb25zdCBsb3dQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb3dQXCIpO1xuY29uc3QgbWVkaXVtUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVkaXVtUFwiKTtcbmNvbnN0IGhpZ2hQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdoUFwiKTtcbmxldCBwcmlvcml0eSA9IFwiXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRpbmcgZm9ybSBpbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gIC8vIERpc3BsYXlpbmcgdGhlIGZvcm1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKS5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2tcIjtcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBDaGVjayB3aGljaCByYWRpbyBidXR0b24gaXMgY2hlY2tlZFxuICBjaGVjaFByaW9yaXR5KCk7XG5cbiAgaWYgKHRpdGxlLnZhbHVlICYmIGRhdGUudmFsdWUpIHtcbiAgICB0b2RvQXJyLnB1c2godXBkYXRlRm9ybVZhbHVlKCkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNsZWFyRm9ybVZhbHVlKCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKS5zdHlsZSA9IFwiZGlzcGxheTogbm9uZVwiO1xuXG4gIGluYm94VGFiRmlsZSgpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9BcnJcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0FycikpO1xufSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU3RvcmluZyB2YWx1ZXMgaW4gYSBjb25zdHJ1Y3RvclxuZnVuY3Rpb24gRm9ybVZhbHVlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGlkKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMuaWQgPSBpZDtcbn1cblxuLy8gVXBkYXRpbmcgdGhlIGZvcm0gdmFsdWUgdXNpbmcgY29uc3RydWN0b3JcbmNvbnN0IHVwZGF0ZUZvcm1WYWx1ZSA9ICgpID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1WYWx1ZShcbiAgICB0aXRsZS52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICBkYXRlLnZhbHVlLFxuICAgIHByaW9yaXR5LFxuICAgIFwiXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICApO1xuICByZXR1cm4gZm9ybURhdGE7XG59O1xuXG4vLyBDbGVhcmluZyB0aGUgZm9ybSB2YWx1ZVxuY29uc3QgY2xlYXJGb3JtVmFsdWUgPSAoKSA9PiB7XG4gIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICBkYXRlLnZhbHVlID0gXCJcIjtcbiAgbG93UC5jaGVja2VkID0gZmFsc2U7XG4gIG1lZGl1bVAuY2hlY2tlZCA9IGZhbHNlO1xuICBoaWdoUC5jaGVja2VkID0gZmFsc2U7XG4gIHByaW9yaXR5ID0gXCJcIjtcbn07XG5cbi8vIGNoZWNraW5nIHByaW9yaXR5XG5jb25zdCBjaGVjaFByaW9yaXR5ID0gKCkgPT4ge1xuICBpZiAobG93UC5jaGVja2VkKSB7XG4gICAgcHJpb3JpdHkgPSBsb3dQLnZhbHVlO1xuICB9IGVsc2UgaWYgKG1lZGl1bVAuY2hlY2tlZCkge1xuICAgIHByaW9yaXR5ID0gbWVkaXVtUC52YWx1ZTtcbiAgfSBlbHNlIGlmIChoaWdoUC5jaGVja2VkKSB7XG4gICAgcHJpb3JpdHkgPSBoaWdoUC52YWx1ZTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tIFwiLi4vRm9ybS9mb3JtLmpzXCI7XG5pbXBvcnQge1xuICBzZXRUb2RvQXJyLFxuICB0b2RvTG9jYWwsXG4gIHRvZG9BcnIsXG4gIHJlbmRlclRvZG8sXG59IGZyb20gXCIuLi9Ub2RvIEFycmF5L3RvZG9BcnIuanNcIjtcbi8vIGltcG9ydCB7IHJlbmRlclRvZG8gfSBmcm9tIFwiLi4vcmVuZGVyVG9kby9yZW5kZXJUb2RvLmpzXCI7XG5pbXBvcnQgeyBoZWFkZXIsIGNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnQuanNcIjtcblxuLy8gTWFpbiBmdW5jdGlvbiBmb3IgSW5ib3ggVGFiXG5leHBvcnQgY29uc3QgaW5ib3hUYWJGaWxlID0gKCkgPT4ge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG5cbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIisgQWRkIHRhc2tcIjtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKTtcblxuICAvLyBBcHBlbmRpbmcgdGhlIGhlYWRlciBhbmQgdGhlIGJ1dHRvbiBpbiB0aGUgY29udGFpbmVyXG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBhZGRUYXNrQnRuKTtcblxuICBpZiAodG9kb0xvY2FsKSB7XG4gICAgc2V0VG9kb0Fycih0b2RvTG9jYWwpO1xuICAgIHJlbmRlclRvZG8odG9kb0Fycik7XG4gIH1cblxuICAvLyBBZGQgdGFzayBidXR0b24gY2xpY2tlZFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JtKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIHNldFRvZG9BcnIsXG4gIHRvZG9Mb2NhbCxcbiAgcmVuZGVyVG9kbyxcbiAgdG9kYXlBcnIsXG59IGZyb20gXCIuLi9Ub2RvIEFycmF5L3RvZG9BcnIuanNcIjtcbmltcG9ydCB7IGhlYWRlciwgY29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudC5qc1wiO1xuXG4vLyBNYWluIGZ1bmN0aW9uIGZvciBJbmJveCBUYWJcbmV4cG9ydCBjb25zdCB0b2RheVRhYkZpbGUgPSAoKSA9PiB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgY29udGFpbmVyLmFwcGVuZChoZWFkZXIpO1xuXG4gIGlmICh0b2RvTG9jYWwpIHtcbiAgICBzZXRUb2RvQXJyKHRvZG9Mb2NhbCk7XG4gICAgcmVuZGVyVG9kbyh0b2RheUFycigpKTtcbiAgfVxufTtcbiIsIi8vIE1vZGVsXG4vLyBNb2RlbFxuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudFwiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgbGV0IHRvZG9Mb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvQXJyXCIpKTtcbmV4cG9ydCBsZXQgdG9kb0FyciA9IFtdO1xuXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbmNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3RcIik7XG5cbi8vIFZpZXdcbi8vIFZpZXdcbi8vIE1haW4gZnVuY3Rpb24gdG8gcmVuZGVyXG5leHBvcnQgY29uc3QgcmVuZGVyVG9kbyA9ICh0b2RvQXJyKSA9PiB7XG4gIHRvZG9EaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICB0b2RvQXJyLmZvckVhY2goZnVuY3Rpb24gKHRvZG8pIHtcbiAgICBjb25zdCBpbmRpdmlkdWFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHRpdGxlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlTmFtZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrQm94LmRhdGFzZXQudG9kb0lkID0gdG9kby5pZDtcbiAgICBjaGVja0JveC5vbmNoYW5nZSA9IGNoYW5nZVRvZG87XG4gICAgaWYgKHRvZG8uaXNEb25lID09IHRydWUpIHtcbiAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgdGl0bGVOYW1lLnN0eWxlID0gXCJ0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja0JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gU2V0IGNvbG9yIGFjY29yZGluZyB0byBwcmlvcml0eVxuICAgIGlmICh0b2RvLnByaW9yaXR5ID09IFwiTG93XCIpIHtcbiAgICAgIGluZGl2aWR1YWxEaXYuc3R5bGUgPSBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAyLCAyMDIsIDgzLCAwLjQzOSlcIjtcbiAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT0gXCJNZWRpdW1cIikge1xuICAgICAgaW5kaXZpZHVhbERpdi5zdHlsZSA9IFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NywgMjA0LCA4NywgMC40MzkpXCI7XG4gICAgfSBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09IFwiSGlnaFwiKSB7XG4gICAgICBpbmRpdmlkdWFsRGl2LnN0eWxlID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMCwgOTQsIDk0LCAwLjQzOSlcIjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRhdGVOYW1lLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XG4gICAgZGVsZXRlQnRuLmlkID0gdG9kby5pZDtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvZG8pO1xuXG4gICAgLy8gQWRkaW5nIHRoZSBlbGVtZW50cyB0byB0aGUgcGFnZVxuICAgIGluZGl2aWR1YWxEaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIGluZGl2aWR1YWxEaXYuYXBwZW5kKHRpdGxlTmFtZSwgZGF0ZU5hbWUsIGRlbGV0ZUJ0bik7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChpbmRpdmlkdWFsRGl2KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gIH0pO1xufTtcblxuLy8gQXJjaGl0ZWN0dXJlXG4vLyBBcmNoaXRlY3R1cmVcbi8qIGFzc2lnbmluZyB2YWx1ZSBmcm9tIGxvY2FsIHN0b3JhZ2UgKi9cbmV4cG9ydCBjb25zdCBzZXRUb2RvQXJyID0gKG5ld1RvZG9BcnIpID0+IHtcbiAgdG9kb0FyciA9IG5ld1RvZG9BcnI7XG59O1xuXG5leHBvcnQgY29uc3QgdG9kYXlBcnIgPSAoKSA9PiB7XG4gIHJldHVybiB0b2RvQXJyLmZpbHRlcigodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9EYXRlID0gbmV3IERhdGUodG9kby5kYXRlKTtcbiAgICByZXR1cm4gKFxuICAgICAgdG9kb0RhdGUuZ2V0RnVsbFllYXIoKSA9PSB0b2RheS5nZXRGdWxsWWVhcigpICYmXG4gICAgICB0b2RvRGF0ZS5nZXRNb250aCgpID09IHRvZGF5LmdldE1vbnRoKCkgJiZcbiAgICAgIHRvZG9EYXRlLmdldERhdGUoKSA9PSB0b2RheS5nZXREYXRlKClcbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50V2Vla0FyciA9ICgpID0+IHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzdGFydE9mV2VlayA9IG5ldyBEYXRlKHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpIC0gdG9kYXkuZ2V0RGF5KCkpKTsgLy8gU3VuZGF5XG4gIGNvbnN0IGVuZE9mV2VlayA9IG5ldyBEYXRlKFxuICAgIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpIC0gdG9kYXkuZ2V0RGF5KCkgKyA2KVxuICApOyAvLyBTYXR1cmRheVxuXG4gIHJldHVybiB0b2RvQXJyLmZpbHRlcigodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9EYXRlID0gbmV3IERhdGUodG9kby5kYXRlKTtcbiAgICByZXR1cm4gdG9kb0RhdGUgPj0gc3RhcnRPZldlZWsgJiYgdG9kb0RhdGUgPD0gZW5kT2ZXZWVrO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wbGV0ZWRBcnIgPSAoKSA9PiB7XG4gIHJldHVybiB0b2RvQXJyLmZpbHRlcigodG9kbykgPT4gdG9kby5pc0RvbmUpO1xufTtcblxuLy8gZGVsZXRlIGZ1bnRpb25hbGl0eVxuY29uc3QgZGVsZXRlVG9kbyA9IChlKSA9PiB7XG4gIHJlbW92ZVRvZG8oZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0FyclwiLCBKU09OLnN0cmluZ2lmeSh0b2RvQXJyKSk7XG4gIHRvZG9Mb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvQXJyXCIpKTtcblxuICAvLyByZW5kZXJpbmcgYWNjb3JkaW5nIHRvIHBhZ2VcbiAgaWYgKGhlYWRlci50ZXh0Q29udGVudCA9PSBcIkluYm94XCIpIHtcbiAgICByZW5kZXJUb2RvKHRvZG9BcnIpO1xuICB9IGVsc2UgaWYgKGhlYWRlci50ZXh0Q29udGVudCA9PSBcIlRvZGF5XCIpIHtcbiAgICByZW5kZXJUb2RvKHRvZGF5QXJyKCkpO1xuICB9IGVsc2UgaWYgKGhlYWRlci50ZXh0Q29udGVudCA9PSBcIlRoaXMgV2Vla1wiKSB7XG4gICAgcmVuZGVyVG9kbyhjdXJyZW50V2Vla0FycigpKTtcbiAgfVxufTtcblxuY29uc3QgcmVtb3ZlVG9kbyA9IChlKSA9PiB7XG4gIHRvZG9BcnIgPSB0b2RvQXJyLmZpbHRlcihmdW5jdGlvbiAodG9kbykge1xuICAgIGlmICh0b2RvLmlkID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gQ2hlY2tib3ggZnVuY3Rpb25hbGl0eVxuY29uc3QgY2hhbmdlVG9kbyA9IChlKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZS50YXJnZXQ7XG5cbiAgY29uc3QgdG9kb0lkID0gY2hlY2tib3guZGF0YXNldC50b2RvSWQ7XG4gIGNvbnN0IGNoZWNrZWQgPSBjaGVja2JveC5jaGVja2VkO1xuXG4gIHRvZ2dsZVRvZG8odG9kb0lkLCBjaGVja2VkKTtcbiAgcmVuZGVyVG9kbyh0b2RvQXJyKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvQXJyXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9BcnIpKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVRvZG8gPSAodG9kb0lkLCBjaGVja2VkKSA9PiB7XG4gIHRvZG9BcnIuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09IHRvZG9JZCkge1xuICAgICAgdG9kby5pc0RvbmUgPSBjaGVja2VkO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgc2V0VG9kb0FycixcbiAgdG9kb0xvY2FsLFxuICByZW5kZXJUb2RvLFxuICBjdXJyZW50V2Vla0Fycixcbn0gZnJvbSBcIi4uL1RvZG8gQXJyYXkvdG9kb0Fyci5qc1wiO1xuaW1wb3J0IHsgaGVhZGVyLCBjb250YWluZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50LmpzXCI7XG5cbi8vIE1haW4gZnVuY3Rpb24gZm9yIEluYm94IFRhYlxuZXhwb3J0IGNvbnN0IHdlZWtUYWJGaWxlID0gKCkgPT4ge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xuICBjb250YWluZXIuYXBwZW5kKGhlYWRlcik7XG5cbiAgaWYgKHRvZG9Mb2NhbCkge1xuICAgIHNldFRvZG9BcnIodG9kb0xvY2FsKTtcbiAgICByZW5kZXJUb2RvKGN1cnJlbnRXZWVrQXJyKCkpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgaW5ib3hUYWJGaWxlIH0gZnJvbSBcIi4vQm9keS9JbmJveFRhYi9pbmJveFRhYi5qc1wiO1xuaW1wb3J0IHsgdG9kYXlUYWJGaWxlIH0gZnJvbSBcIi4vQm9keS9Ub2RheVRhYi90b2RheVRhYi5qc1wiO1xuaW1wb3J0IHsgd2Vla1RhYkZpbGUgfSBmcm9tIFwiLi9Cb2R5L1dlZWtUYWIvd2Vla1RhYi5qc1wiO1xuaW1wb3J0IHsgY29tcGxldGVkVGFiRmlsZSB9IGZyb20gXCIuL0JvZHkvQ29tcGxldGVkVGFiL2NvbXBsZXRlZFRhYi5qc1wiO1xuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb21wb25lbnQge1xuICBpbmJveFRhYigpIHtcbiAgICBpbmJveFRhYkZpbGUoKTtcbiAgfVxuXG4gIHRvZGF5VGFiKCkge1xuICAgIHRvZGF5VGFiRmlsZSgpO1xuICB9XG5cbiAgd2Vla1RhYigpIHtcbiAgICB3ZWVrVGFiRmlsZSgpO1xuICB9XG5cbiAgY29tcGxldGVkVGFiKCkge1xuICAgIGNvbXBsZXRlZFRhYkZpbGUoKTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogZm9udCAqL1xcblxcbjpyb290IHtcXG4gIC0tZGFyay1ncmF5OiAjNDEzZTNlO1xcbiAgLS1taWRsaWdodC1ncmF5OiAjYzRjM2MzO1xcbiAgLS1ob3Zlci1ncmF5OiAjOWM5OTk5O1xcbiAgLS1ib2R5LWdyYXk6ICNkZGRjZGM7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ncmF5KTtcXG4gIHBhZGRpbmctbGVmdDogMzAlO1xcbiAgcGFkZGluZy1yaWdodDogMTUlO1xcbiAgcGFkZGluZy10b3A6IDdyZW07XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIHBhZGRpbmc6IDEuNHJlbSAwIDEuNHJlbSAzcmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhlYWRlciBoMSxcXG4uaGVhZGVyIGkge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHdvcmQtc3BhY2luZzogNXB4O1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuLnNpZGUtYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDEwMnB4O1xcbiAgei1pbmRleDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGxpZ2h0LWdyYXkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiAxM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnNpZGUtYmFyIGRpdiBwIGkge1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4uc2lkZS1iYXIgZGl2IHAge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZS1iYXIgZGl2IHA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4vKiBCb2R5ICovXFxuLmNvbnRhaW5lciBoMSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuLyogSW5ib3ggVGFiICovXFxuLmFkZFRhc2sge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkbGlnaHQtZ3JheSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZFRhc2s6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWdyYXkpO1xcbn1cXG5cXG4udG9kb0xpc3Qge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnRvZG9MaXN0IGRpdiB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA4cHggNDBweCA4cHggNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG9MaXN0IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRsaWdodC1ncmF5KTtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgdG9wOiAtNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmF5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9MaXN0IGRpdjpob3ZlciAuZGVsZXRlLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG9MaXN0IGRpdiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnRvZG9MaXN0IGRpdiBwOmxhc3Qtb2YtdHlwZSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuLyogRm9ybSBTZWN0aW9uICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE5Mik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWdyYXkpO1xcbiAgd2lkdGg6IDQwcmVtO1xcbiAgcGFkZGluZzogMCAxIDJyZW0gMS40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwLjJyZW07XFxuICB0b3A6IDAuMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbmZvcm0gaDMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwIDAuNHJlbSAwLjdyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiYmI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmF5KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvU3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVM7O0FBR1Q7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dkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLCtCQUErQjtBQUNqQzs7QUFFQSwwRkFBMEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogZm9udCAqL1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWRhcmstZ3JheTogIzQxM2UzZTtcXG4gIC0tbWlkbGlnaHQtZ3JheTogI2M0YzNjMztcXG4gIC0taG92ZXItZ3JheTogIzljOTk5OTtcXG4gIC0tYm9keS1ncmF5OiAjZGRkY2RjO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktZ3JheSk7XFxuICBwYWRkaW5nLWxlZnQ6IDMwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcXG4gIHBhZGRpbmctdG9wOiA3cmVtO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBwYWRkaW5nOiAxLjRyZW0gMCAxLjRyZW0gM3JlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5oZWFkZXIgaDEsXFxuLmhlYWRlciBpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB3b3JkLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlLWJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAxMDJweDtcXG4gIHotaW5kZXg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRsaWdodC1ncmF5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMTNyZW07XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zaWRlLWJhciBkaXYgcCBpIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnNpZGUtYmFyIGRpdiBwIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGUtYmFyIGRpdiBwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWdyYXkpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyogQm9keSAqL1xcbi5jb250YWluZXIgaDEge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi8qIEluYm94IFRhYiAqL1xcbi5hZGRUYXNrIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGxpZ2h0LWdyYXkpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hZGRUYXNrOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmF5KTtcXG59XFxuXFxuLnRvZG9MaXN0IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi50b2RvTGlzdCBkaXYge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogOHB4IDQwcHggOHB4IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvTGlzdCBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkbGlnaHQtZ3JheSk7XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIHRvcDogLTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JheSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvTGlzdCBkaXY6aG92ZXIgLmRlbGV0ZS1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvTGlzdCBkaXYgcDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi50b2RvTGlzdCBkaXYgcDpsYXN0LW9mLXR5cGUge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi8qIEZvcm0gU2VjdGlvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOTIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ncmF5KTtcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIHBhZGRpbmc6IDAgMSAycmVtIDEuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMC4ycmVtO1xcbiAgdG9wOiAwLjJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuZm9ybSBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG5mb3JtIGgzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBwYWRkaW5nOiAwLjRyZW0gMCAwLjRyZW0gMC43cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLmZvcm0tY29udGVudCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYmJiO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWhvdmVyLWdyYXkpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9TdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vSnMvY29tcG9uZW50LmpzXCI7XG5cbi8vIHNob3dpbmcgcGFnZSBMYXlvdXRcbmNvbnN0IHJlbmRlciA9IG5ldyBjb21wb25lbnQoKTtcbnJlbmRlci5pbmJveFRhYigpO1xuXG4vLyBpbmJveCBidXR0b24gY2xpY2tlZFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveC1lbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZW5kZXIuaW5ib3hUYWIoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWVsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlbmRlci50b2RheVRhYigpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhpc193ZWVrLWVsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlbmRlci53ZWVrVGFiKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWQtZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVuZGVyLmNvbXBsZXRlZFRhYigpO1xufSk7XG4iXSwibmFtZXMiOlsic2V0VG9kb0FyciIsInRvZG9Mb2NhbCIsInJlbmRlclRvZG8iLCJjb21wbGV0ZWRBcnIiLCJoZWFkZXIiLCJjb250YWluZXIiLCJjb21wbGV0ZWRUYWJGaWxlIiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJ0b2RvQXJyIiwiaW5ib3hUYWJGaWxlIiwidGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJsb3dQIiwibWVkaXVtUCIsImhpZ2hQIiwicHJpb3JpdHkiLCJmb3JtIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNoZWNoUHJpb3JpdHkiLCJ2YWx1ZSIsInB1c2giLCJ1cGRhdGVGb3JtVmFsdWUiLCJjbGVhckZvcm1WYWx1ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiRm9ybVZhbHVlIiwiaWQiLCJmb3JtRGF0YSIsIkRhdGUiLCJnZXRUaW1lIiwiY2hlY2tlZCIsImFkZFRhc2tCdG4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9kYXlBcnIiLCJ0b2RheVRhYkZpbGUiLCJwYXJzZSIsImdldEl0ZW0iLCJ0b2RheSIsInRvZG9EaXYiLCJmb3JFYWNoIiwidG9kbyIsImluZGl2aWR1YWxEaXYiLCJ0aXRsZU5hbWUiLCJjaGVja0JveCIsInR5cGUiLCJkYXRhc2V0IiwidG9kb0lkIiwib25jaGFuZ2UiLCJjaGFuZ2VUb2RvIiwiaXNEb25lIiwiZGF0ZU5hbWUiLCJkZWxldGVCdG4iLCJkZWxldGVUb2RvIiwiYXBwZW5kQ2hpbGQiLCJuZXdUb2RvQXJyIiwiZmlsdGVyIiwidG9kb0RhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImN1cnJlbnRXZWVrQXJyIiwic3RhcnRPZldlZWsiLCJzZXREYXRlIiwiZ2V0RGF5IiwiZW5kT2ZXZWVrIiwiZSIsInJlbW92ZVRvZG8iLCJ0YXJnZXQiLCJjaGVja2JveCIsInRvZ2dsZVRvZG8iLCJ3ZWVrVGFiRmlsZSIsImNvbXBvbmVudCIsInJlbmRlciIsImluYm94VGFiIiwidG9kYXlUYWIiLCJ3ZWVrVGFiIiwiY29tcGxldGVkVGFiIl0sInNvdXJjZVJvb3QiOiIifQ==