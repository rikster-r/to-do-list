class Local {
  constructor() {
    this._currentProjectName = 'general';

    if (localStorage.length === 0) {
      localStorage.setItem('general', JSON.stringify({}));
    }
  }

  updateTask(taskId, taskObject) {
    let currentProjectTasks = this.getCurrentProject();
    currentProjectTasks[taskId] = taskObject;

    localStorage.setItem(this._currentProjectName, JSON.stringify(currentProjectTasks));
  }

  removeTask(taskId) {
    let currentProjectTasks = this.getCurrentProject();
    delete currentProjectTasks[taskId];

    localStorage.setItem(this._currentProjectName, JSON.stringify(currentProjectTasks));
  }

  getCurrentProject() {
    return JSON.parse(localStorage.getItem(this._currentProjectName));
  }

  addProject(name) {
    localStorage.setItem(name, JSON.stringify({}));
  }

  set currentProjectName(value) {
    this._currentProjectName = value;
  }
}

const storage = new Local();
export default storage;
