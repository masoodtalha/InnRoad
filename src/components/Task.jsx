import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      currentElevation: 0
    }

    this.tasks = props.tasks ? props.tasks : [];
    console.log("##### Props in task", this.tasks);
  }
  componentWillUpdate() {
    console.log("!!!!!!!!###### Updating: ", this.props.tasks);
  }
  onHover() {
    this.setState({currentElevation: 3});
  }
  hoverOut() {
    this.setState({currentElevation: 0});
  }

  populateData() {
    const self = this;
    return this.tasks.map((task) => {
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>{task.Description}</h3>

        {task.Items.map((item) => {
          return(
            <Paper onMouseEnter={() => self.onHover()} onMouseLeave={() => self.hoverOut()} className={{}} elevation={this.state.currentElevation}>
              <Typography variant="headline" component="h3">
                {item.ItemTitle}
              </Typography>
              <Typography component="p">
                {item.Description}
              </Typography>
            </Paper>
          )
        })}
      </div>
    })
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {this.populateData()}
      </div>
    )
  }
}
