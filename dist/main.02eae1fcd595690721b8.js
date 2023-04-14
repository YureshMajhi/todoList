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

// form button click behaviour
document.querySelector("#submit").addEventListener("click", function (event) {
  // removing the default behaviour of submit button
  event.preventDefault();

  // Check which radio button is checked
  chechPriority();

  // Checking if value exists in form before pushing it to array
  if (title.value && date.value) {
    _Todo_Array_todoArr__WEBPACK_IMPORTED_MODULE_0__["default"].push(updateFormValue());
  } else {
    return;
  }

  // Clearing the value of form after submission
  clearFormValue();

  // Hiding the form after all process is finished
  document.querySelector(".form-container").style = "display: none";

  // Rendering the new todo in the page
  (0,_Todo_Array_todoArr__WEBPACK_IMPORTED_MODULE_0__.renderTodo)();
});

// ------------------------------------------------------------------------------------------------------------------------
// Storing values in a constructor
function FormValue(title, description, date, priority) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
}

// Updating the form value using constructor
var updateFormValue = function updateFormValue() {
  var formData = new FormValue(title.value, description.value, date.value, priority);
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
  // Removing the contents of container to add new contents
  container.innerHTML = "";

  // Creating Header
  var header = document.createElement("h1");
  header.textContent = "Inbox";

  // Creating add task button
  var addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "+ Add task";
  addTaskBtn.classList.add("addTask");

  // Appending the header and the button in the container
  container.append(header, addTaskBtn);
  (0,_Todo_Array_todoArr_js__WEBPACK_IMPORTED_MODULE_1__.renderTodo)();

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "renderTodo": () => (/* binding */ renderTodo)
/* harmony export */ });
/* harmony import */ var _InboxTab_inboxTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InboxTab/inboxTab */ "./src/Js/Body/InboxTab/inboxTab.js");

