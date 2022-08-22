import "./style.scss";
import display from './display.js';
import {Task} from './tasks.js';
import taskMutator from './tasks.js';

function handleSubmit(formData) {
  let title = formData.get('title');
  let description = formData.get('description')
  let dueDate = formData.get('dueDate');

  let task = new Task(title, description, dueDate);

  taskMutator.tasks.push(task);
  display.updateContainer();
}

const addTaskButton = document.querySelector('[data-add-task-btn]')
const addTaskForm = document.querySelector('[data-add-task-form]');
const addTaskModal = document.querySelector('[data-add-task-modal]')
const cancelModalButton = document.querySelector('[data-cancel-modal]');

addTaskButton.addEventListener('click', function() {
  addTaskModal.showModal();
})

cancelModalButton.addEventListener('click', function() {
  addTaskModal.close();
})

addTaskForm.addEventListener('submit', function() {
  let formData = new FormData(this);
  handleSubmit(formData);
})

//TODO taskMutator functions, new project, local storage;