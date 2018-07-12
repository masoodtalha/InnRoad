import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTasks } from '../actions';
import Task from './Task';
import '../styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {

  constructor(props) {
    super(props);
    this.props.dispatch(loadTasks());
  }
 
  render() {
    return (
      <div style={{ padding: '5px', backgroundColor: '#E0E0E0' }}>
        
        <div className="titleApp">
          {this.props.loading && <div style={{ display: 'inline' }}><CircularProgress color="secondary" /> </div>}
          <h1 style={{ display: 'inline' }}>InnRoad</h1>
        </div>
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
