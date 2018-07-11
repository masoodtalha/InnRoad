import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Task from './Task';

class App extends Component {

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              InnRoad
            </Typography>
          </Toolbar>
        </AppBar>
        <br /> <br />
        <Task />
      </div>
    )
  }
}
function mapStateToProps (state) {
  console.log('state', state);
  return {};
}
export default connect(mapStateToProps, null)(App);
