import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTasks } from '../actions';

class App extends Component {

  constructor(props) {
    super(props);
    

    this.props.dispatch(loadTasks());
  }
  componentWillUpdate() {
    console.log(" &&&&Updated state: ", this.props.taskList);
  }
  render() {
    console.log("::::::", this.props.taskList);
    const posts = this.props.taskList && this.props.taskList.map((post, i) => (
      <li key={i}>
        {post.content}
      </li>
    ));
    const task = this.props.taskList;
    console.log("####", task);
    return (
      <div style={{margin: '5px'}}>
        <ul>
          {posts}
        </ul>
      </div>
    )
  }
}
function mapStateToProps (state) {
  let taskList = [];
  console.log(";;;;;;;",state);
  taskList = state.task;
  // await state.task.then(data => {
  //   taskList = data;
  // })
  console.log("^^^ Task List: ", taskList);
  console.log("^^^ Task List: ", typeof(taskList));
  return {taskList};
  
}



export default connect(mapStateToProps, null)(App);
