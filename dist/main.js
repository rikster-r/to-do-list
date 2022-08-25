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
/* harmony import */ var _eventHandlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventHandlers.js */ "./src/eventHandlers.js");


class Display {
  constructor() {
    this.tasksContainer = document.querySelector('[data-tasks-container]');
    this.projectsContainer = document.querySelector('[data-projects-container]');
  }

  createTaskDOM(id, taskObject) {
    let task = document.createElement('button');
    task.classList.add('task');
    if (taskObject.status === 'finished') task.classList.add('finished');
    if (taskObject.status === 'unfinished') task.classList.remove('finished');
    task.id = id.toString();
    task.addEventListener('click', function (e) {
      let targetElement = (e.target.tagName === 'path') ? e.target.parentElement : e.target;
      (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_0__.handleTaskClick)(targetElement, this);
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

  clearContainer(container) {
    container.innerHTML = '';
  }

  updateContainer(targetProject) {
    this.clearContainer(this.tasksContainer);

    for (let key in targetProject) {
      this.tasksContainer.append(this.createTaskDOM(key, targetProject[key]));
    }
  }

  changeDescriptionVisibility(taskElement, angleIcon) {
    taskElement.children[1].classList.toggle('hidden');
    angleIcon.classList.toggle('fa-angle-down');
    angleIcon.classList.toggle('fa-angle-up');
  }

  createProjectDOM(title) {
    let project = document.createElement('button');
    project.classList.add('folder');

    let menuIcon = document.createElement('i');
    menuIcon.classList.add('fa-solid', 'fa-bars');
    project.append(menuIcon);

    let span = document.createElement('span');
    span.innerText = title;
    project.append(span);

    if (title !== 'General') {
      let crossIcon = document.createElement('i');
      crossIcon.classList.add('fa-solid', 'fa-xmark', 'cross-icon');
      project.append(crossIcon);
    }

    return project;
  }

  updateProjectsContainer() {
    this.clearContainer(this.projectsContainer);

    for (let key of Object.keys(localStorage)) {
      this.projectsContainer.append(this.createProjectDOM(key));
    }
  }

  changeActiveFolder(target) {
    document.querySelectorAll('[data-projects-container] > *').forEach(button => {
      button.classList.remove('active');
    });
    document.querySelectorAll('[data-folders-container] > *').forEach(button => {
      button.classList.remove('active');
    });;

    target.classList.add('active');
  }
}

const display = new Display();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

/***/ }),

/***/ "./src/eventHandlers.js":
/*!******************************!*\
  !*** ./src/eventHandlers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleFolderChange": () => (/* binding */ handleFolderChange),
/* harmony export */   "handleNewProject": () => (/* binding */ handleNewProject),
/* harmony export */   "handleNewTask": () => (/* binding */ handleNewTask),
/* harmony export */   "handleProjectRemove": () => (/* binding */ handleProjectRemove),
/* harmony export */   "handleTaskClick": () => (/* binding */ handleTaskClick)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local.js */ "./src/local.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");






const containerTitle = document.querySelector('[data-container-title]');
const allTasksFolder = document.querySelector('[data-all-tasks]');

function generateId() {
  return (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

function handleNewTask(formData) {
  let title = formData.get('title');
  let description = formData.get('description')
  let dueDate = formData.get('dueDate');

  let task = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate);

  _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateTask(generateId(), task)
  _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(_local_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject());
}

function handleTaskClick(target, taskElement) {
  let taskId = taskElement.id;
  let taskObject = _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject()[taskId];

  if (target.classList.contains('fa-star')) {
    taskObject = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].changePriority(taskObject);
    _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateTask(taskId, taskObject);
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(_local_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject());

  } else if (target.classList.contains('fa-trash')) {
    _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeTask(taskId);
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(_local_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject());

  } else if (target.classList.contains('fa-angle-down') || target.classList.contains('fa-angle-up')) {
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].changeDescriptionVisibility(taskElement, target);

  } else {
    taskObject = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].changeTaskStatus(taskObject);
    _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateTask(taskId, taskObject);
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(_local_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject());

  }
}

function handleNewProject(formData) {
  let title = formData.get('title');

  _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(title);
  _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectsContainer();
}

