import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../styles.css';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      // currentElevation: 0
    }

    this.tasks = props.tasks ? props.tasks : [];
    console.log("##### Props in task",props);
  }
  
  // onHover() {
  //   this.setState({currentElevation: 3});
  // }
  // hoverOut() {
  //   this.setState({currentElevation: 0});
  // }

  populateData() {
    
    const self = this;
    return (
      <div className="row">
        {this.props.tasks && this.props.tasks.map((task, i) => {
          return(
            <div className="column" key={i}>
              <h3>{task.Description}</h3>

              {task.Items.map((item, index) => {
              return (
                <Paper className="paper" key={index}>
                  <Typography variant="headline" component="h4">
                    {item.ItemTitle}
                  </Typography>
                  <Typography component="p">
                    {item.Description}
                  </Typography>
                </Paper>
              )
            })}
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div style={{marginLeft: '20px', marginTop: '50px'}}>
        {this.populateData()}
      </div>
    )
  }
}
