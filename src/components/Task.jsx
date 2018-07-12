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
    console.log("##### Props in task",props);
  }
  
  onHover() {
    this.setState({currentElevation: 3});
  }
  hoverOut() {
    this.setState({currentElevation: 0});
  }

  populateData() {
    const styles = {
      row: {
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap'
      },
      column: { 
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        marginRight: '40px',
        marginBottom: '20px'
      },
      paperMargin: {
        marginBottom: '10px',
        padding: '5px'
      }
    };

    const self = this;
    return (
      <div style={styles.row}>
        {this.props.tasks && this.props.tasks.map((task) => {
          return(
            <div style= {styles.column}>
              <h3>{task.Description}</h3>

              {task.Items.map((item) => {
              return (
                <Paper style={styles.paperMargin} onMouseEnter={() => self.onHover()} onMouseLeave={() => self.hoverOut()}  elevation={this.state.currentElevation}>
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
      <div>
        {this.populateData()}
      </div>
    )
  }
}
