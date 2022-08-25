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

  let task = new Task(title, description, dueDate);

  storage.updateTask(generateId(), task)
  display.updateContainer(storage.getCurrentProject());
}

export function handleTaskClick(target, taskElement) {
  let taskId = taskElement.id;
  let taskObject = storage.getCurrentProject()[taskId];

  if (target.classList.contains('fa-star')) {
    taskObject = taskMutator.changePriority(taskObject);
    storage.updateTask(taskId, taskObject);
    display.updateContainer(storage.getCurrentProject());

  } else if (target.classList.contains('fa-trash')) {
    storage.removeTask(taskId);
    display.updateContainer(storage.getCurrentProject());

  } else if (target.classList.contains('fa-angle-down') || target.classList.contains('fa-angle-up')) {
    display.changeDescriptionVisibility(taskElement, target);

  } else {
    taskObject = taskMutator.changeTaskStatus(taskObject);
    storage.updateTask(taskId, taskObject);
    display.updateContainer(storage.getCurrentProject());

  }
}

export function handleNewProject(formData) {
  let title = formData.get('title');

  storage.addProject(title);
  display.updateProjectsContainer();
}

export function handleFolderChange(target) {
  let title = target.children[1].innerText; //<span>General</span>

  containerTitle.innerText = title;
  storage.currentProjectName = title;

  display.changeActiveFolder(target)
  display.updateContainer(storage.getCurrentProject());
}

export function handleProjectRemove(target) {
  console.log(target)
  let title = target.children[1].innerText;
  storage.removeProject(title);
  display.updateProjectsContainer();

  if (target.classList.contains('active')) handleFolderChange(allTasksFolder);
}

display.updateContainer(storage.getCurrentProject());
display.updateProjectsContainer();