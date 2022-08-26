import {Task} from './tasks.js';
import taskMutator from './tasks.js';
import display from './display.js';
import storage from './local.js';
import { v4 as uuidv4 } from 'uuid';

const containerTitle = document.querySelector('[data-container-title]');
const allTasksFolder = document.querySelector('[data-all-tasks]');

function generateId() {
  return uuidv4();
}

export function handleNewTask(formData) {
  let title = formData.get('title');
  let description = formData.get('description')
  let dueDate = formData.get('dueDate');
  let originProject = storage.currentProjectName;

  let task = new Task(title, description, dueDate, originProject);

  storage.updateTask(generateId(), task)
  display.updateContainer(storage.getCurrentProject());
}

export function handleTaskClick(target, taskElement) {
  let taskId = taskElement.id;
  let projectName = taskElement.dataset.originProject;
  let taskObject = storage.getProject(projectName)[taskId];

  if (target.classList.contains('fa-star')) {
    taskObject = taskMutator.changePriority(taskObject);
    storage.updateTask(taskId, taskObject, projectName);
    display.updateContainer(getFolderObject(storage.currentProjectName));

  } else if (target.classList.contains('fa-trash')) {
    storage.removeTask(taskId, projectName);
    display.updateContainer(getFolderObject(storage.currentProjectName));

  } else if (target.classList.contains('fa-angle-down') || target.classList.contains('fa-angle-up')) {
    display.changeDescriptionVisibility(taskElement, target);

  } else {
    taskObject = taskMutator.changeTaskStatus(taskObject);
    storage.updateTask(taskId, taskObject, projectName);
    display.updateContainer(getFolderObject(storage.currentProjectName));

  }
}

export function handleNewProject(formData) {
  let title = formData.get('title');

  if (['All Tasks', 'Today', 'Important'].includes(title)) {
    alert('No repeating names!')
    return;
  }

  storage.addProject(title);
  display.updateProjectsContainer();
}

export function handleFolderChange(target) {
  let title = target.children[1].innerText; //<span>General</span>

  containerTitle.innerText = title;
  storage.currentProjectName = title;

  display.changeActiveFolder(target)
  display.updateContainer(getFolderObject(title));
}

function getFolderObject(title) {
  if (!['All Tasks', 'Today', 'Important'].includes(title)) {
    return storage.getCurrentProject('');
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

export function handleProjectRemove(target) {
  let title = target.children[1].innerText; //title from span element
  storage.removeProject(title);
  display.updateProjectsContainer();

  if (target.classList.contains('active')) handleFolderChange(allTasksFolder);
}

display.updateContainer(storage.getCurrentProject());
display.updateProjectsContainer();