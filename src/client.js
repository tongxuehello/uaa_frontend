import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {Provider} from 'react-redux';
import { Router, hashHistory } from 'react-router';
import reducer from './redux/modules/reducer';

import getRoutes from './routes';

const dest = document.getElementById('app-container');
const store = createStore(reducer);

const component = (
  <Router history={hashHistory}>
    {getRoutes(store)}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
);