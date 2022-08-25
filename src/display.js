import { handleTaskClick } from './eventHandlers.js';

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
      handleTaskClick(targetElement, this);
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
export default display;