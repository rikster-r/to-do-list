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

export default function handleTaskClick(target, taskElement) {
  let taskId = taskElement.id;
  let taskObject = taskMutator.findTask(taskId);

  if (target.classList.contains('fa-star')) {
    taskMutator.changePriority(taskObject);
    display.updateContainer();
  } else if (target.classList.contains('fa-trash')) {
    taskMutator.removeTask(taskObject);
    display.updateContainer();
  } else if (target.classList.contains('fa-angle-down') || target.classList.contains('fa-angle-up')) {
    display.changeDescriptionVisibility(taskElement, target);
  } else {
    taskMutator.changeTaskStatus(taskObject);
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

//TODO new project;