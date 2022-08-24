import "./style.scss";
import display from './display.js';
import {Task} from './tasks.js';
import taskMutator from './tasks.js';
import storage from './local.js';
import { v4 as uuidv4 } from 'uuid';

function generateId() {
  return uuidv4();
}

function handleSubmit(formData) {
  let title = formData.get('title');
  let description = formData.get('description')
  let dueDate = formData.get('dueDate');

  let task = new Task(title, description, dueDate);

  storage.updateTask(generateId(), task)
  display.updateContainer();
}

export default function handleTaskClick(target, taskElement) {
  let taskId = taskElement.id;
  let taskObject = storage.getCurrentProject()[taskId];

  if (target.classList.contains('fa-star')) {
    taskObject = taskMutator.changePriority(taskObject);
    storage.updateTask(taskId, taskObject);
    display.updateContainer();

  } else if (target.classList.contains('fa-trash')) {
    storage.removeTask(taskId);
    display.updateContainer();

  } else if (target.classList.contains('fa-angle-down') || target.classList.contains('fa-angle-up')) {
    display.changeDescriptionVisibility(taskElement, target);

  } else {
    taskObject = taskMutator.changeTaskStatus(taskObject);
    storage.updateTask(taskId, taskObject);
    display.updateContainer();

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

display.updateContainer();

//TODO new project;