import {START_LOAD_TASKS, COMPLETED_LOAD_TASKS, POPULATE_TASKS} from '../constants';

let tasks = [];

export default  (state = tasks, action) => {
  switch (action.type) {
    // case POPULATE_TASKS:
    //   const { taskList } = action;
    //   taskList.forEach(task => {
    //     let obj = {};
    //     obj.BucketId = task.BucketId;
    //     obj.Description = task.Description;
    //     obj.OrderInVertical = task.OrderInVertical;
    //     obj.Items = task.Items;

    //     tasks.push(obj);
    //   });
    //   return tasks;
    case START_LOAD_TASKS:
      console.log("$$$$$ Reducer Obj: ", action);
      return action;

    case COMPLETED_LOAD_TASKS:
      console.log("$$$$$ Reducer async action completed: ", action);
      return action;

    default:
      return state;
  }

}
