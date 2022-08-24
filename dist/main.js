/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local.js */ "./src/local.js");



class Display {
  constructor() {
    this.container = document.querySelector('[data-tasks-container]');
  }

  createTaskDOM(id, taskObject) {
    let task = document.createElement('button');
    task.classList.add('task');
    if (taskObject.status === 'finished') task.classList.add('finished');
    if (taskObject.status === 'unfinished') task.classList.remove('finished');
    task.id = id.toString();
    task.addEventListener('click', function (e) {
      let targetElement = (e.target.tagName === 'path') ? e.target.parentElement : e.target;
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetElement, this);
    });

    let taskMain = document.createElement('div');
    taskMain.classList.add('task-main');
    task.append(taskMain);

    let leftSide = document.createElement('div');
    leftSide.classList.add('left');
    taskMain.append(leftSide);

    let checkboxIcon = document.createElement('i');
    checkboxIcon.classList.add('fa-regular');
    checkboxIcon.classList.add(taskObject.status === 'unfinished' ? 'fa-circle' : 'fa-circle-check');
    leftSide.append(checkboxIcon);

    let titleSpan = document.createElement('span');
    titleSpan.innerText = taskObject.title;
    leftSide.append(titleSpan);


    let rightSide = document.createElement('div');
    rightSide.classList.add('right');
    taskMain.append(rightSide);

    let dateSpan = document.createElement('span');
    dateSpan.innerText = taskObject.dueDate;
    rightSide.append(dateSpan);

    let starIcon = document.createElement('i');
    starIcon.classList.add('fa-star');
    starIcon.classList.add(taskObject.priority === 'high' ? 'fa-solid' : 'fa-regular');
    rightSide.append(starIcon);

    let trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash');
    rightSide.append(trashIcon);

    let angleIcon = document.createElement('i');
    angleIcon.classList.add('fa-solid', 'fa-angle-down');
    rightSide.append(angleIcon);

    let desc = document.createElement('div');
    desc.classList.add('task-desc', 'hidden');
    task.append(desc);

    let p = document.createElement('p');
    p.innerText = taskObject.description;
    desc.append(p);

    return task;
  }

  clearContainer() {
    this.container.innerHTML = '';
  }

  updateContainer() {
    this.clearContainer();

    let currentProject = _local_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
    for (let key in currentProject) {
      this.container.append(this.createTaskDOM(key, currentProject[key]));
    }
  }

  changeDescriptionVisibility(taskElement, angleIcon) {
    taskElement.children[1].classList.toggle('hidden');
    angleIcon.classList.toggle('fa-angle-down');
    angleIcon.classList.toggle('fa-angle-up');
  }
}

const display = new Display();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleTaskClick)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local.js */ "./src/local.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");







function generateId() {
  return (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
}

function handleSubmit(formData) {
  let title = formData.get('title');
  let description = formData.get('description')
  let dueDate = formData.get('dueDate');

  let task = new _tasks_js__WEBPACK_IMPORTED_MODULE_2__.Task(title, description, dueDate);

  _local_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateTask(generateId(), task)
  _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer();
}

function handleTaskClick(target, taskElement) {
  let taskId = taskElement.id;
  let taskObject = _local_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject()[taskId];

  if (target.classList.contains('fa-star')) {
    taskObject = _tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].changePriority(taskObject);
    _local_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateTask(taskId, taskObject);
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer();

  } else if (target.classList.contains('fa-trash')) {
    _local_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeTask(taskId);
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer();

  } else if (target.classList.contains('fa-angle-down') || target.classList.contains('fa-angle-up')) {
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].changeDescriptionVisibility(taskElement, target);

  } else {
    taskObject = _tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].changeTaskStatus(taskObject);
    _local_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateTask(taskId, taskObject);
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer();

  }
}

const addTaskButton = document.querySelector('[data-add-task-btn]')
const addTaskForm = document.querySelector('[data-add-task-form]');
const addTaskModal = document.querySelector('[data-add-task-modal]')
const cancelModalButton = document.querySelector('[data-cancel-modal]');
const containerTitle = document.querySelector('[data-container-title]');

addTaskButton.addEventListener('click', function() {
  addTaskForm.reset();
  addTaskModal.showModal();
})

cancelModalButton.addEventListener('click', function() {
  addTaskModal.close();
})

addTaskForm.addEventListener('submit', function() {
  let formData = new FormData(this);
  handleSubmit(formData);
})

_display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer();

//TODO new project;