function handleFolderChange(target) {
  let title = target.children[1].innerText; //<span>General</span>

  containerTitle.innerText = title;
  _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].currentProjectName = title;

  _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].changeActiveFolder(target)
  _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(_local_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject());
}

function handleProjectRemove(target) {
  console.log(target)
  let title = target.children[1].innerText;
  _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(title);
  _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectsContainer();

  if (target.classList.contains('active')) handleFolderChange(allTasksFolder);
}

_display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(_local_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject());
_display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectsContainer();

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
    this._currentProjectName = 'General';

    if (localStorage.length === 0) {
      localStorage.setItem('General', JSON.stringify({}));
    }
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

  getCurrentProject() {
    return JSON.parse(localStorage.getItem(this._currentProjectName));
  }

  addProject(name) {
    localStorage.setItem(name, JSON.stringify({}));
  }

  removeProject(name) {
    localStorage.removeItem(name)
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventHandlers.js */ "./src/eventHandlers.js");



const addTaskModal = document.querySelector('[data-add-task-modal]');
const addTaskForm = document.querySelector('[data-add-task-form]');
const cancelModalButton = document.querySelector('[data-cancel-modal]');
const addTaskButton = document.querySelector('[data-add-task-btn]')

const addProjectButton = document.querySelector('[data-add-project]');
const addProjectForm = document.querySelector('[data-add-project-form]');
const cancelProjectButton = document.querySelector('[data-cancel-project]');
const projectsContainer = document.querySelector('[data-projects-container]');
const foldersContainer = document.querySelector('[data-folders-container]');

addTaskButton.addEventListener('click', function () {
  addTaskForm.reset();
  addTaskModal.showModal();
})

cancelModalButton.addEventListener('click', function () {
  addTaskModal.close();
})

addTaskForm.addEventListener('submit', function () {
  let formData = new FormData(this);
  (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__.handleNewTask)(formData);
})

addProjectButton.addEventListener('click', function () {
  addProjectButton.classList.add('hidden');
  addProjectForm.reset();
  addProjectForm.classList.remove('hidden');
})

addProjectForm.addEventListener('submit', function (e) {
  e.preventDefault();

  addProjectButton.classList.remove('hidden');
  addProjectForm.classList.add('hidden');

  let formData = new FormData(this);
  (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__.handleNewProject)(formData)
})

cancelProjectButton.addEventListener('click', function () {
  addProjectButton.classList.remove('hidden');
  addProjectForm.classList.add('hidden');
})

projectsContainer.addEventListener('click', function (e) {
  addTaskButton.classList.remove('hidden');

  if (e.target.classList.contains('cross-icon')) {
    (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__.handleProjectRemove)(e.target.parentElement);
    return;
  }
  let target = (e.target.parentElement.tagName == 'BUTTON' ? e.target.parentElement : e.target);
  (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__.handleFolderChange)(target);
})

