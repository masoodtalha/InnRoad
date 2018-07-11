import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      currentElevation: 0
    }
  }
  onHover() {
    this.setState({currentElevation: 3});
  }
  hoverOut() {
    this.setState({currentElevation: 0});
  }
  render() {
    return (
      <div>
        <Paper onMouseEnter={()=>this.onHover()} onMouseLeave={()=>this.hoverOut()} className={{}} elevation={this.state.currentElevation}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps,null)(Task);
