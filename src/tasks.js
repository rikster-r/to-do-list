export class Task {
  constructor(title, description, dueDate) {
    this.title = title.trim();
    this.description = description.trim() || 'No Description';
    this.dueDate = dueDate;
    this.priority = 'standard';
    this.status = 'unfinished';
  }
}

class TaskMutator {
  changePriority(taskObject) {
    taskObject.priority = (taskObject.priority == 'standard') ? 'high' : 'standard';
    return taskObject;
  }

  changeTaskStatus(taskObject) {
    taskObject.status = (taskObject.status == 'unfinished') ? 'finished' : 'unfinished';
    return taskObject;
  }
}

let taskMutator = new TaskMutator;
export default taskMutator;