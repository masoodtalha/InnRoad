import { LOAD_TASKS, POPULATE_TASKS } from '../constants';

export function populateTasks(taskList) {
  const action = {
    type: POPULATE_TASKS,
    taskList
  }
  return action;
}

export function loadTasks() {
  const action= {
    type: LOAD_TASKS
  }
  return action;
}
