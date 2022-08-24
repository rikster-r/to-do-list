import "./style.scss";
import display from './display.js';
import {handleNewTask} from './eventHandlers.js';

const addTaskModal = document.querySelector('[data-add-task-modal]');
const addTaskForm = document.querySelector('[data-add-task-form]');
const cancelModalButton = document.querySelector('[data-cancel-modal]');
const addTaskButton = document.querySelector('[data-add-task-btn]')

const containerTitle = document.querySelector('[data-container-title]');
const addProjectButton = document.querySelector('[data-add-project]');
const addProjectForm = document.querySelector('[data-add-project-form]');
const cancelProjectButton = document.querySelector('[data-cancel-project]');

addTaskButton.addEventListener('click', function() {
  addTaskForm.reset();
  addTaskModal.showModal();
})

cancelModalButton.addEventListener('click', function() {
  addTaskModal.close();
})

addTaskForm.addEventListener('submit', function() {
  let formData = new FormData(this);
  handleNewTask(formData);
})

addProjectButton.addEventListener('click', function() {
  addProjectButton.classList.add('hidden');
  addProjectForm.reset();
  addProjectForm.classList.remove('hidden');
})

cancelProjectButton.addEventListener('click', function() {
  addProjectButton.classList.remove('hidden');
  addProjectForm.classList.add('hidden');
})


display.updateContainer();

//TODO new project;