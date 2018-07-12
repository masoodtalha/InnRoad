import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTasks } from '../actions';
import Task from './Task';
class App extends Component {

  constructor(props) {
    super(props);
    this.props.dispatch(loadTasks());
  }
 
  render() {
    return (
      <div style={{ margin: '5px' }}>
        <Task tasks={this.props.taskList}/>
      </div>
    )
  }
}
function mapStateToProps (state) {
  if (state.task.type === "START_LOAD_TASKS"){
    return {loading: true, taskList: []};
  } else if (state.task.type === "COMPLETED_LOAD_TASKS") {
    return { loading: false, taskList: state.task.payload}
  }else{
    return{};
  }
  
}
export default connect(mapStateToProps, null)(App);
