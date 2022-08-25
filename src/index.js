import "./style.scss";
import { handleNewTask, handleNewProject, handleFolderChange, handleProjectRemove } from './eventHandlers.js';

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
  handleNewTask(formData);
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
  handleNewProject(formData)
})

cancelProjectButton.addEventListener('click', function () {
  addProjectButton.classList.remove('hidden');
  addProjectForm.classList.add('hidden');
})

projectsContainer.addEventListener('click', function (e) {
  addTaskButton.classList.remove('hidden');

  if (e.target.classList.contains('cross-icon')) {
    handleProjectRemove(e.target.parentElement);
    return;
  }
  let target = (e.target.parentElement.tagName == 'BUTTON' ? e.target.parentElement : e.target);
  handleFolderChange(target);
})

foldersContainer.addEventListener('click', function (e) {
  addTaskButton.classList.add('hidden');

  let target = (e.target.parentElement.tagName == 'BUTTON' ? e.target.parentElement : e.target);
  handleFolderChange(target);
})

