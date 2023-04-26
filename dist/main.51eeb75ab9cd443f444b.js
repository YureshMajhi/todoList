/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.renderTodo)(_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_0__.filteredArr);
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
/* harmony export */   "filteredArr": () => (/* binding */ filteredArr),
/* harmony export */   "renderTodo": () => (/* binding */ renderTodo),
/* harmony export */   "setTodoArr": () => (/* binding */ setTodoArr),
/* harmony export */   "todoArr": () => (/* binding */ todoArr),
/* harmony export */   "todoLocal": () => (/* binding */ todoLocal)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component */ "./src/Js/component.js");

var todoLocal = JSON.parse(localStorage.getItem("todoArr"));
var todoArr = [];
var filteredArr = [];
var today = new Date();

/* assigning value from local storage */
function setTodoArr(newTodoArr) {
  todoArr = newTodoArr;
  filteredArr = todoArr.filter(function (todo) {
    var todoDate = new Date(todo.date);
    return todoDate.getFullYear() == today.getFullYear() && todoDate.getMonth() == today.getMonth() && todoDate.getDate() == today.getDate();
  });
}
var todoDiv = document.createElement("div");
todoDiv.classList.add("todoList");

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
var deleteTodo = function deleteTodo(e) {
  removeTodo(e);
  renderTodo(todoArr);
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MWVlYjc1YWI5Y2Q0NDNmNDQ0Yi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ0k7QUFFcEQsSUFBTUUsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDOUMsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDMUQsSUFBTUUsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDNUMsSUFBTUcsSUFBSSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDNUMsSUFBTUksT0FBTyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7QUFDbEQsSUFBTUssS0FBSyxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDOUMsSUFBSU0sUUFBUSxHQUFHLEVBQUU7O0FBRWpCO0FBQ0E7QUFDTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBSSxHQUFTO0VBQ3hCO0VBQ0FSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNRLEtBQUssR0FBRyxnQkFBZ0I7QUFDcEUsQ0FBQztBQUVEVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ1MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVDLEtBQUssRUFBRTtFQUMzRUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7O0VBRXRCO0VBQ0FDLGFBQWEsRUFBRTtFQUVmLElBQUlkLEtBQUssQ0FBQ2UsS0FBSyxJQUFJWCxJQUFJLENBQUNXLEtBQUssRUFBRTtJQUM3QmpCLDZEQUFZLENBQUNtQixlQUFlLEVBQUUsQ0FBQztFQUNqQyxDQUFDLE1BQU07SUFDTDtFQUNGO0VBRUFDLGNBQWMsRUFBRTtFQUVoQmpCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNRLEtBQUssR0FBRyxlQUFlO0VBRWpFWCxnRUFBWSxFQUFFO0VBQ2RvQixZQUFZLENBQUNDLE9BQU8sQ0FBQyxTQUFTLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDeEIsd0RBQU8sQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0EsU0FBU3lCLFNBQVMsQ0FBQ3ZCLEtBQUssRUFBRUcsV0FBVyxFQUFFQyxJQUFJLEVBQUVJLFFBQVEsRUFBRWdCLEVBQUUsRUFBRTtFQUN6RCxJQUFJLENBQUN4QixLQUFLLEdBQUdBLEtBQUs7RUFDbEIsSUFBSSxDQUFDRyxXQUFXLEdBQUdBLFdBQVc7RUFDOUIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7RUFDaEIsSUFBSSxDQUFDSSxRQUFRLEdBQUdBLFFBQVE7RUFDeEIsSUFBSSxDQUFDZ0IsRUFBRSxHQUFHQSxFQUFFO0FBQ2Q7O0FBRUE7QUFDQSxJQUFNUCxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsR0FBUztFQUM1QixJQUFJUSxRQUFRLEdBQUcsSUFBSUYsU0FBUyxDQUMxQnZCLEtBQUssQ0FBQ2UsS0FBSyxFQUNYWixXQUFXLENBQUNZLEtBQUssRUFDakJYLElBQUksQ0FBQ1csS0FBSyxFQUNWUCxRQUFRLEVBQ1IsRUFBRSxHQUFHLElBQUlrQixJQUFJLEVBQUUsQ0FBQ0MsT0FBTyxFQUFFLENBQzFCO0VBQ0QsT0FBT0YsUUFBUTtBQUNqQixDQUFDOztBQUVEO0FBQ0EsSUFBTVAsY0FBYyxHQUFHLFNBQWpCQSxjQUFjLEdBQVM7RUFDM0JsQixLQUFLLENBQUNlLEtBQUssR0FBRyxFQUFFO0VBQ2hCWixXQUFXLENBQUNZLEtBQUssR0FBRyxFQUFFO0VBQ3RCWCxJQUFJLENBQUNXLEtBQUssR0FBRyxFQUFFO0VBQ2ZWLElBQUksQ0FBQ3VCLE9BQU8sR0FBRyxLQUFLO0VBQ3BCdEIsT0FBTyxDQUFDc0IsT0FBTyxHQUFHLEtBQUs7RUFDdkJyQixLQUFLLENBQUNxQixPQUFPLEdBQUcsS0FBSztFQUNyQnBCLFFBQVEsR0FBRyxFQUFFO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBLElBQU1NLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxHQUFTO0VBQzFCLElBQUlULElBQUksQ0FBQ3VCLE9BQU8sRUFBRTtJQUNoQnBCLFFBQVEsR0FBR0gsSUFBSSxDQUFDVSxLQUFLO0VBQ3ZCLENBQUMsTUFBTSxJQUFJVCxPQUFPLENBQUNzQixPQUFPLEVBQUU7SUFDMUJwQixRQUFRLEdBQUdGLE9BQU8sQ0FBQ1MsS0FBSztFQUMxQixDQUFDLE1BQU0sSUFBSVIsS0FBSyxDQUFDcUIsT0FBTyxFQUFFO0lBQ3hCcEIsUUFBUSxHQUFHRCxLQUFLLENBQUNRLEtBQUs7RUFDeEI7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGc0M7QUFNTDtBQUNsQztBQUN1RDs7QUFFdkQ7QUFDTyxJQUFNaEIsWUFBWSxHQUFHLFNBQWZBLFlBQVksR0FBUztFQUNoQ2tDLDhEQUFtQixHQUFHLEVBQUU7RUFFeEJELDZEQUFrQixHQUFHLE9BQU87RUFFNUIsSUFBTUksVUFBVSxHQUFHbkMsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUNuREQsVUFBVSxDQUFDRCxXQUFXLEdBQUcsWUFBWTtFQUNyQ0MsVUFBVSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7O0VBRW5DO0VBQ0FOLDJEQUFnQixDQUFDRCxpREFBTSxFQUFFSSxVQUFVLENBQUM7RUFFcEMsSUFBSU4sNkRBQVMsRUFBRTtJQUNiRCxrRUFBVSxDQUFDQyw2REFBUyxDQUFDO0lBQ3JCQyxrRUFBVSxDQUFDakMsMkRBQU8sQ0FBQztFQUNyQjs7RUFFQTtFQUNBRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ1MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDdkVGLG1EQUFJLEVBQUU7RUFDUixDQUFDLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JpQztBQUNxQjs7QUFFdkQ7QUFDTyxJQUFNaUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksR0FBUztFQUNoQ1QsOERBQW1CLEdBQUcsRUFBRTtFQUV4QkQsNkRBQWtCLEdBQUcsT0FBTztFQUM1QkMsMkRBQWdCLENBQUNELGlEQUFNLENBQUM7RUFFeEIsSUFBSUYsNkRBQVMsRUFBRTtJQUNiRCxrRUFBVSxDQUFDQyw2REFBUyxDQUFDO0lBQ3JCQyxrRUFBVSxDQUFDVSwrREFBVyxDQUFDO0VBQ3pCO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMkM7QUFFckMsSUFBTVgsU0FBUyxHQUFHVCxJQUFJLENBQUNzQixLQUFLLENBQUN4QixZQUFZLENBQUN5QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDN0QsSUFBSTlDLE9BQU8sR0FBRyxFQUFFO0FBQ2hCLElBQUkyQyxXQUFXLEdBQUcsRUFBRTtBQUUzQixJQUFNSSxLQUFLLEdBQUcsSUFBSW5CLElBQUksRUFBRTs7QUFFeEI7QUFDTyxTQUFTRyxVQUFVLENBQUNpQixVQUFVLEVBQUU7RUFDckNoRCxPQUFPLEdBQUdnRCxVQUFVO0VBRXBCTCxXQUFXLEdBQUczQyxPQUFPLENBQUNpRCxNQUFNLENBQUMsVUFBQ0MsSUFBSSxFQUFLO0lBQ3JDLElBQU1DLFFBQVEsR0FBRyxJQUFJdkIsSUFBSSxDQUFDc0IsSUFBSSxDQUFDNUMsSUFBSSxDQUFDO0lBQ3BDLE9BQ0U2QyxRQUFRLENBQUNDLFdBQVcsRUFBRSxJQUFJTCxLQUFLLENBQUNLLFdBQVcsRUFBRSxJQUM3Q0QsUUFBUSxDQUFDRSxRQUFRLEVBQUUsSUFBSU4sS0FBSyxDQUFDTSxRQUFRLEVBQUUsSUFDdkNGLFFBQVEsQ0FBQ0csT0FBTyxFQUFFLElBQUlQLEtBQUssQ0FBQ08sT0FBTyxFQUFFO0VBRXpDLENBQUMsQ0FBQztBQUNKO0FBRUEsSUFBTUMsT0FBTyxHQUFHcEQsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUM3Q2dCLE9BQU8sQ0FBQ2YsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDOztBQUVqQztBQUNPLElBQU1SLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUlqQyxPQUFPLEVBQUs7RUFDckN1RCxPQUFPLENBQUNuQixTQUFTLEdBQUcsRUFBRTtFQUV0QnBDLE9BQU8sQ0FBQ3dELE9BQU8sQ0FBQyxVQUFVTixJQUFJLEVBQUU7SUFDOUIsSUFBTU8sYUFBYSxHQUFHdEQsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUVuRCxJQUFNbUIsU0FBUyxHQUFHdkQsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUM3Q21CLFNBQVMsQ0FBQ3JCLFdBQVcsR0FBR2EsSUFBSSxDQUFDaEQsS0FBSztJQUVsQyxJQUFNeUQsUUFBUSxHQUFHeEQsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUNoRG9CLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFVBQVU7SUFDMUJELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDQyxNQUFNLEdBQUdaLElBQUksQ0FBQ3hCLEVBQUU7SUFDakNpQyxRQUFRLENBQUNJLFFBQVEsR0FBR0MsVUFBVTtJQUM5QixJQUFJZCxJQUFJLENBQUNlLE1BQU0sSUFBSSxJQUFJLEVBQUU7TUFDdkJOLFFBQVEsQ0FBQzdCLE9BQU8sR0FBRyxJQUFJO01BQ3ZCNEIsU0FBUyxDQUFDOUMsS0FBSyxHQUFHLCtCQUErQjtJQUNuRCxDQUFDLE1BQU07TUFDTCtDLFFBQVEsQ0FBQzdCLE9BQU8sR0FBRyxLQUFLO0lBQzFCOztJQUVBO0lBQ0EsSUFBSW9CLElBQUksQ0FBQ3hDLFFBQVEsSUFBSSxLQUFLLEVBQUU7TUFDMUIrQyxhQUFhLENBQUM3QyxLQUFLLEdBQUcsNkNBQTZDO0lBQ3JFLENBQUMsTUFBTSxJQUFJc0MsSUFBSSxDQUFDeEMsUUFBUSxJQUFJLFFBQVEsRUFBRTtNQUNwQytDLGFBQWEsQ0FBQzdDLEtBQUssR0FBRyw0Q0FBNEM7SUFDcEUsQ0FBQyxNQUFNLElBQUlzQyxJQUFJLENBQUN4QyxRQUFRLElBQUksTUFBTSxFQUFFO01BQ2xDK0MsYUFBYSxDQUFDN0MsS0FBSyxHQUFHLDRDQUE0QztJQUNwRTtJQUVBLElBQU1zRCxRQUFRLEdBQUcvRCxRQUFRLENBQUNvQyxhQUFhLENBQUMsR0FBRyxDQUFDO0lBQzVDMkIsUUFBUSxDQUFDN0IsV0FBVyxHQUFHYSxJQUFJLENBQUM1QyxJQUFJO0lBRWhDLElBQU02RCxTQUFTLEdBQUdoRSxRQUFRLENBQUNvQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ2xENEIsU0FBUyxDQUFDOUIsV0FBVyxHQUFHLEdBQUc7SUFDM0I4QixTQUFTLENBQUMzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDckMwQixTQUFTLENBQUN6QyxFQUFFLEdBQUd3QixJQUFJLENBQUN4QixFQUFFO0lBQ3RCeUMsU0FBUyxDQUFDdEQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFdUQsVUFBVSxDQUFDOztJQUUvQztJQUNBWCxhQUFhLENBQUNZLFdBQVcsQ0FBQ1YsUUFBUSxDQUFDO0lBQ25DRixhQUFhLENBQUNmLE1BQU0sQ0FBQ2dCLFNBQVMsRUFBRVEsUUFBUSxFQUFFQyxTQUFTLENBQUM7SUFDcERaLE9BQU8sQ0FBQ2MsV0FBVyxDQUFDWixhQUFhLENBQUM7SUFDbEN0Qiw2REFBcUIsQ0FBQ29CLE9BQU8sQ0FBQztFQUNoQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBTWEsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSUUsQ0FBQyxFQUFLO0VBQ3hCQyxVQUFVLENBQUNELENBQUMsQ0FBQztFQUNickMsVUFBVSxDQUFDakMsT0FBTyxDQUFDO0VBQ25CcUIsWUFBWSxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3hCLE9BQU8sQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFFRCxJQUFNdUUsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSUQsQ0FBQyxFQUFLO0VBQ3hCdEUsT0FBTyxHQUFHQSxPQUFPLENBQUNpRCxNQUFNLENBQUMsVUFBVUMsSUFBSSxFQUFFO0lBQ3ZDLElBQUlBLElBQUksQ0FBQ3hCLEVBQUUsS0FBSzRDLENBQUMsQ0FBQ0UsTUFBTSxDQUFDOUMsRUFBRSxFQUFFO01BQzNCLE9BQU8sS0FBSztJQUNkLENBQUMsTUFBTTtNQUNMLE9BQU8sSUFBSTtJQUNiO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELElBQU1zQyxVQUFVLEdBQUcsU0FBYkEsVUFBVSxDQUFJTSxDQUFDLEVBQUs7RUFDeEIsSUFBTUcsUUFBUSxHQUFHSCxDQUFDLENBQUNFLE1BQU07RUFFekIsSUFBTVYsTUFBTSxHQUFHVyxRQUFRLENBQUNaLE9BQU8sQ0FBQ0MsTUFBTTtFQUN0QyxJQUFNaEMsT0FBTyxHQUFHMkMsUUFBUSxDQUFDM0MsT0FBTztFQUVoQzRDLFVBQVUsQ0FBQ1osTUFBTSxFQUFFaEMsT0FBTyxDQUFDO0VBQzNCRyxVQUFVLENBQUNqQyxPQUFPLENBQUM7RUFDbkJxQixZQUFZLENBQUNDLE9BQU8sQ0FBQyxTQUFTLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDeEIsT0FBTyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVELElBQU0wRSxVQUFVLEdBQUcsU0FBYkEsVUFBVSxDQUFJWixNQUFNLEVBQUVoQyxPQUFPLEVBQUs7RUFDdEM5QixPQUFPLENBQUN3RCxPQUFPLENBQUMsVUFBQ04sSUFBSSxFQUFLO0lBQ3hCLElBQUlBLElBQUksQ0FBQ3hCLEVBQUUsSUFBSW9DLE1BQU0sRUFBRTtNQUNyQlosSUFBSSxDQUFDZSxNQUFNLEdBQUduQyxPQUFPO0lBQ3ZCO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekcwRDtBQUNBO0FBRXBELElBQU1LLFNBQVMsR0FBR2hDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUN0RCxJQUFNOEIsTUFBTSxHQUFHL0IsUUFBUSxDQUFDb0MsYUFBYSxDQUFDLElBQUksQ0FBQztBQUFDLElBRTlCb0MsU0FBUztFQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUM1QixvQkFBVztNQUNUMUUsd0VBQVksRUFBRTtJQUNoQjtFQUFDO0lBQUE7SUFBQSxPQUVELG9CQUFXO01BQ1QyQyx3RUFBWSxFQUFFO0lBQ2hCO0VBQUM7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkg7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixnSEFBZ0gsSUFBSSxrQkFBa0I7QUFDdEk7QUFDQSwrREFBK0QseUJBQXlCLDZCQUE2QiwwQkFBMEIseUJBQXlCLEdBQUcsT0FBTyxjQUFjLGVBQWUseUNBQXlDLEdBQUcsVUFBVSx1Q0FBdUMsc0JBQXNCLHVCQUF1QixzQkFBc0IsR0FBRywyQkFBMkIsdUNBQXVDLGtDQUFrQyxvQkFBb0IsV0FBVyxhQUFhLFlBQVksZUFBZSxHQUFHLDRCQUE0QixvQkFBb0IsaUJBQWlCLHFCQUFxQixzQkFBc0Isd0JBQXdCLHNCQUFzQixHQUFHLGdCQUFnQix5QkFBeUIsR0FBRyw4QkFBOEIsb0JBQW9CLGNBQWMsWUFBWSxlQUFlLGVBQWUsMkNBQTJDLGtCQUFrQixpQkFBaUIsNEJBQTRCLHFCQUFxQixHQUFHLHVCQUF1QiwwQkFBMEIsR0FBRyxxQkFBcUIseUJBQXlCLHVCQUF1QixxQkFBcUIsb0JBQW9CLEdBQUcsMkJBQTJCLHdDQUF3QyxxQkFBcUIsR0FBRywrQkFBK0IsNEJBQTRCLEdBQUcsK0JBQStCLHFCQUFxQixnQkFBZ0IseUJBQXlCLHFCQUFxQixpQkFBaUIsdUJBQXVCLDJDQUEyQyw0QkFBNEIsb0JBQW9CLG9CQUFvQixHQUFHLG9CQUFvQixxQkFBcUIsd0NBQXdDLEdBQUcsZUFBZSxxQkFBcUIsR0FBRyxtQkFBbUIsbUJBQW1CLGtCQUFrQixtQ0FBbUMsK0JBQStCLHVCQUF1Qix1QkFBdUIsR0FBRyx5QkFBeUIsMkNBQTJDLEdBQUcsaUJBQWlCLHVCQUF1QixpQkFBaUIsY0FBYyx1QkFBdUIsbUJBQW1CLGtCQUFrQix1Q0FBdUMsdUNBQXVDLGlCQUFpQixxQkFBcUIsb0JBQW9CLG9CQUFvQixrQkFBa0IsR0FBRyxxQ0FBcUMsbUJBQW1CLEdBQUcsbUNBQW1DLHFCQUFxQixHQUFHLGdDQUFnQyw0QkFBNEIsR0FBRyx5Q0FBeUMsa0JBQWtCLHVCQUF1QixZQUFZLFdBQVcsMkNBQTJDLGtCQUFrQixpQkFBaUIsR0FBRyxVQUFVLHVCQUF1QixjQUFjLGFBQWEscUNBQXFDLGlCQUFpQix1Q0FBdUMsaUJBQWlCLDZCQUE2Qix3QkFBd0IscUJBQXFCLEdBQUcsaUJBQWlCLHVCQUF1QixrQkFBa0IsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLHVCQUF1Qiw0QkFBNEIsaUJBQWlCLHNCQUFzQixvQkFBb0IsMkNBQTJDLEdBQUcsdUJBQXVCLDBCQUEwQixHQUFHLGFBQWEsdUNBQXVDLG9DQUFvQyxpQkFBaUIscUJBQXFCLDBCQUEwQixHQUFHLG1CQUFtQixrQ0FBa0MsR0FBRyxVQUFVLDRCQUE0QixHQUFHLDhEQUE4RCxnQkFBZ0IsMkJBQTJCLGlCQUFpQixHQUFHLDJCQUEyQixzQkFBc0IsR0FBRyxzQkFBc0IsMEJBQTBCLEdBQUcsOEJBQThCLDZCQUE2QiwwQkFBMEIscUJBQXFCLHVCQUF1QixlQUFlLHVCQUF1QixnQkFBZ0IsaUJBQWlCLDJCQUEyQixrQkFBa0Isb0JBQW9CLDJDQUEyQyxHQUFHLG9DQUFvQyx3Q0FBd0Msb0NBQW9DLEdBQUcsd0dBQXdHLDRGQUE0RixLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxvSEFBb0gsSUFBSSxvQkFBb0IsV0FBVyx5QkFBeUIsNkJBQTZCLDBCQUEwQix5QkFBeUIsR0FBRyxPQUFPLGNBQWMsZUFBZSx5Q0FBeUMsR0FBRyxVQUFVLHVDQUF1QyxzQkFBc0IsdUJBQXVCLHNCQUFzQixHQUFHLDJCQUEyQix1Q0FBdUMsa0NBQWtDLG9CQUFvQixXQUFXLGFBQWEsWUFBWSxlQUFlLEdBQUcsNEJBQTRCLG9CQUFvQixpQkFBaUIscUJBQXFCLHNCQUFzQix3QkFBd0Isc0JBQXNCLEdBQUcsZ0JBQWdCLHlCQUF5QixHQUFHLDhCQUE4QixvQkFBb0IsY0FBYyxZQUFZLGVBQWUsZUFBZSwyQ0FBMkMsa0JBQWtCLGlCQUFpQiw0QkFBNEIscUJBQXFCLEdBQUcsdUJBQXVCLDBCQUEwQixHQUFHLHFCQUFxQix5QkFBeUIsdUJBQXVCLHFCQUFxQixvQkFBb0IsR0FBRywyQkFBMkIsd0NBQXdDLHFCQUFxQixHQUFHLCtCQUErQiw0QkFBNEIsR0FBRywrQkFBK0IscUJBQXFCLGdCQUFnQix5QkFBeUIscUJBQXFCLGlCQUFpQix1QkFBdUIsMkNBQTJDLDRCQUE0QixvQkFBb0Isb0JBQW9CLEdBQUcsb0JBQW9CLHFCQUFxQix3Q0FBd0MsR0FBRyxlQUFlLHFCQUFxQixHQUFHLG1CQUFtQixtQkFBbUIsa0JBQWtCLG1DQUFtQywrQkFBK0IsdUJBQXVCLHVCQUF1QixHQUFHLHlCQUF5QiwyQ0FBMkMsR0FBRyxpQkFBaUIsdUJBQXVCLGlCQUFpQixjQUFjLHVCQUF1QixtQkFBbUIsa0JBQWtCLHVDQUF1Qyx1Q0FBdUMsaUJBQWlCLHFCQUFxQixvQkFBb0Isb0JBQW9CLGtCQUFrQixHQUFHLHFDQUFxQyxtQkFBbUIsR0FBRyxtQ0FBbUMscUJBQXFCLEdBQUcsZ0NBQWdDLDRCQUE0QixHQUFHLHlDQUF5QyxrQkFBa0IsdUJBQXVCLFlBQVksV0FBVywyQ0FBMkMsa0JBQWtCLGlCQUFpQixHQUFHLFVBQVUsdUJBQXVCLGNBQWMsYUFBYSxxQ0FBcUMsaUJBQWlCLHVDQUF1QyxpQkFBaUIsNkJBQTZCLHdCQUF3QixxQkFBcUIsR0FBRyxpQkFBaUIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixpQkFBaUIsdUJBQXVCLDRCQUE0QixpQkFBaUIsc0JBQXNCLG9CQUFvQiwyQ0FBMkMsR0FBRyx1QkFBdUIsMEJBQTBCLEdBQUcsYUFBYSx1Q0FBdUMsb0NBQW9DLGlCQUFpQixxQkFBcUIsMEJBQTBCLEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLFVBQVUsNEJBQTRCLEdBQUcsOERBQThELGdCQUFnQiwyQkFBMkIsaUJBQWlCLEdBQUcsMkJBQTJCLHNCQUFzQixHQUFHLHNCQUFzQiwwQkFBMEIsR0FBRyw4QkFBOEIsNkJBQTZCLDBCQUEwQixxQkFBcUIsdUJBQXVCLGVBQWUsdUJBQXVCLGdCQUFnQixpQkFBaUIsMkJBQTJCLGtCQUFrQixvQkFBb0IsMkNBQTJDLEdBQUcsb0NBQW9DLHdDQUF3QyxvQ0FBb0MsR0FBRyxvSEFBb0g7QUFDcjFVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUscUZBQU8sSUFBSSw0RkFBYyxHQUFHLDRGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDSTs7QUFFMUM7QUFDQSxJQUFNZ0MsTUFBTSxHQUFHLElBQUlELHdEQUFTLEVBQUU7QUFDOUJDLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFOztBQUVqQjtBQUNBMUUsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQ3hFK0QsTUFBTSxDQUFDQyxRQUFRLEVBQUU7QUFDbkIsQ0FBQyxDQUFDO0FBRUYxRSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ1MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDeEUrRCxNQUFNLENBQUNFLFFBQVEsRUFBRTtBQUNuQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pzL0JvZHkvRm9ybS9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pzL0JvZHkvSW5ib3hUYWIvaW5ib3hUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSnMvQm9keS9Ub2RheVRhYi90b2RheVRhYi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Kcy9Cb2R5L1RvZG8gQXJyYXkvdG9kb0Fyci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Kcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvU3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1N0eWxlcy9tYWluLmNzcz80ZWQ3Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2RvQXJyIH0gZnJvbSBcIi4uL1RvZG8gQXJyYXkvdG9kb0FyclwiO1xuaW1wb3J0IHsgaW5ib3hUYWJGaWxlIH0gZnJvbSBcIi4uL0luYm94VGFiL2luYm94VGFiXCI7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG5jb25zdCBsb3dQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb3dQXCIpO1xuY29uc3QgbWVkaXVtUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVkaXVtUFwiKTtcbmNvbnN0IGhpZ2hQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdoUFwiKTtcbmxldCBwcmlvcml0eSA9IFwiXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRpbmcgZm9ybSBpbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gIC8vIERpc3BsYXlpbmcgdGhlIGZvcm1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKS5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2tcIjtcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBDaGVjayB3aGljaCByYWRpbyBidXR0b24gaXMgY2hlY2tlZFxuICBjaGVjaFByaW9yaXR5KCk7XG5cbiAgaWYgKHRpdGxlLnZhbHVlICYmIGRhdGUudmFsdWUpIHtcbiAgICB0b2RvQXJyLnB1c2godXBkYXRlRm9ybVZhbHVlKCkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNsZWFyRm9ybVZhbHVlKCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKS5zdHlsZSA9IFwiZGlzcGxheTogbm9uZVwiO1xuXG4gIGluYm94VGFiRmlsZSgpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9BcnJcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0FycikpO1xufSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU3RvcmluZyB2YWx1ZXMgaW4gYSBjb25zdHJ1Y3RvclxuZnVuY3Rpb24gRm9ybVZhbHVlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGlkKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMuaWQgPSBpZDtcbn1cblxuLy8gVXBkYXRpbmcgdGhlIGZvcm0gdmFsdWUgdXNpbmcgY29uc3RydWN0b3JcbmNvbnN0IHVwZGF0ZUZvcm1WYWx1ZSA9ICgpID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1WYWx1ZShcbiAgICB0aXRsZS52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICBkYXRlLnZhbHVlLFxuICAgIHByaW9yaXR5LFxuICAgIFwiXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICApO1xuICByZXR1cm4gZm9ybURhdGE7XG59O1xuXG4vLyBDbGVhcmluZyB0aGUgZm9ybSB2YWx1ZVxuY29uc3QgY2xlYXJGb3JtVmFsdWUgPSAoKSA9PiB7XG4gIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICBkYXRlLnZhbHVlID0gXCJcIjtcbiAgbG93UC5jaGVja2VkID0gZmFsc2U7XG4gIG1lZGl1bVAuY2hlY2tlZCA9IGZhbHNlO1xuICBoaWdoUC5jaGVja2VkID0gZmFsc2U7XG4gIHByaW9yaXR5ID0gXCJcIjtcbn07XG5cbi8vIGNoZWNraW5nIHByaW9yaXR5XG5jb25zdCBjaGVjaFByaW9yaXR5ID0gKCkgPT4ge1xuICBpZiAobG93UC5jaGVja2VkKSB7XG4gICAgcHJpb3JpdHkgPSBsb3dQLnZhbHVlO1xuICB9IGVsc2UgaWYgKG1lZGl1bVAuY2hlY2tlZCkge1xuICAgIHByaW9yaXR5ID0gbWVkaXVtUC52YWx1ZTtcbiAgfSBlbHNlIGlmIChoaWdoUC5jaGVja2VkKSB7XG4gICAgcHJpb3JpdHkgPSBoaWdoUC52YWx1ZTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tIFwiLi4vRm9ybS9mb3JtLmpzXCI7XG5pbXBvcnQge1xuICBzZXRUb2RvQXJyLFxuICB0b2RvTG9jYWwsXG4gIHRvZG9BcnIsXG4gIHJlbmRlclRvZG8sXG59IGZyb20gXCIuLi9Ub2RvIEFycmF5L3RvZG9BcnIuanNcIjtcbi8vIGltcG9ydCB7IHJlbmRlclRvZG8gfSBmcm9tIFwiLi4vcmVuZGVyVG9kby9yZW5kZXJUb2RvLmpzXCI7XG5pbXBvcnQgeyBoZWFkZXIsIGNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnQuanNcIjtcblxuLy8gTWFpbiBmdW5jdGlvbiBmb3IgSW5ib3ggVGFiXG5leHBvcnQgY29uc3QgaW5ib3hUYWJGaWxlID0gKCkgPT4ge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG5cbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIisgQWRkIHRhc2tcIjtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKTtcblxuICAvLyBBcHBlbmRpbmcgdGhlIGhlYWRlciBhbmQgdGhlIGJ1dHRvbiBpbiB0aGUgY29udGFpbmVyXG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBhZGRUYXNrQnRuKTtcblxuICBpZiAodG9kb0xvY2FsKSB7XG4gICAgc2V0VG9kb0Fycih0b2RvTG9jYWwpO1xuICAgIHJlbmRlclRvZG8odG9kb0Fycik7XG4gIH1cblxuICAvLyBBZGQgdGFzayBidXR0b24gY2xpY2tlZFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JtKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIHNldFRvZG9BcnIsXG4gIHRvZG9Mb2NhbCxcbiAgZmlsdGVyZWRBcnIsXG4gIHJlbmRlclRvZG8sXG59IGZyb20gXCIuLi9Ub2RvIEFycmF5L3RvZG9BcnIuanNcIjtcbmltcG9ydCB7IGhlYWRlciwgY29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudC5qc1wiO1xuXG4vLyBNYWluIGZ1bmN0aW9uIGZvciBJbmJveCBUYWJcbmV4cG9ydCBjb25zdCB0b2RheVRhYkZpbGUgPSAoKSA9PiB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgY29udGFpbmVyLmFwcGVuZChoZWFkZXIpO1xuXG4gIGlmICh0b2RvTG9jYWwpIHtcbiAgICBzZXRUb2RvQXJyKHRvZG9Mb2NhbCk7XG4gICAgcmVuZGVyVG9kbyhmaWx0ZXJlZEFycik7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCB0b2RvTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FyclwiKSk7XG5leHBvcnQgbGV0IHRvZG9BcnIgPSBbXTtcbmV4cG9ydCBsZXQgZmlsdGVyZWRBcnIgPSBbXTtcblxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4vKiBhc3NpZ25pbmcgdmFsdWUgZnJvbSBsb2NhbCBzdG9yYWdlICovXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9kb0FycihuZXdUb2RvQXJyKSB7XG4gIHRvZG9BcnIgPSBuZXdUb2RvQXJyO1xuXG4gIGZpbHRlcmVkQXJyID0gdG9kb0Fyci5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IG5ldyBEYXRlKHRvZG8uZGF0ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIHRvZG9EYXRlLmdldEZ1bGxZZWFyKCkgPT0gdG9kYXkuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgdG9kb0RhdGUuZ2V0TW9udGgoKSA9PSB0b2RheS5nZXRNb250aCgpICYmXG4gICAgICB0b2RvRGF0ZS5nZXREYXRlKCkgPT0gdG9kYXkuZ2V0RGF0ZSgpXG4gICAgKTtcbiAgfSk7XG59XG5cbmNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3RcIik7XG5cbi8vIE1haW4gZnVuY3Rpb24gdG8gcmVuZGVyXG5leHBvcnQgY29uc3QgcmVuZGVyVG9kbyA9ICh0b2RvQXJyKSA9PiB7XG4gIHRvZG9EaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICB0b2RvQXJyLmZvckVhY2goZnVuY3Rpb24gKHRvZG8pIHtcbiAgICBjb25zdCBpbmRpdmlkdWFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHRpdGxlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlTmFtZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrQm94LmRhdGFzZXQudG9kb0lkID0gdG9kby5pZDtcbiAgICBjaGVja0JveC5vbmNoYW5nZSA9IGNoYW5nZVRvZG87XG4gICAgaWYgKHRvZG8uaXNEb25lID09IHRydWUpIHtcbiAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgdGl0bGVOYW1lLnN0eWxlID0gXCJ0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja0JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gU2V0IGNvbG9yIGFjY29yZGluZyB0byBwcmlvcml0eVxuICAgIGlmICh0b2RvLnByaW9yaXR5ID09IFwiTG93XCIpIHtcbiAgICAgIGluZGl2aWR1YWxEaXYuc3R5bGUgPSBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAyLCAyMDIsIDgzLCAwLjQzOSlcIjtcbiAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT0gXCJNZWRpdW1cIikge1xuICAgICAgaW5kaXZpZHVhbERpdi5zdHlsZSA9IFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NywgMjA0LCA4NywgMC40MzkpXCI7XG4gICAgfSBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09IFwiSGlnaFwiKSB7XG4gICAgICBpbmRpdmlkdWFsRGl2LnN0eWxlID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMCwgOTQsIDk0LCAwLjQzOSlcIjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRhdGVOYW1lLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XG4gICAgZGVsZXRlQnRuLmlkID0gdG9kby5pZDtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvZG8pO1xuXG4gICAgLy8gQWRkaW5nIHRoZSBlbGVtZW50cyB0byB0aGUgcGFnZVxuICAgIGluZGl2aWR1YWxEaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIGluZGl2aWR1YWxEaXYuYXBwZW5kKHRpdGxlTmFtZSwgZGF0ZU5hbWUsIGRlbGV0ZUJ0bik7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChpbmRpdmlkdWFsRGl2KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gIH0pO1xufTtcblxuY29uc3QgZGVsZXRlVG9kbyA9IChlKSA9PiB7XG4gIHJlbW92ZVRvZG8oZSk7XG4gIHJlbmRlclRvZG8odG9kb0Fycik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0FyclwiLCBKU09OLnN0cmluZ2lmeSh0b2RvQXJyKSk7XG59O1xuXG5jb25zdCByZW1vdmVUb2RvID0gKGUpID0+IHtcbiAgdG9kb0FyciA9IHRvZG9BcnIuZmlsdGVyKGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgaWYgKHRvZG8uaWQgPT09IGUudGFyZ2V0LmlkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjaGFuZ2VUb2RvID0gKGUpID0+IHtcbiAgY29uc3QgY2hlY2tib3ggPSBlLnRhcmdldDtcblxuICBjb25zdCB0b2RvSWQgPSBjaGVja2JveC5kYXRhc2V0LnRvZG9JZDtcbiAgY29uc3QgY2hlY2tlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XG5cbiAgdG9nZ2xlVG9kbyh0b2RvSWQsIGNoZWNrZWQpO1xuICByZW5kZXJUb2RvKHRvZG9BcnIpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9BcnJcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0FycikpO1xufTtcblxuY29uc3QgdG9nZ2xlVG9kbyA9ICh0b2RvSWQsIGNoZWNrZWQpID0+IHtcbiAgdG9kb0Fyci5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgaWYgKHRvZG8uaWQgPT0gdG9kb0lkKSB7XG4gICAgICB0b2RvLmlzRG9uZSA9IGNoZWNrZWQ7XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBpbmJveFRhYkZpbGUgfSBmcm9tIFwiLi9Cb2R5L0luYm94VGFiL2luYm94VGFiLmpzXCI7XG5pbXBvcnQgeyB0b2RheVRhYkZpbGUgfSBmcm9tIFwiLi9Cb2R5L1RvZGF5VGFiL3RvZGF5VGFiLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbmV4cG9ydCBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbXBvbmVudCB7XG4gIGluYm94VGFiKCkge1xuICAgIGluYm94VGFiRmlsZSgpO1xuICB9XG5cbiAgdG9kYXlUYWIoKSB7XG4gICAgdG9kYXlUYWJGaWxlKCk7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGZvbnQgKi9cXG5cXG46cm9vdCB7XFxuICAtLWRhcmstZ3JheTogIzQxM2UzZTtcXG4gIC0tbWlkbGlnaHQtZ3JheTogI2M0YzNjMztcXG4gIC0taG92ZXItZ3JheTogIzljOTk5OTtcXG4gIC0tYm9keS1ncmF5OiAjZGRkY2RjO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktZ3JheSk7XFxuICBwYWRkaW5nLWxlZnQ6IDMwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcXG4gIHBhZGRpbmctdG9wOiA3cmVtO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBwYWRkaW5nOiAxLjRyZW0gMCAxLjRyZW0gM3JlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5oZWFkZXIgaDEsXFxuLmhlYWRlciBpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB3b3JkLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlLWJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAxMDJweDtcXG4gIHotaW5kZXg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRsaWdodC1ncmF5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMTNyZW07XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zaWRlLWJhciBkaXYgcCBpIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnNpZGUtYmFyIGRpdiBwIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGUtYmFyIGRpdiBwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWdyYXkpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyogQm9keSAqL1xcbi5jb250YWluZXIgaDEge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi8qIEluYm94IFRhYiAqL1xcbi5hZGRUYXNrIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGxpZ2h0LWdyYXkpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hZGRUYXNrOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmF5KTtcXG59XFxuXFxuLnRvZG9MaXN0IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi50b2RvTGlzdCBkaXYge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogOHB4IDQwcHggOHB4IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvTGlzdCBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkbGlnaHQtZ3JheSk7XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIHRvcDogLTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JheSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvTGlzdCBkaXY6aG92ZXIgLmRlbGV0ZS1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvTGlzdCBkaXYgcDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi50b2RvTGlzdCBkaXYgcDpsYXN0LW9mLXR5cGUge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi8qIEZvcm0gU2VjdGlvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOTIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ncmF5KTtcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIHBhZGRpbmc6IDAgMSAycmVtIDEuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMC4ycmVtO1xcbiAgdG9wOiAwLjJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuZm9ybSBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG5mb3JtIGgzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBwYWRkaW5nOiAwLjRyZW0gMCAwLjRyZW0gMC43cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLmZvcm0tY29udGVudCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYmJiO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWhvdmVyLWdyYXkpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFTOztBQUdUO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0NBQWtDO0VBQ2xDLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtBQUNaOztBQUVBOztFQUVFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBLFlBQVk7QUFDWjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFVBQVU7RUFDVixVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBQ2xCOztBQUVBLFNBQVM7QUFDVDtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7QUFDakM7O0FBRUEsMEZBQTBGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGZvbnQgKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrLWdyYXk6ICM0MTNlM2U7XFxuICAtLW1pZGxpZ2h0LWdyYXk6ICNjNGMzYzM7XFxuICAtLWhvdmVyLWdyYXk6ICM5Yzk5OTk7XFxuICAtLWJvZHktZ3JheTogI2RkZGNkYztcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWdyYXkpO1xcbiAgcGFkZGluZy1sZWZ0OiAzMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XFxuICBwYWRkaW5nLXRvcDogN3JlbTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgcGFkZGluZzogMS40cmVtIDAgMS40cmVtIDNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGVhZGVyIGgxLFxcbi5oZWFkZXIgaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgd29yZC1zcGFjaW5nOiA1cHg7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4uc2lkZS1iYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMTAycHg7XFxuICB6LWluZGV4OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkbGlnaHQtZ3JheSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDEzcmVtO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uc2lkZS1iYXIgZGl2IHAgaSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5zaWRlLWJhciBkaXYgcCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLWJhciBkaXYgcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmF5KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi8qIEJvZHkgKi9cXG4uY29udGFpbmVyIGgxIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbn1cXG5cXG4vKiBJbmJveCBUYWIgKi9cXG4uYWRkVGFzayB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRsaWdodC1ncmF5KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkVGFzazpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxufVxcblxcbi50b2RvTGlzdCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2IHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDhweCA0MHB4IDhweCA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTEwcHg7XFxuICB0b3A6IC01cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2OmhvdmVyIC5kZWxldGUtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4udG9kb0xpc3QgZGl2IHA6bGFzdC1vZi10eXBlIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbn1cXG5cXG4vKiBGb3JtIFNlY3Rpb24gKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTkyKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktZ3JheSk7XFxuICB3aWR0aDogNDByZW07XFxuICBwYWRkaW5nOiAwIDEgMnJlbSAxLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDAuMnJlbTtcXG4gIHRvcDogMC4ycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuZm9ybSBoMyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgcGFkZGluZzogMC40cmVtIDAgMC40cmVtIDAuN3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbSAxcmVtIDFyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2JiYjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWdyYXkpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmF5KTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vU3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL0pzL2NvbXBvbmVudC5qc1wiO1xuXG4vLyBzaG93aW5nIHBhZ2UgTGF5b3V0XG5jb25zdCByZW5kZXIgPSBuZXcgY29tcG9uZW50KCk7XG5yZW5kZXIuaW5ib3hUYWIoKTtcblxuLy8gaW5ib3ggYnV0dG9uIGNsaWNrZWRcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3gtZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVuZGVyLmluYm94VGFiKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS1lbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZW5kZXIudG9kYXlUYWIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbInRvZG9BcnIiLCJpbmJveFRhYkZpbGUiLCJ0aXRsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImxvd1AiLCJtZWRpdW1QIiwiaGlnaFAiLCJwcmlvcml0eSIsImZvcm0iLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2hlY2hQcmlvcml0eSIsInZhbHVlIiwicHVzaCIsInVwZGF0ZUZvcm1WYWx1ZSIsImNsZWFyRm9ybVZhbHVlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJGb3JtVmFsdWUiLCJpZCIsImZvcm1EYXRhIiwiRGF0ZSIsImdldFRpbWUiLCJjaGVja2VkIiwic2V0VG9kb0FyciIsInRvZG9Mb2NhbCIsInJlbmRlclRvZG8iLCJoZWFkZXIiLCJjb250YWluZXIiLCJpbm5lckhUTUwiLCJ0ZXh0Q29udGVudCIsImFkZFRhc2tCdG4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiZmlsdGVyZWRBcnIiLCJ0b2RheVRhYkZpbGUiLCJwYXJzZSIsImdldEl0ZW0iLCJ0b2RheSIsIm5ld1RvZG9BcnIiLCJmaWx0ZXIiLCJ0b2RvIiwidG9kb0RhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInRvZG9EaXYiLCJmb3JFYWNoIiwiaW5kaXZpZHVhbERpdiIsInRpdGxlTmFtZSIsImNoZWNrQm94IiwidHlwZSIsImRhdGFzZXQiLCJ0b2RvSWQiLCJvbmNoYW5nZSIsImNoYW5nZVRvZG8iLCJpc0RvbmUiLCJkYXRlTmFtZSIsImRlbGV0ZUJ0biIsImRlbGV0ZVRvZG8iLCJhcHBlbmRDaGlsZCIsImUiLCJyZW1vdmVUb2RvIiwidGFyZ2V0IiwiY2hlY2tib3giLCJ0b2dnbGVUb2RvIiwiY29tcG9uZW50IiwicmVuZGVyIiwiaW5ib3hUYWIiLCJ0b2RheVRhYiJdLCJzb3VyY2VSb290IjoiIn0=