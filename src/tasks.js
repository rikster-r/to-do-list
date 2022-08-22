import { v4 as uuidv4 } from 'uuid';
import display from './display.js';

export class Task {
  constructor(title, description, dueDate) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = 'standard';
    this._id = this.generateId();
    this._status = 'unfinished';
  }

  generateId() {
    return uuidv4();
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    if (value != 'high' && value != 'standard') return;
    this._priority = value;
  }

  get id() {
    return this._id;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    if (value != 'unfinished' && value != 'finished') return;
    this._status = value;
  }
}

class TaskMutator {
  constructor() {
    this.tasks = [];
  }

  findTask(taskId) {
    return this.tasks.filter(obj => {
      return obj.id == taskId;
    })[0];
  }

  changePriority(taskObject) {
    taskObject.priority = (taskObject.priority == 'standard') ? 'high' : 'standard';
  }

  removeTask(taskObject) {
    this.tasks = this.tasks.filter(obj => {
      return obj.id != taskObject.id;
    });
  }

  showDescription(taskObject) {
    
  }

  changeTaskStatus(taskObject) {
    taskObject.status = (taskObject.status == 'unfinished') ? 'finished' : 'unfinished';
  }

  handleTaskClick(target, taskElement) {
    let taskId = taskElement.id;
    let taskObject = this.findTask(taskId);
  
    if (target.classList.contains('fa-star')) {
      this.changePriority(taskObject);
    } else if (target.classList.contains('fa-trash')) {
      this.removeTask(taskObject);
    } else if (target.classList.contains('fa-angle-down')) {
      this.showDescription(taskObject);
    } else {
      this.changeTaskStatus(taskObject);
    }

    display.updateContainer();
  }
}



let taskMutator = new TaskMutator;
export default taskMutator;