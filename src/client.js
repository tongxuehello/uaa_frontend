import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { Router, hashHistory } from 'react-router';
import reducer from './redux/modules/reducer';

import getRoutes from './routes';

const dest = document.getElementById('app-container');

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleware(reducer);


const component = (
  <Router history={hashHistory}>
    {getRoutes(store)}
  </Router>
);

ReactDOM.render(
  // 将 App 组件连接到 Redux 并且让它能够 dispatch actions 以及从 Redux store 读取到 state
  // 使 store 能为下面的组件所用，从 Redux store 读取到 state
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
);