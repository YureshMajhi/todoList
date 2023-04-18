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

  // Rendering the new todo in the page
  (0,_Todo_Array_todoArr__WEBPACK_IMPORTED_MODULE_0__.renderTodo)();
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
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "inboxTabFile": () => (/* binding */ inboxTabFile)
/* harmony export */ });
/* harmony import */ var _Form_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Form/form.js */ "./src/Js/Body/Form/form.js");
/* harmony import */ var _Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Todo Array/todoArr.js */ "./src/Js/Body/Todo Array/todoArr.js");


var container = document.querySelector(".container");

// Main function for Inbox Tab
var inboxTabFile = function inboxTabFile() {
  container.innerHTML = "";
  var header = document.createElement("h1");
  header.textContent = "Inbox";
  var addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "+ Add task";
  addTaskBtn.classList.add("addTask");

  // Appending the header and the button in the container
  container.append(header, addTaskBtn);

  /* if local storage exists then rendering todo from local storage
     by assigning the value of todoArr to todoLocal in its own
     function page
  */
  if (_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__.todoLocal) {
    (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__.setTodoArr)(_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__.todoLocal);
    (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__.renderTodo)();
  }

  // Add task button clicked
  document.querySelector(".addTask").addEventListener("click", function () {
    (0,_Form_form_js__WEBPACK_IMPORTED_MODULE_0__.form)();
  });
};

/***/ }),

/***/ "./src/Js/Body/Todo Array/todoArr.js":
/*!*******************************************!*\
  !*** ./src/Js/Body/Todo Array/todoArr.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTodo": () => (/* binding */ renderTodo),
/* harmony export */   "setTodoArr": () => (/* binding */ setTodoArr),
/* harmony export */   "todoArr": () => (/* binding */ todoArr),
/* harmony export */   "todoLocal": () => (/* binding */ todoLocal)
/* harmony export */ });
/* harmony import */ var _InboxTab_inboxTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InboxTab/inboxTab */ "./src/Js/Body/InboxTab/inboxTab.js");

var todoArr = [];
var todoLocal = JSON.parse(localStorage.getItem("todoArr"));

/* if Local storage exists then assigning the value of todoArr
to todoLocal from Inbox tab */
function setTodoArr(newTodoArr) {
  todoArr = newTodoArr;
}

// Creating a div to list all todo items
var todoDiv = document.createElement("div");
todoDiv.classList.add("todoList");

// rendering the list of todo in the page
var renderTodo = function renderTodo() {
  todoDiv.innerHTML = "";
  todoArr.forEach(function (todo) {
    var individualDiv = document.createElement("div");
    var titleName = document.createElement("p");
    titleName.textContent = todo.title;
    var dateName = document.createElement("p");
    dateName.textContent = todo.date;
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.id = todo.id;
    deleteBtn.addEventListener("click", deleteTodo);

    // Adding the elements to the page
    individualDiv.append(titleName, dateName, deleteBtn);
    todoDiv.appendChild(individualDiv);
    _InboxTab_inboxTab__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(todoDiv);
  });
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
};
var deleteTodo = function deleteTodo(e) {
  removeTodo(e);
  renderTodo();
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

/***/ }),