var todoArr = [{
  title: "hello",
  description: "hello",
  date: "222222",
  priority: "Low"
}, {
  title: "hi",
  description: "hi",
  date: "333333",
  priority: "Medium"
}, {
  title: "how",
  description: "how",
  date: "44444444444",
  priority: "High"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoArr);

// Creating a div to list all todo items
var todoDiv = document.createElement("div");
todoDiv.classList.add("todoList");

// rendering the list of todo in the page
var renderTodo = function renderTodo() {
  todoDiv.innerHTML = "";
  todoArr.forEach(function (todo) {
    // Creating div for each individual array
    var individualDiv = document.createElement("div");

    // Assigning variables for all form values
    var titleName = document.createElement("p");
    titleName.textContent = todo.title;
    var dateName = document.createElement("p");
    dateName.textContent = todo.date;
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");

    // Adding the elements to the page
    individualDiv.append(titleName, dateName, deleteBtn);
    todoDiv.appendChild(individualDiv);
    _InboxTab_inboxTab__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(todoDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDSTs7QUFFMUM7QUFDQSxJQUFNa0IsTUFBTSxHQUFHLElBQUlELHdEQUFTLEVBQUU7QUFDOUJDLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFOztBQUVqQjtBQUNBekMsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQ3hFOEIsTUFBTSxDQUFDQyxRQUFRLEVBQUU7QUFDbkIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Kcy9Cb2R5L0Zvcm0vZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Kcy9Cb2R5L0luYm94VGFiL2luYm94VGFiLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pzL0JvZHkvVG9kbyBBcnJheS90b2RvQXJyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9TdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvU3R5bGVzL21haW4uY3NzPzRlZDciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2RvQXJyIGZyb20gXCIuLi9Ub2RvIEFycmF5L3RvZG9BcnJcIjtcbmltcG9ydCB7IHJlbmRlclRvZG8gfSBmcm9tIFwiLi4vVG9kbyBBcnJheS90b2RvQXJyXCI7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG5jb25zdCBsb3dQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb3dQXCIpO1xuY29uc3QgbWVkaXVtUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVkaXVtUFwiKTtcbmNvbnN0IGhpZ2hQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdoUFwiKTtcbmxldCBwcmlvcml0eSA9IFwiXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRpbmcgZm9ybSBpbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gIC8vIERpc3BsYXlpbmcgdGhlIGZvcm1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKS5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2tcIjtcbn07XG5cbi8vIGZvcm0gYnV0dG9uIGNsaWNrIGJlaGF2aW91clxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyByZW1vdmluZyB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2Ygc3VibWl0IGJ1dHRvblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vIENoZWNrIHdoaWNoIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkXG4gIGNoZWNoUHJpb3JpdHkoKTtcblxuICAvLyBDaGVja2luZyBpZiB2YWx1ZSBleGlzdHMgaW4gZm9ybSBiZWZvcmUgcHVzaGluZyBpdCB0byBhcnJheVxuICBpZiAodGl0bGUudmFsdWUgJiYgZGF0ZS52YWx1ZSkge1xuICAgIHRvZG9BcnIucHVzaCh1cGRhdGVGb3JtVmFsdWUoKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQ2xlYXJpbmcgdGhlIHZhbHVlIG9mIGZvcm0gYWZ0ZXIgc3VibWlzc2lvblxuICBjbGVhckZvcm1WYWx1ZSgpO1xuXG4gIC8vIEhpZGluZyB0aGUgZm9ybSBhZnRlciBhbGwgcHJvY2VzcyBpcyBmaW5pc2hlZFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpLnN0eWxlID0gXCJkaXNwbGF5OiBub25lXCI7XG5cbiAgLy8gUmVuZGVyaW5nIHRoZSBuZXcgdG9kbyBpbiB0aGUgcGFnZVxuICByZW5kZXJUb2RvKCk7XG59KTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTdG9yaW5nIHZhbHVlcyBpbiBhIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBGb3JtVmFsdWUodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xufVxuXG4vLyBVcGRhdGluZyB0aGUgZm9ybSB2YWx1ZSB1c2luZyBjb25zdHJ1Y3RvclxuY29uc3QgdXBkYXRlRm9ybVZhbHVlID0gKCkgPT4ge1xuICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybVZhbHVlKFxuICAgIHRpdGxlLnZhbHVlLFxuICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgIGRhdGUudmFsdWUsXG4gICAgcHJpb3JpdHlcbiAgKTtcbiAgcmV0dXJuIGZvcm1EYXRhO1xufTtcblxuLy8gQ2xlYXJpbmcgdGhlIGZvcm0gdmFsdWVcbmNvbnN0IGNsZWFyRm9ybVZhbHVlID0gKCkgPT4ge1xuICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgZGF0ZS52YWx1ZSA9IFwiXCI7XG4gIGxvd1AuY2hlY2tlZCA9IGZhbHNlO1xuICBtZWRpdW1QLmNoZWNrZWQgPSBmYWxzZTtcbiAgaGlnaFAuY2hlY2tlZCA9IGZhbHNlO1xuICBwcmlvcml0eSA9IFwiXCI7XG59O1xuXG4vLyBjaGVja2luZyBwcmlvcml0eVxuY29uc3QgY2hlY2hQcmlvcml0eSA9ICgpID0+IHtcbiAgaWYgKGxvd1AuY2hlY2tlZCkge1xuICAgIHByaW9yaXR5ID0gbG93UC52YWx1ZTtcbiAgfSBlbHNlIGlmIChtZWRpdW1QLmNoZWNrZWQpIHtcbiAgICBwcmlvcml0eSA9IG1lZGl1bVAudmFsdWU7XG4gIH0gZWxzZSBpZiAoaGlnaFAuY2hlY2tlZCkge1xuICAgIHByaW9yaXR5ID0gaGlnaFAudmFsdWU7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSBcIi4uL0Zvcm0vZm9ybS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyVG9kbyB9IGZyb20gXCIuLi9Ub2RvIEFycmF5L3RvZG9BcnIuanNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4vLyBNYWluIGZ1bmN0aW9uIGZvciBJbmJveCBUYWJcbmV4cG9ydCBjb25zdCBpbmJveFRhYkZpbGUgPSAoKSA9PiB7XG4gIC8vIFJlbW92aW5nIHRoZSBjb250ZW50cyBvZiBjb250YWluZXIgdG8gYWRkIG5ldyBjb250ZW50c1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBDcmVhdGluZyBIZWFkZXJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG5cbiAgLy8gQ3JlYXRpbmcgYWRkIHRhc2sgYnV0dG9uXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCB0YXNrXCI7XG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIik7XG5cbiAgLy8gQXBwZW5kaW5nIHRoZSBoZWFkZXIgYW5kIHRoZSBidXR0b24gaW4gdGhlIGNvbnRhaW5lclxuICBjb250YWluZXIuYXBwZW5kKGhlYWRlciwgYWRkVGFza0J0bik7XG5cbiAgcmVuZGVyVG9kbygpO1xuXG4gIC8vIEFkZCB0YXNrIGJ1dHRvbiBjbGlja2VkXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZvcm0oKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIi4uL0luYm94VGFiL2luYm94VGFiXCI7XG5cbmNvbnN0IHRvZG9BcnIgPSBbXG4gIHsgdGl0bGU6IFwiaGVsbG9cIiwgZGVzY3JpcHRpb246IFwiaGVsbG9cIiwgZGF0ZTogXCIyMjIyMjJcIiwgcHJpb3JpdHk6IFwiTG93XCIgfSxcbiAgeyB0aXRsZTogXCJoaVwiLCBkZXNjcmlwdGlvbjogXCJoaVwiLCBkYXRlOiBcIjMzMzMzM1wiLCBwcmlvcml0eTogXCJNZWRpdW1cIiB9LFxuICB7IHRpdGxlOiBcImhvd1wiLCBkZXNjcmlwdGlvbjogXCJob3dcIiwgZGF0ZTogXCI0NDQ0NDQ0NDQ0NFwiLCBwcmlvcml0eTogXCJIaWdoXCIgfSxcbl07XG5leHBvcnQgZGVmYXVsdCB0b2RvQXJyO1xuXG4vLyBDcmVhdGluZyBhIGRpdiB0byBsaXN0IGFsbCB0b2RvIGl0ZW1zXG5jb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0XCIpO1xuXG4vLyByZW5kZXJpbmcgdGhlIGxpc3Qgb2YgdG9kbyBpbiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IHJlbmRlclRvZG8gPSAoKSA9PiB7XG4gIHRvZG9EaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICB0b2RvQXJyLmZvckVhY2goZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAvLyBDcmVhdGluZyBkaXYgZm9yIGVhY2ggaW5kaXZpZHVhbCBhcnJheVxuICAgIGNvbnN0IGluZGl2aWR1YWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgLy8gQXNzaWduaW5nIHZhcmlhYmxlcyBmb3IgYWxsIGZvcm0gdmFsdWVzXG4gICAgY29uc3QgdGl0bGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVOYW1lLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgIGNvbnN0IGRhdGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGF0ZU5hbWUudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcblxuICAgIC8vIEFkZGluZyB0aGUgZWxlbWVudHMgdG8gdGhlIHBhZ2VcbiAgICBpbmRpdmlkdWFsRGl2LmFwcGVuZCh0aXRsZU5hbWUsIGRhdGVOYW1lLCBkZWxldGVCdG4pO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoaW5kaXZpZHVhbERpdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBpbmJveFRhYkZpbGUgfSBmcm9tIFwiLi9Cb2R5L0luYm94VGFiL2luYm94VGFiLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbXBvbmVudCB7XG4gIGluYm94VGFiKCkge1xuICAgIGluYm94VGFiRmlsZSgpO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBmb250ICovXFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrLWdyYXk6ICM0MTNlM2U7XFxuICAtLW1pZGxpZ2h0LWdyYXk6ICNjNGMzYzM7XFxuICAtLWhvdmVyLWdyYXk6ICM5Yzk5OTk7XFxuICAtLWJvZHktZ3JheTogI2RkZGNkYztcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWdyYXkpO1xcbiAgcGFkZGluZy1sZWZ0OiAzMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XFxuICBwYWRkaW5nLXRvcDogN3JlbTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgcGFkZGluZzogMS40cmVtIDAgMS40cmVtIDNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGVhZGVyIGgxLFxcbi5oZWFkZXIgaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgd29yZC1zcGFjaW5nOiA1cHg7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4uc2lkZS1iYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMTAycHg7XFxuICB6LWluZGV4OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkbGlnaHQtZ3JheSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDEzcmVtO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uc2lkZS1iYXIgZGl2IHAgaSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5zaWRlLWJhciBkaXYgcCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlLWJhciBkaXYgcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmF5KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi8qIEJvZHkgKi9cXG4uY29udGFpbmVyIGgxIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbn1cXG5cXG4vKiBJbmJveCBUYWIgKi9cXG4uYWRkVGFzayB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRsaWdodC1ncmF5KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkVGFzazpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZ3JheSk7XFxufVxcblxcbi50b2RvTGlzdCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4udG9kb0xpc3QgZGl2IHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDVweCA0MHB4IDVweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvTGlzdCBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkbGlnaHQtZ3JheSk7XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIHRvcDogLTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JheSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvTGlzdCBkaXY6aG92ZXIgLmRlbGV0ZS1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvTGlzdCBkaXYgcDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi50b2RvTGlzdCBkaXYgcDpsYXN0LW9mLXR5cGUge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi8qIEZvcm0gU2VjdGlvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOTIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ncmF5KTtcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIHBhZGRpbmc6IDAgMSAycmVtIDEuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5mb3JtIGgzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBwYWRkaW5nOiAwLjRyZW0gMCAwLjRyZW0gMC43cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLmZvcm0tY29udGVudCB7XFxuICBtYXJnaW46IDAuNXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFTOztBQUdUO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0NBQWtDO0VBQ2xDLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtBQUNaOztBQUVBOztFQUVFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBLFlBQVk7QUFDWjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFVBQVU7RUFDVixVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBQ2xCOztBQUVBLFNBQVM7QUFDVDtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQSwwRkFBMEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogZm9udCAqL1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWRhcmstZ3JheTogIzQxM2UzZTtcXG4gIC0tbWlkbGlnaHQtZ3JheTogI2M0YzNjMztcXG4gIC0taG92ZXItZ3JheTogIzljOTk5OTtcXG4gIC0tYm9keS1ncmF5OiAjZGRkY2RjO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktZ3JheSk7XFxuICBwYWRkaW5nLWxlZnQ6IDMwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcXG4gIHBhZGRpbmctdG9wOiA3cmVtO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBwYWRkaW5nOiAxLjRyZW0gMCAxLjRyZW0gM3JlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5oZWFkZXIgaDEsXFxuLmhlYWRlciBpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB3b3JkLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlLWJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAxMDJweDtcXG4gIHotaW5kZXg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRsaWdodC1ncmF5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMTNyZW07XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zaWRlLWJhciBkaXYgcCBpIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnNpZGUtYmFyIGRpdiBwIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGUtYmFyIGRpdiBwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWdyYXkpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyogQm9keSAqL1xcbi5jb250YWluZXIgaDEge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi8qIEluYm94IFRhYiAqL1xcbi5hZGRUYXNrIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGxpZ2h0LWdyYXkpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hZGRUYXNrOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1ncmF5KTtcXG59XFxuXFxuLnRvZG9MaXN0IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi50b2RvTGlzdCBkaXYge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNXB4IDQwcHggNXB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG9MaXN0IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRsaWdodC1ncmF5KTtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgdG9wOiAtNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmF5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9MaXN0IGRpdjpob3ZlciAuZGVsZXRlLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG9MaXN0IGRpdiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnRvZG9MaXN0IGRpdiBwOmxhc3Qtb2YtdHlwZSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuLyogRm9ybSBTZWN0aW9uICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE5Mik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWdyYXkpO1xcbiAgd2lkdGg6IDQwcmVtO1xcbiAgcGFkZGluZzogMCAxIDJyZW0gMS40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmZvcm0gaDMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwIDAuNHJlbSAwLjdyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHtcXG4gIG1hcmdpbjogMC41cmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuL1N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9Kcy9jb21wb25lbnQuanNcIjtcblxuLy8gc2hvd2luZyBwYWdlIExheW91dFxuY29uc3QgcmVuZGVyID0gbmV3IGNvbXBvbmVudCgpO1xucmVuZGVyLmluYm94VGFiKCk7XG5cbi8vIGluYm94IGJ1dHRvbiBjbGlja2VkXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94LWVsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlbmRlci5pbmJveFRhYigpO1xufSk7XG4iXSwibmFtZXMiOlsidG9kb0FyciIsInJlbmRlclRvZG8iLCJ0aXRsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImxvd1AiLCJtZWRpdW1QIiwiaGlnaFAiLCJwcmlvcml0eSIsImZvcm0iLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2hlY2hQcmlvcml0eSIsInZhbHVlIiwicHVzaCIsInVwZGF0ZUZvcm1WYWx1ZSIsImNsZWFyRm9ybVZhbHVlIiwiRm9ybVZhbHVlIiwiZm9ybURhdGEiLCJjaGVja2VkIiwiY29udGFpbmVyIiwiaW5ib3hUYWJGaWxlIiwiaW5uZXJIVE1MIiwiaGVhZGVyIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYWRkVGFza0J0biIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInRvZG9EaXYiLCJmb3JFYWNoIiwidG9kbyIsImluZGl2aWR1YWxEaXYiLCJ0aXRsZU5hbWUiLCJkYXRlTmFtZSIsImRlbGV0ZUJ0biIsImFwcGVuZENoaWxkIiwiY29tcG9uZW50IiwicmVuZGVyIiwiaW5ib3hUYWIiXSwic291cmNlUm9vdCI6IiJ9