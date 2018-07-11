import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import reducer from './reducers';
import App from './components/App';

const history = createBrowserHistory(); //Router V4 modification
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={history}>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>,document.getElementById('root')
);
