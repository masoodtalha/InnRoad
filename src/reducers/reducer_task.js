import {POPULATE_TASKS, LOAD_TASKS} from '../constants';
import {serverUrl} from '../server';

let tasks = [], taskRes = [];

export default async (state = tasks, action) => {
  switch (action.type) {
    case POPULATE_TASKS:
      const { taskList } = action;
      taskList.forEach(task => {
        let obj = {};
        obj.BucketId = task.BucketId;
        obj.Description = task.Description;
        obj.OrderInVertical = task.OrderInVertical;
        obj.Items = task.Items;

        tasks.push(obj);
      });
      return tasks;
    case LOAD_TASKS:
      await fetch(serverUrl).then(data => data.json())
      .then(responseJson => {
        taskRes = responseJson;
        return taskRes;
      }).catch(err => console.log("Data fetch Failure : ", err))

      console.log("Returning Data: ", taskRes)
      return taskRes;
      
    default:
      return state;
  }
}
