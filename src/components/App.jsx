import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div style={{margin: '5px'}}>
        
      </div>
    )
  }
}
function mapStateToProps (state) {
  console.log('state', state);
  return {};
}
export default connect(mapStateToProps, null)(App);
