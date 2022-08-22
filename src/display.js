import taskMutator from './tasks.js';

class Display {
  constructor() {
    this.container = document.querySelector('[data-tasks-container]');
  }

  createTaskDOM(taskObject) {
    let task = document.createElement('button');
    task.classList.add('task');
    if (taskObject.status === 'finished') task.classList.add('finished');
    if (taskObject.status === 'unfinished') task.classList.remove('finished');
    task.id = taskObject.id;
    task.addEventListener('click', function (e) {
      let targetElement = (e.target.tagName === 'path') ?  e.target.parentElement : e.target;
      taskMutator.handleTaskClick(targetElement, this);
    });

    let leftSide = document.createElement('div');
    leftSide.classList.add('left');
    task.append(leftSide);

    let checkboxIcon = document.createElement('i');
    checkboxIcon.classList.add('fa-regular');
    checkboxIcon.classList.add(taskObject.status === 'unfinished' ? 'fa-circle' : 'fa-circle-check');
    leftSide.append(checkboxIcon);

    let titleSpan = document.createElement('span');
    titleSpan.innerText = taskObject.title;
    leftSide.append(titleSpan);


    let rightSide = document.createElement('div');
    rightSide.classList.add('right');
    task.append(rightSide);

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

    return task;
  }

  clearContainer() {
    this.container.innerHTML = '';
  }

  updateContainer() {
    this.clearContainer();

    taskMutator.tasks.forEach(item => {
      this.container.append(this.createTaskDOM(item));
    })
  }
}

const display = new Display();
export default display;