/***/ }),

/***/ "./src/local.js":
/*!**********************!*\
  !*** ./src/local.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Local {
  constructor() {
    this._currentProjectName = 'general';
  }

  updateTask(taskId, taskObject) {
    let currentProjectTasks = this.getCurrentProject();
    currentProjectTasks[taskId] = taskObject;

    localStorage.setItem(this._currentProjectName, JSON.stringify(currentProjectTasks));
  }

  removeTask(taskId) {
    let currentProjectTasks = this.getCurrentProject();
    delete currentProjectTasks[taskId];

    localStorage.setItem(this._currentProjectName, JSON.stringify(currentProjectTasks));
  }

  getProject(projectName) {
    return JSON.parse(localStorage.getItem(projectName));
  }

  getCurrentProject() {
    return JSON.parse(localStorage.getItem(this._currentProjectName));
  }

  set currentProjectName(value) {
    this._currentProjectName = value;
  }
}

const storage = new Local();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);



/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate) {
    this.title = title.trim();
    this.description = description.trim() || 'No Description';
    this.dueDate = dueDate;
    this.priority = 'standard';
    this.status = 'unfinished';
  }
}

class TaskMutator {
  changePriority(taskObject) {
    taskObject.priority = (taskObject.priority == 'standard') ? 'high' : 'standard';
    return taskObject;
  }

  changeTaskStatus(taskObject) {
    taskObject.status = (taskObject.status == 'unfinished') ? 'finished' : 'unfinished';
    return taskObject;
  }
}

let taskMutator = new TaskMutator;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskMutator);

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUM7QUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7OztVQ3ZCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCBoYW5kbGVUYXNrQ2xpY2sgZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vbG9jYWwuanMnO1xyXG5cclxuY2xhc3MgRGlzcGxheSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2tzLWNvbnRhaW5lcl0nKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRhc2tET00oaWQsIHRhc2tPYmplY3QpIHtcclxuICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgIGlmICh0YXNrT2JqZWN0LnN0YXR1cyA9PT0gJ2ZpbmlzaGVkJykgdGFzay5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xyXG4gICAgaWYgKHRhc2tPYmplY3Quc3RhdHVzID09PSAndW5maW5pc2hlZCcpIHRhc2suY2xhc3NMaXN0LnJlbW92ZSgnZmluaXNoZWQnKTtcclxuICAgIHRhc2suaWQgPSBpZC50b1N0cmluZygpO1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGxldCB0YXJnZXRFbGVtZW50ID0gKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdwYXRoJykgPyBlLnRhcmdldC5wYXJlbnRFbGVtZW50IDogZS50YXJnZXQ7XHJcbiAgICAgIGhhbmRsZVRhc2tDbGljayh0YXJnZXRFbGVtZW50LCB0aGlzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCB0YXNrTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza01haW4uY2xhc3NMaXN0LmFkZCgndGFzay1tYWluJyk7XHJcbiAgICB0YXNrLmFwcGVuZCh0YXNrTWFpbik7XHJcblxyXG4gICAgbGV0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XHJcbiAgICB0YXNrTWFpbi5hcHBlbmQobGVmdFNpZGUpO1xyXG5cclxuICAgIGxldCBjaGVja2JveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBjaGVja2JveEljb24uY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicpO1xyXG4gICAgY2hlY2tib3hJY29uLmNsYXNzTGlzdC5hZGQodGFza09iamVjdC5zdGF0dXMgPT09ICd1bmZpbmlzaGVkJyA/ICdmYS1jaXJjbGUnIDogJ2ZhLWNpcmNsZS1jaGVjaycpO1xyXG4gICAgbGVmdFNpZGUuYXBwZW5kKGNoZWNrYm94SWNvbik7XHJcblxyXG4gICAgbGV0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRpdGxlU3Bhbi5pbm5lclRleHQgPSB0YXNrT2JqZWN0LnRpdGxlO1xyXG4gICAgbGVmdFNpZGUuYXBwZW5kKHRpdGxlU3Bhbik7XHJcblxyXG5cclxuICAgIGxldCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xyXG4gICAgdGFza01haW4uYXBwZW5kKHJpZ2h0U2lkZSk7XHJcblxyXG4gICAgbGV0IGRhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZGF0ZVNwYW4uaW5uZXJUZXh0ID0gdGFza09iamVjdC5kdWVEYXRlO1xyXG4gICAgcmlnaHRTaWRlLmFwcGVuZChkYXRlU3Bhbik7XHJcblxyXG4gICAgbGV0IHN0YXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgc3Rhckljb24uY2xhc3NMaXN0LmFkZCgnZmEtc3RhcicpO1xyXG4gICAgc3Rhckljb24uY2xhc3NMaXN0LmFkZCh0YXNrT2JqZWN0LnByaW9yaXR5ID09PSAnaGlnaCcgPyAnZmEtc29saWQnIDogJ2ZhLXJlZ3VsYXInKTtcclxuICAgIHJpZ2h0U2lkZS5hcHBlbmQoc3Rhckljb24pO1xyXG5cclxuICAgIGxldCB0cmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtdHJhc2gnKTtcclxuICAgIHJpZ2h0U2lkZS5hcHBlbmQodHJhc2hJY29uKTtcclxuXHJcbiAgICBsZXQgYW5nbGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgYW5nbGVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWFuZ2xlLWRvd24nKTtcclxuICAgIHJpZ2h0U2lkZS5hcHBlbmQoYW5nbGVJY29uKTtcclxuXHJcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2MnLCAnaGlkZGVuJyk7XHJcbiAgICB0YXNrLmFwcGVuZChkZXNjKTtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAuaW5uZXJUZXh0ID0gdGFza09iamVjdC5kZXNjcmlwdGlvbjtcclxuICAgIGRlc2MuYXBwZW5kKHApO1xyXG5cclxuICAgIHJldHVybiB0YXNrO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJDb250YWluZXIoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbnRhaW5lcigpIHtcclxuICAgIHRoaXMuY2xlYXJDb250YWluZXIoKTtcclxuXHJcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBzdG9yYWdlLmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuY3JlYXRlVGFza0RPTShrZXksIGN1cnJlbnRQcm9qZWN0W2tleV0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZURlc2NyaXB0aW9uVmlzaWJpbGl0eSh0YXNrRWxlbWVudCwgYW5nbGVJY29uKSB7XHJcbiAgICB0YXNrRWxlbWVudC5jaGlsZHJlblsxXS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgIGFuZ2xlSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdmYS1hbmdsZS1kb3duJyk7XHJcbiAgICBhbmdsZUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnZmEtYW5nbGUtdXAnKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5OyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXkuanMnO1xyXG5pbXBvcnQge1Rhc2t9IGZyb20gJy4vdGFza3MuanMnO1xyXG5pbXBvcnQgdGFza011dGF0b3IgZnJvbSAnLi90YXNrcy5qcyc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vbG9jYWwuanMnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XHJcbiAgcmV0dXJuIHV1aWR2NCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVTdWJtaXQoZm9ybURhdGEpIHtcclxuICBsZXQgdGl0bGUgPSBmb3JtRGF0YS5nZXQoJ3RpdGxlJyk7XHJcbiAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbicpXHJcbiAgbGV0IGR1ZURhdGUgPSBmb3JtRGF0YS5nZXQoJ2R1ZURhdGUnKTtcclxuXHJcbiAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpO1xyXG5cclxuICBzdG9yYWdlLnVwZGF0ZVRhc2soZ2VuZXJhdGVJZCgpLCB0YXNrKVxyXG4gIGRpc3BsYXkudXBkYXRlQ29udGFpbmVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVRhc2tDbGljayh0YXJnZXQsIHRhc2tFbGVtZW50KSB7XHJcbiAgbGV0IHRhc2tJZCA9IHRhc2tFbGVtZW50LmlkO1xyXG4gIGxldCB0YXNrT2JqZWN0ID0gc3RvcmFnZS5nZXRDdXJyZW50UHJvamVjdCgpW3Rhc2tJZF07XHJcblxyXG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1zdGFyJykpIHtcclxuICAgIHRhc2tPYmplY3QgPSB0YXNrTXV0YXRvci5jaGFuZ2VQcmlvcml0eSh0YXNrT2JqZWN0KTtcclxuICAgIHN0b3JhZ2UudXBkYXRlVGFzayh0YXNrSWQsIHRhc2tPYmplY3QpO1xyXG4gICAgZGlzcGxheS51cGRhdGVDb250YWluZXIoKTtcclxuXHJcbiAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS10cmFzaCcpKSB7XHJcbiAgICBzdG9yYWdlLnJlbW92ZVRhc2sodGFza0lkKTtcclxuICAgIGRpc3BsYXkudXBkYXRlQ29udGFpbmVyKCk7XHJcblxyXG4gIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtYW5nbGUtZG93bicpIHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWFuZ2xlLXVwJykpIHtcclxuICAgIGRpc3BsYXkuY2hhbmdlRGVzY3JpcHRpb25WaXNpYmlsaXR5KHRhc2tFbGVtZW50LCB0YXJnZXQpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgdGFza09iamVjdCA9IHRhc2tNdXRhdG9yLmNoYW5nZVRhc2tTdGF0dXModGFza09iamVjdCk7XHJcbiAgICBzdG9yYWdlLnVwZGF0ZVRhc2sodGFza0lkLCB0YXNrT2JqZWN0KTtcclxuICAgIGRpc3BsYXkudXBkYXRlQ29udGFpbmVyKCk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC10YXNrLWJ0bl0nKVxyXG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC10YXNrLWZvcm1dJyk7XHJcbmNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC10YXNrLW1vZGFsXScpXHJcbmNvbnN0IGNhbmNlbE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2FuY2VsLW1vZGFsXScpO1xyXG5jb25zdCBjb250YWluZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbnRhaW5lci10aXRsZV0nKTtcclxuXHJcbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICBhZGRUYXNrRm9ybS5yZXNldCgpO1xyXG4gIGFkZFRhc2tNb2RhbC5zaG93TW9kYWwoKTtcclxufSlcclxuXHJcbmNhbmNlbE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgYWRkVGFza01vZGFsLmNsb3NlKCk7XHJcbn0pXHJcblxyXG5hZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbigpIHtcclxuICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgaGFuZGxlU3VibWl0KGZvcm1EYXRhKTtcclxufSlcclxuXHJcbmRpc3BsYXkudXBkYXRlQ29udGFpbmVyKCk7XHJcblxyXG4vL1RPRE8gbmV3IHByb2plY3Q7IiwiY2xhc3MgTG9jYWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fY3VycmVudFByb2plY3ROYW1lID0gJ2dlbmVyYWwnO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGFzayh0YXNrSWQsIHRhc2tPYmplY3QpIHtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdFRhc2tzID0gdGhpcy5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgY3VycmVudFByb2plY3RUYXNrc1t0YXNrSWRdID0gdGFza09iamVjdDtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9jdXJyZW50UHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0VGFza3MpKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRhc2sodGFza0lkKSB7XHJcbiAgICBsZXQgY3VycmVudFByb2plY3RUYXNrcyA9IHRoaXMuZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgIGRlbGV0ZSBjdXJyZW50UHJvamVjdFRhc2tzW3Rhc2tJZF07XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fY3VycmVudFByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdFRhc2tzKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFByb2plY3QoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9jdXJyZW50UHJvamVjdE5hbWUpKTtcclxuICB9XHJcblxyXG4gIHNldCBjdXJyZW50UHJvamVjdE5hbWUodmFsdWUpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRQcm9qZWN0TmFtZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RvcmFnZSA9IG5ldyBMb2NhbCgpO1xyXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlO1xyXG5cclxuIiwiZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlLnRyaW0oKTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi50cmltKCkgfHwgJ05vIERlc2NyaXB0aW9uJztcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gJ3N0YW5kYXJkJztcclxuICAgIHRoaXMuc3RhdHVzID0gJ3VuZmluaXNoZWQnO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGFza011dGF0b3Ige1xyXG4gIGNoYW5nZVByaW9yaXR5KHRhc2tPYmplY3QpIHtcclxuICAgIHRhc2tPYmplY3QucHJpb3JpdHkgPSAodGFza09iamVjdC5wcmlvcml0eSA9PSAnc3RhbmRhcmQnKSA/ICdoaWdoJyA6ICdzdGFuZGFyZCc7XHJcbiAgICByZXR1cm4gdGFza09iamVjdDtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRhc2tTdGF0dXModGFza09iamVjdCkge1xyXG4gICAgdGFza09iamVjdC5zdGF0dXMgPSAodGFza09iamVjdC5zdGF0dXMgPT0gJ3VuZmluaXNoZWQnKSA/ICdmaW5pc2hlZCcgOiAndW5maW5pc2hlZCc7XHJcbiAgICByZXR1cm4gdGFza09iamVjdDtcclxuICB9XHJcbn1cclxuXHJcbmxldCB0YXNrTXV0YXRvciA9IG5ldyBUYXNrTXV0YXRvcjtcclxuZXhwb3J0IGRlZmF1bHQgdGFza011dGF0b3I7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==