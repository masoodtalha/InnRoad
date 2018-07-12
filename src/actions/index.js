import { START_LOAD_TASKS, COMPLETED_LOAD_TASKS } from '../constants';
import {
  serverUrl
} from '../server';

export function loadTasks() {
  return(dispatch) => {
    dispatch({type : START_LOAD_TASKS});
    fetch(serverUrl).then(data => data.json())
      .then(responseJson => {
        console.log("}}}}}", responseJson);
        dispatch({type : COMPLETED_LOAD_TASKS, payload : responseJson});
      }).catch(err => console.log("Data fetch Failure : ", err))
  }
}
