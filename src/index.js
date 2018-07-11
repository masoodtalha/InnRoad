import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { firebaseApp } from './firebase';
import {logUser} from './actions';
import reducer from './reducers';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const history = createBrowserHistory(); //Router V4 modification
const store = createStore(reducer);
// Authentication Listener
firebaseApp.auth().onAuthStateChanged((user) => {
  if(user){
    console.log("User has signed in or up",user);
    const { email } = user;
    store.dispatch(logUser(email)); //Since unlike components we can't bind action creator function in absence of class and state
    history.push("/app"); //If user looged in redirect to app
  }else {
    console.log("User has signed out or still need to sign in");
    history.replace('/signin');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={history}>
      <div>
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </Provider>,document.getElementById('root')
);
