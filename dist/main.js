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
    task.dataset.originProject = taskObject.originProject;

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

function generateId() {
  return (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

function handleNewTask(formData) {
  let title = formData.get('title');
  let description = formData.get('description')
  let dueDate = formData.get('dueDate');
  let originProject = _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].currentProjectName;

  let task = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate, originProject);

  _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateTask(generateId(), task)
  _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(_local_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject());
}

function handleTaskClick(target, taskElement) {
  let taskId = taskElement.id;
  let projectName = taskElement.dataset.originProject;
  let taskObject = _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(projectName)[taskId];

  if (target.classList.contains('fa-star')) {
    taskObject = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].changePriority(taskObject);
    _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateTask(taskId, taskObject, projectName);
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(getFolderObject(_local_js__WEBPACK_IMPORTED_MODULE_2__["default"].currentProjectName));

  } else if (target.classList.contains('fa-trash')) {
    _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeTask(taskId, projectName);
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(getFolderObject(_local_js__WEBPACK_IMPORTED_MODULE_2__["default"].currentProjectName));

  } else if (target.classList.contains('fa-angle-down') || target.classList.contains('fa-angle-up')) {
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].changeDescriptionVisibility(taskElement, target);

  } else {
    taskObject = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].changeTaskStatus(taskObject);
    _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateTask(taskId, taskObject, projectName);
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(getFolderObject(_local_js__WEBPACK_IMPORTED_MODULE_2__["default"].currentProjectName));

  }
}

function handleNewProject(formData) {
  let title = formData.get('title');

  if (['All Tasks', 'Today', 'Important'].includes(title)) {
    alert('No repeating names!')
    return;
  }

  _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(title);
  _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectsContainer();
}

function handleFolderChange(target) {
  let title = target.children[1].innerText; //<span>General</span>

  containerTitle.innerText = title;
  _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].currentProjectName = title;

  _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].changeActiveFolder(target)
  _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(getFolderObject(title));
}

function getFolderObject(title) {
  if (!['All Tasks', 'Today', 'Important'].includes(title)) {
    return _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject('');
  }

  let returnObject = {};

  for (let projectTitle of Object.keys(localStorage)) {
    let projectObject = JSON.parse(localStorage[projectTitle]);

    for (let taskId in projectObject) {
      switch (title) {
        case 'All Tasks':
          returnObject[taskId] = projectObject[taskId];
          break;
        case 'Today':
          let date = new Date();
          let yy = date.getFullYear();
          let mm = `${date.getMonth() + 1}`;
          mm = (mm.length === 1) ? `0${mm}` : mm; //add leading zero if month is 1 digit;
          let dd = date.getDate();
          let today = `${yy}-${mm}-${dd}`;

          if (projectObject[taskId].dueDate === today) {
            returnObject[taskId] = projectObject[taskId];
          }
          break;
        case 'Important':
          if (projectObject[taskId].priority === 'high') {
            returnObject[taskId] = projectObject[taskId];
          }
          break;
      }
    }
  }

  return returnObject;
}

function handleProjectRemove(target) {
  let title = target.children[1].innerText; //title from span element
  _local_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(title);
  _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectsContainer();

  if (target.classList.contains('active')) {
    handleFolderChange(document.querySelector('[data-projects-container] > *'));
  };
}