/***/ "./src/Js/component.js":
/*!*****************************!*\
  !*** ./src/Js/component.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _Body_InboxTab_inboxTab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Body/InboxTab/inboxTab.js */ "./src/Js/Body/InboxTab/inboxTab.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var component = /*#__PURE__*/function () {
  function component() {
    _classCallCheck(this, component);
  }
  _createClass(component, [{
    key: "inboxTab",
    value: function inboxTab() {
      (0,_Body_InboxTab_inboxTab_js__WEBPACK_IMPORTED_MODULE_0__.inboxTabFile)();
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
___CSS_LOADER_EXPORT___.push([module.id, "/* font */\n\n:root {\n  --dark-gray: #413e3e;\n  --midlight-gray: #c4c3c3;\n  --hover-gray: #9c9999;\n  --body-gray: #dddcdc;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Poppins\", sans-serif;\n}\n\nbody {\n  background-color: var(--body-gray);\n  padding-left: 30%;\n  padding-right: 15%;\n  padding-top: 7rem;\n}\n\n/* Header */\n.header {\n  background-color: var(--dark-gray);\n  padding: 1.4rem 0 1.4rem 3rem;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.header h1,\n.header i {\n  display: inline;\n  color: white;\n  font-weight: 600;\n  font-size: 2.4rem;\n  letter-spacing: 1px;\n  word-spacing: 5px;\n}\n\n.header h1 {\n  padding-left: 0.5rem;\n}\n\n/* Sidebar */\n.side-bar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  top: 102px;\n  z-index: 0;\n  background-color: var(--midlight-gray);\n  padding: 1rem;\n  width: 13rem;\n  color: var(--dark-gray);\n  font-weight: 400;\n}\n\n.side-bar div p i {\n  padding-right: 0.5rem;\n}\n\n.side-bar div p {\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n.side-bar div p:hover {\n  background-color: var(--hover-gray);\n  font-weight: 600;\n}\n\n/* Body */\n.container h1 {\n  color: var(--dark-gray);\n}\n\n/* Inbox Tab */\n.addTask {\n  margin-top: 1rem;\n  width: 100%;\n  padding: 0.4rem 1rem;\n  text-align: left;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--midlight-gray);\n  color: var(--dark-gray);\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.addTask:hover {\n  font-weight: 600;\n  background-color: var(--hover-gray);\n}\n\n.todoList {\n  margin-top: 1rem;\n}\n\n.todoList div {\n  margin: 1rem 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 40px 5px 5px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.todoList div:hover {\n  background-color: var(--midlight-gray);\n}\n\n.delete-btn {\n  position: absolute;\n  right: -10px;\n  top: -5px;\n  border-radius: 50%;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 1px solid var(--dark-gray);\n  background-color: var(--dark-gray);\n  color: white;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  display: none;\n}\n\n.todoList div:hover .delete-btn {\n  display: block;\n}\n\n.todoList div p:first-of-type {\n  font-weight: 600;\n}\n.todoList div p:last-of-type {\n  color: var(--dark-gray);\n}\n\n/* Form Section */\n.form-container {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.192);\n  height: 100vh;\n  width: 100vw;\n}\n\nform {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  background-color: var(--body-gray);\n  width: 40rem;\n  padding: 0 1 2rem 1.4rem;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\nform h3 {\n  background-color: var(--dark-gray);\n  padding: 0.4rem 0 0.4rem 0.7rem;\n  color: white;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n\n.form-content {\n  margin: 0.5rem 1rem 1rem 1rem;\n}\n\nform {\n  color: var(--dark-gray);\n}\n\ninput[type=\"text\"],\ninput[type=\"submit\"],\ntextarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px;\n}\n\ninput[type=\"radio\"] {\n  margin-left: 10px;\n}\n\ninput,\ntextarea {\n  margin-bottom: 0.8rem;\n}\n\n/* ------------------------------------------------------------------------------------- */\n", "",{"version":3,"sources":["webpack://./src/Styles/main.css"],"names":[],"mappings":"AAAA,SAAS;;AAGT;EACE,oBAAoB;EACpB,wBAAwB;EACxB,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,WAAW;AACX;EACE,kCAAkC;EAClC,6BAA6B;EAC7B,eAAe;EACf,MAAM;EACN,QAAQ;EACR,OAAO;EACP,UAAU;AACZ;;AAEA;;EAEE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA,YAAY;AACZ;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,UAAU;EACV,UAAU;EACV,sCAAsC;EACtC,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,uBAAuB;AACzB;;AAEA,cAAc;AACd;EACE,gBAAgB;EAChB,WAAW;EACX,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,sCAAsC;EACtC,uBAAuB;EACvB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,kCAAkC;EAClC,kCAAkC;EAClC,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,uBAAuB;AACzB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,sCAAsC;EACtC,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,wBAAwB;EACxB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,+BAA+B;EAC/B,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;;EAGE,WAAW;EACX,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA,0FAA0F","sourcesContent":["/* font */\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap\");\n\n:root {\n  --dark-gray: #413e3e;\n  --midlight-gray: #c4c3c3;\n  --hover-gray: #9c9999;\n  --body-gray: #dddcdc;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Poppins\", sans-serif;\n}\n\nbody {\n  background-color: var(--body-gray);\n  padding-left: 30%;\n  padding-right: 15%;\n  padding-top: 7rem;\n}\n\n/* Header */\n.header {\n  background-color: var(--dark-gray);\n  padding: 1.4rem 0 1.4rem 3rem;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.header h1,\n.header i {\n  display: inline;\n  color: white;\n  font-weight: 600;\n  font-size: 2.4rem;\n  letter-spacing: 1px;\n  word-spacing: 5px;\n}\n\n.header h1 {\n  padding-left: 0.5rem;\n}\n\n/* Sidebar */\n.side-bar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  top: 102px;\n  z-index: 0;\n  background-color: var(--midlight-gray);\n  padding: 1rem;\n  width: 13rem;\n  color: var(--dark-gray);\n  font-weight: 400;\n}\n\n.side-bar div p i {\n  padding-right: 0.5rem;\n}\n\n.side-bar div p {\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n.side-bar div p:hover {\n  background-color: var(--hover-gray);\n  font-weight: 600;\n}\n\n/* Body */\n.container h1 {\n  color: var(--dark-gray);\n}\n\n/* Inbox Tab */\n.addTask {\n  margin-top: 1rem;\n  width: 100%;\n  padding: 0.4rem 1rem;\n  text-align: left;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--midlight-gray);\n  color: var(--dark-gray);\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.addTask:hover {\n  font-weight: 600;\n  background-color: var(--hover-gray);\n}\n\n.todoList {\n  margin-top: 1rem;\n}\n\n.todoList div {\n  margin: 1rem 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 40px 5px 5px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.todoList div:hover {\n  background-color: var(--midlight-gray);\n}\n\n.delete-btn {\n  position: absolute;\n  right: -10px;\n  top: -5px;\n  border-radius: 50%;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 1px solid var(--dark-gray);\n  background-color: var(--dark-gray);\n  color: white;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  display: none;\n}\n\n.todoList div:hover .delete-btn {\n  display: block;\n}\n\n.todoList div p:first-of-type {\n  font-weight: 600;\n}\n.todoList div p:last-of-type {\n  color: var(--dark-gray);\n}\n\n/* Form Section */\n.form-container {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.192);\n  height: 100vh;\n  width: 100vw;\n}\n\nform {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  background-color: var(--body-gray);\n  width: 40rem;\n  padding: 0 1 2rem 1.4rem;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\nform h3 {\n  background-color: var(--dark-gray);\n  padding: 0.4rem 0 0.4rem 0.7rem;\n  color: white;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n\n.form-content {\n  margin: 0.5rem 1rem 1rem 1rem;\n}\n\nform {\n  color: var(--dark-gray);\n}\n\ninput[type=\"text\"],\ninput[type=\"submit\"],\ntextarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px;\n}\n\ninput[type=\"radio\"] {\n  margin-left: 10px;\n}\n\ninput,\ntextarea {\n  margin-bottom: 0.8rem;\n}\n\n/* ------------------------------------------------------------------------------------- */\n"],"sourceRoot":""}]);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FzQztBQUNJOztBQUUxQztBQUNBLElBQU04QixNQUFNLEdBQUcsSUFBSUQsd0RBQVMsRUFBRTtBQUM5QkMsTUFBTSxDQUFDQyxRQUFRLEVBQUU7O0FBRWpCO0FBQ0ExRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ1MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDeEUrQyxNQUFNLENBQUNDLFFBQVEsRUFBRTtBQUNuQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pzL0JvZHkvRm9ybS9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pzL0JvZHkvSW5ib3hUYWIvaW5ib3hUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSnMvQm9keS9Ub2RvIEFycmF5L3RvZG9BcnIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSnMvY29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9TdHlsZXMvbWFpbi5jc3M/NGVkNyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9kb0FyciB9IGZyb20gXCIuLi9Ub2RvIEFycmF5L3RvZG9BcnJcIjtcbmltcG9ydCB7IHJlbmRlclRvZG8gfSBmcm9tIFwiLi4vVG9kbyBBcnJheS90b2RvQXJyXCI7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG5jb25zdCBsb3dQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb3dQXCIpO1xuY29uc3QgbWVkaXVtUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVkaXVtUFwiKTtcbmNvbnN0IGhpZ2hQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdoUFwiKTtcbmxldCBwcmlvcml0eSA9IFwiXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRpbmcgZm9ybSBpbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gIC8vIERpc3BsYXlpbmcgdGhlIGZvcm1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKS5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2tcIjtcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBDaGVjayB3aGljaCByYWRpbyBidXR0b24gaXMgY2hlY2tlZFxuICBjaGVjaFByaW9yaXR5KCk7XG5cbiAgaWYgKHRpdGxlLnZhbHVlICYmIGRhdGUudmFsdWUpIHtcbiAgICB0b2RvQXJyLnB1c2godXBkYXRlRm9ybVZhbHVlKCkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNsZWFyRm9ybVZhbHVlKCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKS5zdHlsZSA9IFwiZGlzcGxheTogbm9uZVwiO1xuXG4gIC8vIFJlbmRlcmluZyB0aGUgbmV3IHRvZG8gaW4gdGhlIHBhZ2VcbiAgcmVuZGVyVG9kbygpO1xufSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU3RvcmluZyB2YWx1ZXMgaW4gYSBjb25zdHJ1Y3RvclxuZnVuY3Rpb24gRm9ybVZhbHVlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGlkKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMuaWQgPSBpZDtcbn1cblxuLy8gVXBkYXRpbmcgdGhlIGZvcm0gdmFsdWUgdXNpbmcgY29uc3RydWN0b3JcbmNvbnN0IHVwZGF0ZUZvcm1WYWx1ZSA9ICgpID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1WYWx1ZShcbiAgICB0aXRsZS52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICBkYXRlLnZhbHVlLFxuICAgIHByaW9yaXR5LFxuICAgIFwiXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICApO1xuICByZXR1cm4gZm9ybURhdGE7XG59O1xuXG4vLyBDbGVhcmluZyB0aGUgZm9ybSB2YWx1ZVxuY29uc3QgY2xlYXJGb3JtVmFsdWUgPSAoKSA9PiB7XG4gIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICBkYXRlLnZhbHVlID0gXCJcIjtcbiAgbG93UC5jaGVja2VkID0gZmFsc2U7XG4gIG1lZGl1bVAuY2hlY2tlZCA9IGZhbHNlO1xuICBoaWdoUC5jaGVja2VkID0gZmFsc2U7XG4gIHByaW9yaXR5ID0gXCJcIjtcbn07XG5cbi8vIGNoZWNraW5nIHByaW9yaXR5XG5jb25zdCBjaGVjaFByaW9yaXR5ID0gKCkgPT4ge1xuICBpZiAobG93UC5jaGVja2VkKSB7XG4gICAgcHJpb3JpdHkgPSBsb3dQLnZhbHVlO1xuICB9IGVsc2UgaWYgKG1lZGl1bVAuY2hlY2tlZCkge1xuICAgIHByaW9yaXR5ID0gbWVkaXVtUC52YWx1ZTtcbiAgfSBlbHNlIGlmIChoaWdoUC5jaGVja2VkKSB7XG4gICAgcHJpb3JpdHkgPSBoaWdoUC52YWx1ZTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tIFwiLi4vRm9ybS9mb3JtLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJUb2RvLCBzZXRUb2RvQXJyLCB0b2RvTG9jYWwgfSBmcm9tIFwiLi4vVG9kbyBBcnJheS90b2RvQXJyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuLy8gTWFpbiBmdW5jdGlvbiBmb3IgSW5ib3ggVGFiXG5leHBvcnQgY29uc3QgaW5ib3hUYWJGaWxlID0gKCkgPT4ge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcblxuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgdGFza1wiO1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrXCIpO1xuXG4gIC8vIEFwcGVuZGluZyB0aGUgaGVhZGVyIGFuZCB0aGUgYnV0dG9uIGluIHRoZSBjb250YWluZXJcbiAgY29udGFpbmVyLmFwcGVuZChoZWFkZXIsIGFkZFRhc2tCdG4pO1xuXG4gIC8qIGlmIGxvY2FsIHN0b3JhZ2UgZXhpc3RzIHRoZW4gcmVuZGVyaW5nIHRvZG8gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgIGJ5IGFzc2lnbmluZyB0aGUgdmFsdWUgb2YgdG9kb0FyciB0byB0b2RvTG9jYWwgaW4gaXRzIG93blxuICAgICBmdW5jdGlvbiBwYWdlXG4gICovXG4gIGlmICh0b2RvTG9jYWwpIHtcbiAgICBzZXRUb2RvQXJyKHRvZG9Mb2NhbCk7XG4gICAgcmVuZGVyVG9kbygpO1xuICB9XG5cbiAgLy8gQWRkIHRhc2sgYnV0dG9uIGNsaWNrZWRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9ybSgpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vSW5ib3hUYWIvaW5ib3hUYWJcIjtcblxuZXhwb3J0IGxldCB0b2RvQXJyID0gW107XG5cbmV4cG9ydCBjb25zdCB0b2RvTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FyclwiKSk7XG5cbi8qIGlmIExvY2FsIHN0b3JhZ2UgZXhpc3RzIHRoZW4gYXNzaWduaW5nIHRoZSB2YWx1ZSBvZiB0b2RvQXJyXG50byB0b2RvTG9jYWwgZnJvbSBJbmJveCB0YWIgKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRUb2RvQXJyKG5ld1RvZG9BcnIpIHtcbiAgdG9kb0FyciA9IG5ld1RvZG9BcnI7XG59XG5cbi8vIENyZWF0aW5nIGEgZGl2IHRvIGxpc3QgYWxsIHRvZG8gaXRlbXNcbmNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3RcIik7XG5cbi8vIHJlbmRlcmluZyB0aGUgbGlzdCBvZiB0b2RvIGluIHRoZSBwYWdlXG5leHBvcnQgY29uc3QgcmVuZGVyVG9kbyA9ICgpID0+IHtcbiAgdG9kb0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHRvZG9BcnIuZm9yRWFjaChmdW5jdGlvbiAodG9kbykge1xuICAgIGNvbnN0IGluZGl2aWR1YWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgdGl0bGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVOYW1lLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgIGNvbnN0IGRhdGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGF0ZU5hbWUudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcbiAgICBkZWxldGVCdG4uaWQgPSB0b2RvLmlkO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVG9kbyk7XG5cbiAgICAvLyBBZGRpbmcgdGhlIGVsZW1lbnRzIHRvIHRoZSBwYWdlXG4gICAgaW5kaXZpZHVhbERpdi5hcHBlbmQodGl0bGVOYW1lLCBkYXRlTmFtZSwgZGVsZXRlQnRuKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGluZGl2aWR1YWxEaXYpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgfSk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvQXJyXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9BcnIpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRvZG8gPSAoZSkgPT4ge1xuICByZW1vdmVUb2RvKGUpO1xuICByZW5kZXJUb2RvKCk7XG59O1xuXG5jb25zdCByZW1vdmVUb2RvID0gKGUpID0+IHtcbiAgdG9kb0FyciA9IHRvZG9BcnIuZmlsdGVyKGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgaWYgKHRvZG8uaWQgPT09IGUudGFyZ2V0LmlkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgaW5ib3hUYWJGaWxlIH0gZnJvbSBcIi4vQm9keS9JbmJveFRhYi9pbmJveFRhYi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb21wb25lbnQge1xuICBpbmJveFRhYigpIHtcbiAgICBpbmJveFRhYkZpbGUoKTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogZm9udCAqL1xcblxcbjpyb290IHtcXG4gIC0tZGFyay1ncmF5OiAjNDEzZTNlO1xcbiAgLS1taWRsaWdodC1ncmF5OiAjYzRjM2MzO1xcbiAgLS1ob3Zlci1ncmF5OiAjOWM5OTk5O1xcbiAgLS1ib2R5LWdyYXk6ICNkZGRjZGM7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ncmF5KTtcXG4gIHBhZGRpbmctbGVmdDogMzAlO1xcbiAgcGFkZGluZy1yaWdodDogMTUlO1xcbiAgcGFkZGluZy10b3A6IDdyZW07XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIHBhZGRpbmc6IDEuNHJlbSAwIDEuNHJlbSAzcmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhlYWRlciBoMSxcXG4uaGVhZGVyIGkge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHdvcmQtc3BhY2luZzogNXB4O1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuLnNpZGUtYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDEwMnB4O1xcbiAgei1pbmRleDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGxpZ2h0LWdyYXkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiAxM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnNpZGUtYmFyIGRpdiBwIGkge1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4uc2lkZS1iYXIgZGl2IHAge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZS1iYXIgZGl2IHA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4vKiBCb2R5ICovXFxuLmNvbnRhaW5lciBoMSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuLyogSW5ib3ggVGFiICovXFxuLmFkZFRhc2sge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkbGlnaHQtZ3JheSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZFRhc2s6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWdyYXkpO1xcbn1cXG5cXG4udG9kb0xpc3Qge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnRvZG9MaXN0IGRpdiB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA1cHggNDBweCA1cHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTEwcHg7XFxuICB0b3A6IC01cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2OmhvdmVyIC5kZWxldGUtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4udG9kb0xpc3QgZGl2IHA6bGFzdC1vZi10eXBlIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbn1cXG5cXG4vKiBGb3JtIFNlY3Rpb24gKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTkyKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktZ3JheSk7XFxuICB3aWR0aDogNDByZW07XFxuICBwYWRkaW5nOiAwIDEgMnJlbSAxLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZm9ybSBoMyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgcGFkZGluZzogMC40cmVtIDAgMC40cmVtIDAuN3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQge1xcbiAgbWFyZ2luOiAwLjVyZW0gMXJlbSAxcmVtIDFyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9TdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUzs7QUFHVDtFQUNFLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBLFdBQVc7QUFDWDtFQUNFLGtDQUFrQztFQUNsQyw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxVQUFVO0VBQ1YsVUFBVTtFQUNWLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGdCQUFnQjtBQUNsQjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsY0FBYztBQUNkO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUEsMEZBQTBGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGZvbnQgKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrLWdyYXk6ICM0MTNlM2U7XFxuICAtLW1pZGxpZ2h0LWdyYXk6ICNjNGMzYzM7XFxuICAtLWhvdmVyLWdyYXk6ICM5Yzk5OTk7XFxuICAtLWJvZHktZ3JheTogI2RkZGNkYztcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWdyYXkpO1xcbiAgcGFkZGluZy1sZWZ0OiAzMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XFxuICBwYWRkaW5nLXRvcDogN3JlbTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgcGFkZGluZzogMS40cmVtIDAgMS40cmVtIDNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGVhZGVyIGgxLFxcbi5oZWFkZXIgaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgd29yZC1zcGFjaW5nOiA1cHg7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4uc2lkZS1iYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMTAycHg7XFxuICB6LWluZGV4OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkbGlnaHQtZ3JheSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDEzcmVtO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uc2lkZS1iYXIgZGl2IHAgaSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5zaWRlLWJhciBkaXYgcCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLWJhciBkaXYgcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmF5KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi8qIEJvZHkgKi9cXG4uY29udGFpbmVyIGgxIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbn1cXG5cXG4vKiBJbmJveCBUYWIgKi9cXG4uYWRkVGFzayB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRsaWdodC1ncmF5KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkVGFzazpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxufVxcblxcbi50b2RvTGlzdCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2IHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDVweCA0MHB4IDVweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvTGlzdCBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkbGlnaHQtZ3JheSk7XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIHRvcDogLTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JheSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvTGlzdCBkaXY6aG92ZXIgLmRlbGV0ZS1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvTGlzdCBkaXYgcDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi50b2RvTGlzdCBkaXYgcDpsYXN0LW9mLXR5cGUge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi8qIEZvcm0gU2VjdGlvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOTIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ncmF5KTtcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIHBhZGRpbmc6IDAgMSAycmVtIDEuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5mb3JtIGgzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBwYWRkaW5nOiAwLjRyZW0gMCAwLjRyZW0gMC43cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLmZvcm0tY29udGVudCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9TdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vSnMvY29tcG9uZW50LmpzXCI7XG5cbi8vIHNob3dpbmcgcGFnZSBMYXlvdXRcbmNvbnN0IHJlbmRlciA9IG5ldyBjb21wb25lbnQoKTtcbnJlbmRlci5pbmJveFRhYigpO1xuXG4vLyBpbmJveCBidXR0b24gY2xpY2tlZFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveC1lbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZW5kZXIuaW5ib3hUYWIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbInRvZG9BcnIiLCJyZW5kZXJUb2RvIiwidGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJsb3dQIiwibWVkaXVtUCIsImhpZ2hQIiwicHJpb3JpdHkiLCJmb3JtIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNoZWNoUHJpb3JpdHkiLCJ2YWx1ZSIsInB1c2giLCJ1cGRhdGVGb3JtVmFsdWUiLCJjbGVhckZvcm1WYWx1ZSIsIkZvcm1WYWx1ZSIsImlkIiwiZm9ybURhdGEiLCJEYXRlIiwiZ2V0VGltZSIsImNoZWNrZWQiLCJzZXRUb2RvQXJyIiwidG9kb0xvY2FsIiwiY29udGFpbmVyIiwiaW5ib3hUYWJGaWxlIiwiaW5uZXJIVE1MIiwiaGVhZGVyIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYWRkVGFza0J0biIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuZXdUb2RvQXJyIiwidG9kb0RpdiIsImZvckVhY2giLCJ0b2RvIiwiaW5kaXZpZHVhbERpdiIsInRpdGxlTmFtZSIsImRhdGVOYW1lIiwiZGVsZXRlQnRuIiwiZGVsZXRlVG9kbyIsImFwcGVuZENoaWxkIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImUiLCJyZW1vdmVUb2RvIiwiZmlsdGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwicmVuZGVyIiwiaW5ib3hUYWIiXSwic291cmNlUm9vdCI6IiJ9