foldersContainer.addEventListener('click', function (e) {
  addTaskButton.classList.add('hidden');

  let target = (e.target.parentElement.tagName == 'BUTTON' ? e.target.parentElement : e.target);
  (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__.handleFolderChange)(target);
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDd0Y7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdFQUFhO0FBQ2YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUVBQWdCO0FBQ2xCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxRUFBa0I7QUFDcEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFFQUFrQjtBQUNwQixDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ldmVudEhhbmRsZXJzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9jYWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB7IGhhbmRsZVRhc2tDbGljayB9IGZyb20gJy4vZXZlbnRIYW5kbGVycy5qcyc7XHJcblxyXG5jbGFzcyBEaXNwbGF5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrcy1jb250YWluZXJdJyk7XHJcbiAgICB0aGlzLnByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdHMtY29udGFpbmVyXScpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGFza0RPTShpZCwgdGFza09iamVjdCkge1xyXG4gICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgaWYgKHRhc2tPYmplY3Quc3RhdHVzID09PSAnZmluaXNoZWQnKSB0YXNrLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJyk7XHJcbiAgICBpZiAodGFza09iamVjdC5zdGF0dXMgPT09ICd1bmZpbmlzaGVkJykgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcpO1xyXG4gICAgdGFzay5pZCA9IGlkLnRvU3RyaW5nKCk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ3BhdGgnKSA/IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQgOiBlLnRhcmdldDtcclxuICAgICAgaGFuZGxlVGFza0NsaWNrKHRhcmdldEVsZW1lbnQsIHRoaXMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHRhc2tNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrTWFpbi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1haW4nKTtcclxuICAgIHRhc2suYXBwZW5kKHRhc2tNYWluKTtcclxuXHJcbiAgICBsZXQgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcclxuICAgIHRhc2tNYWluLmFwcGVuZChsZWZ0U2lkZSk7XHJcblxyXG4gICAgbGV0IGNoZWNrYm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGNoZWNrYm94SWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJyk7XHJcbiAgICBjaGVja2JveEljb24uY2xhc3NMaXN0LmFkZCh0YXNrT2JqZWN0LnN0YXR1cyA9PT0gJ3VuZmluaXNoZWQnID8gJ2ZhLWNpcmNsZScgOiAnZmEtY2lyY2xlLWNoZWNrJyk7XHJcbiAgICBsZWZ0U2lkZS5hcHBlbmQoY2hlY2tib3hJY29uKTtcclxuXHJcbiAgICBsZXQgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGl0bGVTcGFuLmlubmVyVGV4dCA9IHRhc2tPYmplY3QudGl0bGU7XHJcbiAgICBsZWZ0U2lkZS5hcHBlbmQodGl0bGVTcGFuKTtcclxuXHJcblxyXG4gICAgbGV0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XHJcbiAgICB0YXNrTWFpbi5hcHBlbmQocmlnaHRTaWRlKTtcclxuXHJcbiAgICBsZXQgZGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkYXRlU3Bhbi5pbm5lclRleHQgPSB0YXNrT2JqZWN0LmR1ZURhdGU7XHJcbiAgICByaWdodFNpZGUuYXBwZW5kKGRhdGVTcGFuKTtcclxuXHJcbiAgICBsZXQgc3Rhckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBzdGFySWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zdGFyJyk7XHJcbiAgICBzdGFySWNvbi5jbGFzc0xpc3QuYWRkKHRhc2tPYmplY3QucHJpb3JpdHkgPT09ICdoaWdoJyA/ICdmYS1zb2xpZCcgOiAnZmEtcmVndWxhcicpO1xyXG4gICAgcmlnaHRTaWRlLmFwcGVuZChzdGFySWNvbik7XHJcblxyXG4gICAgbGV0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS10cmFzaCcpO1xyXG4gICAgcmlnaHRTaWRlLmFwcGVuZCh0cmFzaEljb24pO1xyXG5cclxuICAgIGxldCBhbmdsZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBhbmdsZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtYW5nbGUtZG93bicpO1xyXG4gICAgcmlnaHRTaWRlLmFwcGVuZChhbmdsZUljb24pO1xyXG5cclxuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzYycsICdoaWRkZW4nKTtcclxuICAgIHRhc2suYXBwZW5kKGRlc2MpO1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC5pbm5lclRleHQgPSB0YXNrT2JqZWN0LmRlc2NyaXB0aW9uO1xyXG4gICAgZGVzYy5hcHBlbmQocCk7XHJcblxyXG4gICAgcmV0dXJuIHRhc2s7XHJcbiAgfVxyXG5cclxuICBjbGVhckNvbnRhaW5lcihjb250YWluZXIpIHtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbnRhaW5lcih0YXJnZXRQcm9qZWN0KSB7XHJcbiAgICB0aGlzLmNsZWFyQ29udGFpbmVyKHRoaXMudGFza3NDb250YWluZXIpO1xyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiB0YXJnZXRQcm9qZWN0KSB7XHJcbiAgICAgIHRoaXMudGFza3NDb250YWluZXIuYXBwZW5kKHRoaXMuY3JlYXRlVGFza0RPTShrZXksIHRhcmdldFByb2plY3Rba2V5XSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGVzY3JpcHRpb25WaXNpYmlsaXR5KHRhc2tFbGVtZW50LCBhbmdsZUljb24pIHtcclxuICAgIHRhc2tFbGVtZW50LmNoaWxkcmVuWzFdLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgYW5nbGVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWFuZ2xlLWRvd24nKTtcclxuICAgIGFuZ2xlSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdmYS1hbmdsZS11cCcpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHJvamVjdERPTSh0aXRsZSkge1xyXG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnZm9sZGVyJyk7XHJcblxyXG4gICAgbGV0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgbWVudUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtYmFycycpO1xyXG4gICAgcHJvamVjdC5hcHBlbmQobWVudUljb24pO1xyXG5cclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3Bhbi5pbm5lclRleHQgPSB0aXRsZTtcclxuICAgIHByb2plY3QuYXBwZW5kKHNwYW4pO1xyXG5cclxuICAgIGlmICh0aXRsZSAhPT0gJ0dlbmVyYWwnKSB7XHJcbiAgICAgIGxldCBjcm9zc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGNyb3NzSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS14bWFyaycsICdjcm9zcy1pY29uJyk7XHJcbiAgICAgIHByb2plY3QuYXBwZW5kKGNyb3NzSWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3Q7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcm9qZWN0c0NvbnRhaW5lcigpIHtcclxuICAgIHRoaXMuY2xlYXJDb250YWluZXIodGhpcy5wcm9qZWN0c0NvbnRhaW5lcik7XHJcblxyXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkpIHtcclxuICAgICAgdGhpcy5wcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQodGhpcy5jcmVhdGVQcm9qZWN0RE9NKGtleSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlQWN0aXZlRm9sZGVyKHRhcmdldCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvamVjdHMtY29udGFpbmVyXSA+IConKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZm9sZGVycy1jb250YWluZXJdID4gKicpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7O1xyXG5cclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5OyIsImltcG9ydCB7VGFza30gZnJvbSAnLi90YXNrcy5qcyc7XHJcbmltcG9ydCB0YXNrTXV0YXRvciBmcm9tICcuL3Rhc2tzLmpzJztcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LmpzJztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9sb2NhbC5qcyc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuY29uc3QgY29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb250YWluZXItdGl0bGVdJyk7XHJcbmNvbnN0IGFsbFRhc2tzRm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWxsLXRhc2tzXScpO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcclxuICByZXR1cm4gdXVpZHY0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVOZXdUYXNrKGZvcm1EYXRhKSB7XHJcbiAgbGV0IHRpdGxlID0gZm9ybURhdGEuZ2V0KCd0aXRsZScpO1xyXG4gIGxldCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKVxyXG4gIGxldCBkdWVEYXRlID0gZm9ybURhdGEuZ2V0KCdkdWVEYXRlJyk7XHJcblxyXG4gIGxldCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcclxuXHJcbiAgc3RvcmFnZS51cGRhdGVUYXNrKGdlbmVyYXRlSWQoKSwgdGFzaylcclxuICBkaXNwbGF5LnVwZGF0ZUNvbnRhaW5lcihzdG9yYWdlLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVGFza0NsaWNrKHRhcmdldCwgdGFza0VsZW1lbnQpIHtcclxuICBsZXQgdGFza0lkID0gdGFza0VsZW1lbnQuaWQ7XHJcbiAgbGV0IHRhc2tPYmplY3QgPSBzdG9yYWdlLmdldEN1cnJlbnRQcm9qZWN0KClbdGFza0lkXTtcclxuXHJcbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXN0YXInKSkge1xyXG4gICAgdGFza09iamVjdCA9IHRhc2tNdXRhdG9yLmNoYW5nZVByaW9yaXR5KHRhc2tPYmplY3QpO1xyXG4gICAgc3RvcmFnZS51cGRhdGVUYXNrKHRhc2tJZCwgdGFza09iamVjdCk7XHJcbiAgICBkaXNwbGF5LnVwZGF0ZUNvbnRhaW5lcihzdG9yYWdlLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xyXG5cclxuICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXRyYXNoJykpIHtcclxuICAgIHN0b3JhZ2UucmVtb3ZlVGFzayh0YXNrSWQpO1xyXG4gICAgZGlzcGxheS51cGRhdGVDb250YWluZXIoc3RvcmFnZS5nZXRDdXJyZW50UHJvamVjdCgpKTtcclxuXHJcbiAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1hbmdsZS1kb3duJykgfHwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtYW5nbGUtdXAnKSkge1xyXG4gICAgZGlzcGxheS5jaGFuZ2VEZXNjcmlwdGlvblZpc2liaWxpdHkodGFza0VsZW1lbnQsIHRhcmdldCk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXNrT2JqZWN0ID0gdGFza011dGF0b3IuY2hhbmdlVGFza1N0YXR1cyh0YXNrT2JqZWN0KTtcclxuICAgIHN0b3JhZ2UudXBkYXRlVGFzayh0YXNrSWQsIHRhc2tPYmplY3QpO1xyXG4gICAgZGlzcGxheS51cGRhdGVDb250YWluZXIoc3RvcmFnZS5nZXRDdXJyZW50UHJvamVjdCgpKTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTmV3UHJvamVjdChmb3JtRGF0YSkge1xyXG4gIGxldCB0aXRsZSA9IGZvcm1EYXRhLmdldCgndGl0bGUnKTtcclxuXHJcbiAgc3RvcmFnZS5hZGRQcm9qZWN0KHRpdGxlKTtcclxuICBkaXNwbGF5LnVwZGF0ZVByb2plY3RzQ29udGFpbmVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGb2xkZXJDaGFuZ2UodGFyZ2V0KSB7XHJcbiAgbGV0IHRpdGxlID0gdGFyZ2V0LmNoaWxkcmVuWzFdLmlubmVyVGV4dDsgLy88c3Bhbj5HZW5lcmFsPC9zcGFuPlxyXG5cclxuICBjb250YWluZXJUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcclxuICBzdG9yYWdlLmN1cnJlbnRQcm9qZWN0TmFtZSA9IHRpdGxlO1xyXG5cclxuICBkaXNwbGF5LmNoYW5nZUFjdGl2ZUZvbGRlcih0YXJnZXQpXHJcbiAgZGlzcGxheS51cGRhdGVDb250YWluZXIoc3RvcmFnZS5nZXRDdXJyZW50UHJvamVjdCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVByb2plY3RSZW1vdmUodGFyZ2V0KSB7XHJcbiAgY29uc29sZS5sb2codGFyZ2V0KVxyXG4gIGxldCB0aXRsZSA9IHRhcmdldC5jaGlsZHJlblsxXS5pbm5lclRleHQ7XHJcbiAgc3RvcmFnZS5yZW1vdmVQcm9qZWN0KHRpdGxlKTtcclxuICBkaXNwbGF5LnVwZGF0ZVByb2plY3RzQ29udGFpbmVyKCk7XHJcblxyXG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgaGFuZGxlRm9sZGVyQ2hhbmdlKGFsbFRhc2tzRm9sZGVyKTtcclxufVxyXG5cclxuZGlzcGxheS51cGRhdGVDb250YWluZXIoc3RvcmFnZS5nZXRDdXJyZW50UHJvamVjdCgpKTtcclxuZGlzcGxheS51cGRhdGVQcm9qZWN0c0NvbnRhaW5lcigpOyIsImNsYXNzIExvY2FsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRQcm9qZWN0TmFtZSA9ICdHZW5lcmFsJztcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnR2VuZXJhbCcsIEpTT04uc3RyaW5naWZ5KHt9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYXNrKHRhc2tJZCwgdGFza09iamVjdCkge1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0VGFza3MgPSB0aGlzLmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBjdXJyZW50UHJvamVjdFRhc2tzW3Rhc2tJZF0gPSB0YXNrT2JqZWN0O1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2N1cnJlbnRQcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RUYXNrcykpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVGFzayh0YXNrSWQpIHtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdFRhc2tzID0gdGhpcy5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgZGVsZXRlIGN1cnJlbnRQcm9qZWN0VGFza3NbdGFza0lkXTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9jdXJyZW50UHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0VGFza3MpKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRQcm9qZWN0KCkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fY3VycmVudFByb2plY3ROYW1lKSk7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KG5hbWUpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KHt9KSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KG5hbWUpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpXHJcbiAgfVxyXG5cclxuICBzZXQgY3VycmVudFByb2plY3ROYW1lKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50UHJvamVjdE5hbWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0b3JhZ2UgPSBuZXcgTG9jYWwoKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTtcclxuXHJcbiIsImV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZS50cmltKCk7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udHJpbSgpIHx8ICdObyBEZXNjcmlwdGlvbic7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9ICdzdGFuZGFyZCc7XHJcbiAgICB0aGlzLnN0YXR1cyA9ICd1bmZpbmlzaGVkJztcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFRhc2tNdXRhdG9yIHtcclxuICBjaGFuZ2VQcmlvcml0eSh0YXNrT2JqZWN0KSB7XHJcbiAgICB0YXNrT2JqZWN0LnByaW9yaXR5ID0gKHRhc2tPYmplY3QucHJpb3JpdHkgPT0gJ3N0YW5kYXJkJykgPyAnaGlnaCcgOiAnc3RhbmRhcmQnO1xyXG4gICAgcmV0dXJuIHRhc2tPYmplY3Q7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYXNrU3RhdHVzKHRhc2tPYmplY3QpIHtcclxuICAgIHRhc2tPYmplY3Quc3RhdHVzID0gKHRhc2tPYmplY3Quc3RhdHVzID09ICd1bmZpbmlzaGVkJykgPyAnZmluaXNoZWQnIDogJ3VuZmluaXNoZWQnO1xyXG4gICAgcmV0dXJuIHRhc2tPYmplY3Q7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgdGFza011dGF0b3IgPSBuZXcgVGFza011dGF0b3I7XHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tNdXRhdG9yOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGhhbmRsZU5ld1Rhc2ssIGhhbmRsZU5ld1Byb2plY3QsIGhhbmRsZUZvbGRlckNoYW5nZSwgaGFuZGxlUHJvamVjdFJlbW92ZSB9IGZyb20gJy4vZXZlbnRIYW5kbGVycy5qcyc7XHJcblxyXG5jb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGQtdGFzay1tb2RhbF0nKTtcclxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGQtdGFzay1mb3JtXScpO1xyXG5jb25zdCBjYW5jZWxNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNhbmNlbC1tb2RhbF0nKTtcclxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC10YXNrLWJ0bl0nKVxyXG5cclxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC1wcm9qZWN0XScpO1xyXG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC1wcm9qZWN0LWZvcm1dJyk7XHJcbmNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jYW5jZWwtcHJvamVjdF0nKTtcclxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0cy1jb250YWluZXJdJyk7XHJcbmNvbnN0IGZvbGRlcnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb2xkZXJzLWNvbnRhaW5lcl0nKTtcclxuXHJcbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgYWRkVGFza0Zvcm0ucmVzZXQoKTtcclxuICBhZGRUYXNrTW9kYWwuc2hvd01vZGFsKCk7XHJcbn0pXHJcblxyXG5jYW5jZWxNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBhZGRUYXNrTW9kYWwuY2xvc2UoKTtcclxufSlcclxuXHJcbmFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgaGFuZGxlTmV3VGFzayhmb3JtRGF0YSk7XHJcbn0pXHJcblxyXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcclxuICBhZGRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxufSlcclxuXHJcbmFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGFkZFByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgaGFuZGxlTmV3UHJvamVjdChmb3JtRGF0YSlcclxufSlcclxuXHJcbmNhbmNlbFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBhZGRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufSlcclxuXHJcbnByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcy1pY29uJykpIHtcclxuICAgIGhhbmRsZVByb2plY3RSZW1vdmUoZS50YXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGxldCB0YXJnZXQgPSAoZS50YXJnZXQucGFyZW50RWxlbWVudC50YWdOYW1lID09ICdCVVRUT04nID8gZS50YXJnZXQucGFyZW50RWxlbWVudCA6IGUudGFyZ2V0KTtcclxuICBoYW5kbGVGb2xkZXJDaGFuZ2UodGFyZ2V0KTtcclxufSlcclxuXHJcbmZvbGRlcnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gIGxldCB0YXJnZXQgPSAoZS50YXJnZXQucGFyZW50RWxlbWVudC50YWdOYW1lID09ICdCVVRUT04nID8gZS50YXJnZXQucGFyZW50RWxlbWVudCA6IGUudGFyZ2V0KTtcclxuICBoYW5kbGVGb2xkZXJDaGFuZ2UodGFyZ2V0KTtcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==