_display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateContainer(_local_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject());
_display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectsContainer();
handleFolderChange(document.querySelector('[data-projects-container] > *'))

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
    if (localStorage.length === 0) {
      this.addProject('General');
    }

    this.currentProjectName = Object.keys(localStorage)[0];
  }

  updateTask(taskId, taskObject, projectName = this.currentProjectName) {
    let currentProjectTasks = this.getProject(projectName);
    currentProjectTasks[taskId] = taskObject;

    localStorage.setItem(projectName, JSON.stringify(currentProjectTasks));
  }

  removeTask(taskId, projectName) {
    let currentProjectTasks = this.getProject(projectName);
    delete currentProjectTasks[taskId];

    localStorage.setItem(projectName, JSON.stringify(currentProjectTasks));
  }

  getProject(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  getCurrentProject() {
    return this.getProject(this.currentProjectName);
  }

  addProject(name) {
    localStorage.setItem(name, JSON.stringify({}));
  }

  removeProject(name) {
    localStorage.removeItem(name)
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
  constructor(title, description, dueDate, originProject) {
    this.title = title.trim();
    this.description = description.trim() || 'No Description';
    this.dueDate = dueDate;
    this.priority = 'standard';
    this.status = 'unfinished';
    this.originProject = originProject;
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
  addProjectForm.firstElementChild.focus();
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

  let target;
  if (e.target.parentElement.tagName == 'BUTTON') {
    target = e.target.parentElement;
  } else if (e.target.parentElement.tagName == 'svg') {
    target = e.target.parentElement.parentElement;
  } else {
    target = e.target
  }

  (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__.handleFolderChange)(target);
})

foldersContainer.addEventListener('click', function (e) {
  addTaskButton.classList.add('hidden');

  let target;
  if (e.target.parentElement.tagName == 'BUTTON') {
    target = e.target.parentElement;
  } else if (e.target.parentElement.tagName == 'svg') {
    target = e.target.parentElement.parentElement;
  } else {
    target = e.target
  }
  
  (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__.handleFolderChange)(target);
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDcEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUVBQWtCO0FBQ3BCLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2V2ZW50SGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2NhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHsgaGFuZGxlVGFza0NsaWNrIH0gZnJvbSAnLi9ldmVudEhhbmRsZXJzLmpzJztcclxuXHJcbmNsYXNzIERpc3BsYXkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2tzLWNvbnRhaW5lcl0nKTtcclxuICAgIHRoaXMucHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0cy1jb250YWluZXJdJyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUYXNrRE9NKGlkLCB0YXNrT2JqZWN0KSB7XHJcbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICBpZiAodGFza09iamVjdC5zdGF0dXMgPT09ICdmaW5pc2hlZCcpIHRhc2suY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKTtcclxuICAgIGlmICh0YXNrT2JqZWN0LnN0YXR1cyA9PT0gJ3VuZmluaXNoZWQnKSB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbmlzaGVkJyk7XHJcbiAgICB0YXNrLmlkID0gaWQudG9TdHJpbmcoKTtcclxuICAgIHRhc2suZGF0YXNldC5vcmlnaW5Qcm9qZWN0ID0gdGFza09iamVjdC5vcmlnaW5Qcm9qZWN0O1xyXG5cclxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IChlLnRhcmdldC50YWdOYW1lID09PSAncGF0aCcpID8gZS50YXJnZXQucGFyZW50RWxlbWVudCA6IGUudGFyZ2V0O1xyXG4gICAgICBoYW5kbGVUYXNrQ2xpY2sodGFyZ2V0RWxlbWVudCwgdGhpcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgdGFza01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tNYWluLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbWFpbicpO1xyXG4gICAgdGFzay5hcHBlbmQodGFza01haW4pO1xyXG5cclxuICAgIGxldCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xyXG4gICAgdGFza01haW4uYXBwZW5kKGxlZnRTaWRlKTtcclxuXHJcbiAgICBsZXQgY2hlY2tib3hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgY2hlY2tib3hJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInKTtcclxuICAgIGNoZWNrYm94SWNvbi5jbGFzc0xpc3QuYWRkKHRhc2tPYmplY3Quc3RhdHVzID09PSAndW5maW5pc2hlZCcgPyAnZmEtY2lyY2xlJyA6ICdmYS1jaXJjbGUtY2hlY2snKTtcclxuICAgIGxlZnRTaWRlLmFwcGVuZChjaGVja2JveEljb24pO1xyXG5cclxuICAgIGxldCB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0aXRsZVNwYW4uaW5uZXJUZXh0ID0gdGFza09iamVjdC50aXRsZTtcclxuICAgIGxlZnRTaWRlLmFwcGVuZCh0aXRsZVNwYW4pO1xyXG5cclxuXHJcbiAgICBsZXQgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcclxuICAgIHRhc2tNYWluLmFwcGVuZChyaWdodFNpZGUpO1xyXG5cclxuICAgIGxldCBkYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGRhdGVTcGFuLmlubmVyVGV4dCA9IHRhc2tPYmplY3QuZHVlRGF0ZTtcclxuICAgIHJpZ2h0U2lkZS5hcHBlbmQoZGF0ZVNwYW4pO1xyXG5cclxuICAgIGxldCBzdGFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIHN0YXJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXInKTtcclxuICAgIHN0YXJJY29uLmNsYXNzTGlzdC5hZGQodGFza09iamVjdC5wcmlvcml0eSA9PT0gJ2hpZ2gnID8gJ2ZhLXNvbGlkJyA6ICdmYS1yZWd1bGFyJyk7XHJcbiAgICByaWdodFNpZGUuYXBwZW5kKHN0YXJJY29uKTtcclxuXHJcbiAgICBsZXQgdHJhc2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXRyYXNoJyk7XHJcbiAgICByaWdodFNpZGUuYXBwZW5kKHRyYXNoSWNvbik7XHJcblxyXG4gICAgbGV0IGFuZ2xlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGFuZ2xlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1hbmdsZS1kb3duJyk7XHJcbiAgICByaWdodFNpZGUuYXBwZW5kKGFuZ2xlSWNvbik7XHJcblxyXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJywgJ2hpZGRlbicpO1xyXG4gICAgdGFzay5hcHBlbmQoZGVzYyk7XHJcblxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLmlubmVyVGV4dCA9IHRhc2tPYmplY3QuZGVzY3JpcHRpb247XHJcbiAgICBkZXNjLmFwcGVuZChwKTtcclxuXHJcbiAgICByZXR1cm4gdGFzaztcclxuICB9XHJcblxyXG4gIGNsZWFyQ29udGFpbmVyKGNvbnRhaW5lcikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29udGFpbmVyKHRhcmdldFByb2plY3QpIHtcclxuICAgIHRoaXMuY2xlYXJDb250YWluZXIodGhpcy50YXNrc0NvbnRhaW5lcik7XHJcblxyXG4gICAgZm9yIChsZXQga2V5IGluIHRhcmdldFByb2plY3QpIHtcclxuICAgICAgdGhpcy50YXNrc0NvbnRhaW5lci5hcHBlbmQodGhpcy5jcmVhdGVUYXNrRE9NKGtleSwgdGFyZ2V0UHJvamVjdFtrZXldKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VEZXNjcmlwdGlvblZpc2liaWxpdHkodGFza0VsZW1lbnQsIGFuZ2xlSWNvbikge1xyXG4gICAgdGFza0VsZW1lbnQuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICBhbmdsZUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnZmEtYW5nbGUtZG93bicpO1xyXG4gICAgYW5nbGVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWFuZ2xlLXVwJyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQcm9qZWN0RE9NKHRpdGxlKSB7XHJcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgIGxldCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWJhcnMnKTtcclxuICAgIHByb2plY3QuYXBwZW5kKG1lbnVJY29uKTtcclxuXHJcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNwYW4uaW5uZXJUZXh0ID0gdGl0bGU7XHJcbiAgICBwcm9qZWN0LmFwcGVuZChzcGFuKTtcclxuXHJcbiAgICBpZiAodGl0bGUgIT09ICdHZW5lcmFsJykge1xyXG4gICAgICBsZXQgY3Jvc3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBjcm9zc0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEteG1hcmsnLCAnY3Jvc3MtaWNvbicpO1xyXG4gICAgICBwcm9qZWN0LmFwcGVuZChjcm9zc0ljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUHJvamVjdHNDb250YWluZXIoKSB7XHJcbiAgICB0aGlzLmNsZWFyQ29udGFpbmVyKHRoaXMucHJvamVjdHNDb250YWluZXIpO1xyXG5cclxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdHNDb250YWluZXIuYXBwZW5kKHRoaXMuY3JlYXRlUHJvamVjdERPTShrZXkpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZUFjdGl2ZUZvbGRlcih0YXJnZXQpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2plY3RzLWNvbnRhaW5lcl0gPiAqJykuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZvbGRlcnMtY29udGFpbmVyXSA+IConKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH0pOztcclxuXHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiLCJpbXBvcnQge1Rhc2t9IGZyb20gJy4vdGFza3MuanMnO1xyXG5pbXBvcnQgdGFza011dGF0b3IgZnJvbSAnLi90YXNrcy5qcyc7XHJcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS5qcyc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vbG9jYWwuanMnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IGNvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY29udGFpbmVyLXRpdGxlXScpO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcclxuICByZXR1cm4gdXVpZHY0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVOZXdUYXNrKGZvcm1EYXRhKSB7XHJcbiAgbGV0IHRpdGxlID0gZm9ybURhdGEuZ2V0KCd0aXRsZScpO1xyXG4gIGxldCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKVxyXG4gIGxldCBkdWVEYXRlID0gZm9ybURhdGEuZ2V0KCdkdWVEYXRlJyk7XHJcbiAgbGV0IG9yaWdpblByb2plY3QgPSBzdG9yYWdlLmN1cnJlbnRQcm9qZWN0TmFtZTtcclxuXHJcbiAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIG9yaWdpblByb2plY3QpO1xyXG5cclxuICBzdG9yYWdlLnVwZGF0ZVRhc2soZ2VuZXJhdGVJZCgpLCB0YXNrKVxyXG4gIGRpc3BsYXkudXBkYXRlQ29udGFpbmVyKHN0b3JhZ2UuZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUYXNrQ2xpY2sodGFyZ2V0LCB0YXNrRWxlbWVudCkge1xyXG4gIGxldCB0YXNrSWQgPSB0YXNrRWxlbWVudC5pZDtcclxuICBsZXQgcHJvamVjdE5hbWUgPSB0YXNrRWxlbWVudC5kYXRhc2V0Lm9yaWdpblByb2plY3Q7XHJcbiAgbGV0IHRhc2tPYmplY3QgPSBzdG9yYWdlLmdldFByb2plY3QocHJvamVjdE5hbWUpW3Rhc2tJZF07XHJcblxyXG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1zdGFyJykpIHtcclxuICAgIHRhc2tPYmplY3QgPSB0YXNrTXV0YXRvci5jaGFuZ2VQcmlvcml0eSh0YXNrT2JqZWN0KTtcclxuICAgIHN0b3JhZ2UudXBkYXRlVGFzayh0YXNrSWQsIHRhc2tPYmplY3QsIHByb2plY3ROYW1lKTtcclxuICAgIGRpc3BsYXkudXBkYXRlQ29udGFpbmVyKGdldEZvbGRlck9iamVjdChzdG9yYWdlLmN1cnJlbnRQcm9qZWN0TmFtZSkpO1xyXG5cclxuICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXRyYXNoJykpIHtcclxuICAgIHN0b3JhZ2UucmVtb3ZlVGFzayh0YXNrSWQsIHByb2plY3ROYW1lKTtcclxuICAgIGRpc3BsYXkudXBkYXRlQ29udGFpbmVyKGdldEZvbGRlck9iamVjdChzdG9yYWdlLmN1cnJlbnRQcm9qZWN0TmFtZSkpO1xyXG5cclxuICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWFuZ2xlLWRvd24nKSB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1hbmdsZS11cCcpKSB7XHJcbiAgICBkaXNwbGF5LmNoYW5nZURlc2NyaXB0aW9uVmlzaWJpbGl0eSh0YXNrRWxlbWVudCwgdGFyZ2V0KTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHRhc2tPYmplY3QgPSB0YXNrTXV0YXRvci5jaGFuZ2VUYXNrU3RhdHVzKHRhc2tPYmplY3QpO1xyXG4gICAgc3RvcmFnZS51cGRhdGVUYXNrKHRhc2tJZCwgdGFza09iamVjdCwgcHJvamVjdE5hbWUpO1xyXG4gICAgZGlzcGxheS51cGRhdGVDb250YWluZXIoZ2V0Rm9sZGVyT2JqZWN0KHN0b3JhZ2UuY3VycmVudFByb2plY3ROYW1lKSk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU5ld1Byb2plY3QoZm9ybURhdGEpIHtcclxuICBsZXQgdGl0bGUgPSBmb3JtRGF0YS5nZXQoJ3RpdGxlJyk7XHJcblxyXG4gIGlmIChbJ0FsbCBUYXNrcycsICdUb2RheScsICdJbXBvcnRhbnQnXS5pbmNsdWRlcyh0aXRsZSkpIHtcclxuICAgIGFsZXJ0KCdObyByZXBlYXRpbmcgbmFtZXMhJylcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHN0b3JhZ2UuYWRkUHJvamVjdCh0aXRsZSk7XHJcbiAgZGlzcGxheS51cGRhdGVQcm9qZWN0c0NvbnRhaW5lcigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRm9sZGVyQ2hhbmdlKHRhcmdldCkge1xyXG4gIGxldCB0aXRsZSA9IHRhcmdldC5jaGlsZHJlblsxXS5pbm5lclRleHQ7IC8vPHNwYW4+R2VuZXJhbDwvc3Bhbj5cclxuXHJcbiAgY29udGFpbmVyVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XHJcbiAgc3RvcmFnZS5jdXJyZW50UHJvamVjdE5hbWUgPSB0aXRsZTtcclxuXHJcbiAgZGlzcGxheS5jaGFuZ2VBY3RpdmVGb2xkZXIodGFyZ2V0KVxyXG4gIGRpc3BsYXkudXBkYXRlQ29udGFpbmVyKGdldEZvbGRlck9iamVjdCh0aXRsZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb2xkZXJPYmplY3QodGl0bGUpIHtcclxuICBpZiAoIVsnQWxsIFRhc2tzJywgJ1RvZGF5JywgJ0ltcG9ydGFudCddLmluY2x1ZGVzKHRpdGxlKSkge1xyXG4gICAgcmV0dXJuIHN0b3JhZ2UuZ2V0Q3VycmVudFByb2plY3QoJycpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHJldHVybk9iamVjdCA9IHt9O1xyXG5cclxuICBmb3IgKGxldCBwcm9qZWN0VGl0bGUgb2YgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSkge1xyXG4gICAgbGV0IHByb2plY3RPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtwcm9qZWN0VGl0bGVdKTtcclxuXHJcbiAgICBmb3IgKGxldCB0YXNrSWQgaW4gcHJvamVjdE9iamVjdCkge1xyXG4gICAgICBzd2l0Y2ggKHRpdGxlKSB7XHJcbiAgICAgICAgY2FzZSAnQWxsIFRhc2tzJzpcclxuICAgICAgICAgIHJldHVybk9iamVjdFt0YXNrSWRdID0gcHJvamVjdE9iamVjdFt0YXNrSWRdO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnVG9kYXknOlxyXG4gICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgbGV0IHl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgbGV0IG1tID0gYCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gO1xyXG4gICAgICAgICAgbW0gPSAobW0ubGVuZ3RoID09PSAxKSA/IGAwJHttbX1gIDogbW07IC8vYWRkIGxlYWRpbmcgemVybyBpZiBtb250aCBpcyAxIGRpZ2l0O1xyXG4gICAgICAgICAgbGV0IGRkID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgICBsZXQgdG9kYXkgPSBgJHt5eX0tJHttbX0tJHtkZH1gO1xyXG5cclxuICAgICAgICAgIGlmIChwcm9qZWN0T2JqZWN0W3Rhc2tJZF0uZHVlRGF0ZSA9PT0gdG9kYXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuT2JqZWN0W3Rhc2tJZF0gPSBwcm9qZWN0T2JqZWN0W3Rhc2tJZF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdJbXBvcnRhbnQnOlxyXG4gICAgICAgICAgaWYgKHByb2plY3RPYmplY3RbdGFza0lkXS5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XHJcbiAgICAgICAgICAgIHJldHVybk9iamVjdFt0YXNrSWRdID0gcHJvamVjdE9iamVjdFt0YXNrSWRdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXR1cm5PYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0UmVtb3ZlKHRhcmdldCkge1xyXG4gIGxldCB0aXRsZSA9IHRhcmdldC5jaGlsZHJlblsxXS5pbm5lclRleHQ7IC8vdGl0bGUgZnJvbSBzcGFuIGVsZW1lbnRcclxuICBzdG9yYWdlLnJlbW92ZVByb2plY3QodGl0bGUpO1xyXG4gIGRpc3BsYXkudXBkYXRlUHJvamVjdHNDb250YWluZXIoKTtcclxuXHJcbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICBoYW5kbGVGb2xkZXJDaGFuZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdHMtY29udGFpbmVyXSA+IConKSk7XHJcbiAgfTtcclxufVxyXG5cclxuZGlzcGxheS51cGRhdGVDb250YWluZXIoc3RvcmFnZS5nZXRDdXJyZW50UHJvamVjdCgpKTtcclxuZGlzcGxheS51cGRhdGVQcm9qZWN0c0NvbnRhaW5lcigpO1xyXG5oYW5kbGVGb2xkZXJDaGFuZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdHMtY29udGFpbmVyXSA+IConKSkiLCJjbGFzcyBMb2NhbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmFkZFByb2plY3QoJ0dlbmVyYWwnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSlbMF07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYXNrKHRhc2tJZCwgdGFza09iamVjdCwgcHJvamVjdE5hbWUgPSB0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSkge1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0VGFza3MgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgY3VycmVudFByb2plY3RUYXNrc1t0YXNrSWRdID0gdGFza09iamVjdDtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3RUYXNrcykpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVGFzayh0YXNrSWQsIHByb2plY3ROYW1lKSB7XHJcbiAgICBsZXQgY3VycmVudFByb2plY3RUYXNrcyA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBkZWxldGUgY3VycmVudFByb2plY3RUYXNrc1t0YXNrSWRdO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdFRhc2tzKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0KG5hbWUpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRQcm9qZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvamVjdCh0aGlzLmN1cnJlbnRQcm9qZWN0TmFtZSk7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KG5hbWUpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KHt9KSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KG5hbWUpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdG9yYWdlID0gbmV3IExvY2FsKCk7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7XHJcblxyXG4iLCJleHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBvcmlnaW5Qcm9qZWN0KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGUudHJpbSgpO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnRyaW0oKSB8fCAnTm8gRGVzY3JpcHRpb24nO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSAnc3RhbmRhcmQnO1xyXG4gICAgdGhpcy5zdGF0dXMgPSAndW5maW5pc2hlZCc7XHJcbiAgICB0aGlzLm9yaWdpblByb2plY3QgPSBvcmlnaW5Qcm9qZWN0O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGFza011dGF0b3Ige1xyXG4gIGNoYW5nZVByaW9yaXR5KHRhc2tPYmplY3QpIHtcclxuICAgIHRhc2tPYmplY3QucHJpb3JpdHkgPSAodGFza09iamVjdC5wcmlvcml0eSA9PSAnc3RhbmRhcmQnKSA/ICdoaWdoJyA6ICdzdGFuZGFyZCc7XHJcbiAgICByZXR1cm4gdGFza09iamVjdDtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRhc2tTdGF0dXModGFza09iamVjdCkge1xyXG4gICAgdGFza09iamVjdC5zdGF0dXMgPSAodGFza09iamVjdC5zdGF0dXMgPT0gJ3VuZmluaXNoZWQnKSA/ICdmaW5pc2hlZCcgOiAndW5maW5pc2hlZCc7XHJcbiAgICByZXR1cm4gdGFza09iamVjdDtcclxuICB9XHJcbn1cclxuXHJcbmxldCB0YXNrTXV0YXRvciA9IG5ldyBUYXNrTXV0YXRvcjtcclxuZXhwb3J0IGRlZmF1bHQgdGFza011dGF0b3I7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgaGFuZGxlTmV3VGFzaywgaGFuZGxlTmV3UHJvamVjdCwgaGFuZGxlRm9sZGVyQ2hhbmdlLCBoYW5kbGVQcm9qZWN0UmVtb3ZlIH0gZnJvbSAnLi9ldmVudEhhbmRsZXJzLmpzJztcclxuXHJcbmNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC10YXNrLW1vZGFsXScpO1xyXG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC10YXNrLWZvcm1dJyk7XHJcbmNvbnN0IGNhbmNlbE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2FuY2VsLW1vZGFsXScpO1xyXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWRkLXRhc2stYnRuXScpXHJcblxyXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWRkLXByb2plY3RdJyk7XHJcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWRkLXByb2plY3QtZm9ybV0nKTtcclxuY29uc3QgY2FuY2VsUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNhbmNlbC1wcm9qZWN0XScpO1xyXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3RzLWNvbnRhaW5lcl0nKTtcclxuY29uc3QgZm9sZGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvbGRlcnMtY29udGFpbmVyXScpO1xyXG5cclxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBhZGRUYXNrRm9ybS5yZXNldCgpO1xyXG4gIGFkZFRhc2tNb2RhbC5zaG93TW9kYWwoKTtcclxufSlcclxuXHJcbmNhbmNlbE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGFkZFRhc2tNb2RhbC5jbG9zZSgpO1xyXG59KVxyXG5cclxuYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICBoYW5kbGVOZXdUYXNrKGZvcm1EYXRhKTtcclxufSlcclxuXHJcbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xyXG4gIGFkZFByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGFkZFByb2plY3RGb3JtLmZpcnN0RWxlbWVudENoaWxkLmZvY3VzKCk7XHJcbn0pXHJcblxyXG5hZGRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBhZGRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gIGhhbmRsZU5ld1Byb2plY3QoZm9ybURhdGEpXHJcbn0pXHJcblxyXG5jYW5jZWxQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgYWRkUHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn0pXHJcblxyXG5wcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MtaWNvbicpKSB7XHJcbiAgICBoYW5kbGVQcm9qZWN0UmVtb3ZlKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IHRhcmdldDtcclxuICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC50YWdOYW1lID09ICdCVVRUT04nKSB7XHJcbiAgICB0YXJnZXQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC50YWdOYW1lID09ICdzdmcnKSB7XHJcbiAgICB0YXJnZXQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGb2xkZXJDaGFuZ2UodGFyZ2V0KTtcclxufSlcclxuXHJcbmZvbGRlcnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gIGxldCB0YXJnZXQ7XHJcbiAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQudGFnTmFtZSA9PSAnQlVUVE9OJykge1xyXG4gICAgdGFyZ2V0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQudGFnTmFtZSA9PSAnc3ZnJykge1xyXG4gICAgdGFyZ2V0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXJnZXQgPSBlLnRhcmdldFxyXG4gIH1cclxuICBcclxuICBoYW5kbGVGb2xkZXJDaGFuZ2UodGFyZ2V0KTtcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==