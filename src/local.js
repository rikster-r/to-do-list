class Local {
  constructor() {
    this.currentProjectName = 'General';

    if (localStorage.length === 0) {
      this.addProject('General');
    }
  }

  updateTask(taskId, taskObject, projectName = this.currentProjectName) {
    let currentProjectTasks = this.getProject(projectName);
    currentProjectTasks[taskId] = taskObject;

    localStorage.setItem(projectName, JSON.stringify(currentProjectTasks));
  }

  removeTask(taskId, projectName) {
    let currentProjectTasks = this.getProject(projectName);
    delete currentProjectTasks[taskId];

    localStorage.setItem(projectName, JSON.stringify(currentProjectTasks));
  }

  getProject(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  getCurrentProject() {
    return this.getProject(this.currentProjectName);
  }

  addProject(name) {
    localStorage.setItem(name, JSON.stringify({}));
  }

  removeProject(name) {
    localStorage.removeItem(name)
  }
}

const storage = new Local();
export default storage;

