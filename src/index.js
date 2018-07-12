import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import reducer from './reducers';
import App from './components/App';

const history = createBrowserHistory(); //Router V4 modification
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={history}>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>,document.getElementById('root')
);
