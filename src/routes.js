import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Chat,
    Home,
    Elements,
    Widgets,
    About,
    Login,
    LoginSuccess,
    ReduxForm,
    NotFound,
  } from './containers';

export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes requiring login */ }
      <Route>
        <Route path="chat" component={Chat}/>
        <Route path="loginSuccess" component={LoginSuccess}/>
      </Route>

      { /* Routes */ }
      <Route path="elements" component={Elements}/>
      <Route path="about" component={About}/>
      <Route path="login" component={Login}/>
      <Route path="form" component={ReduxForm}/>
      <Route path="widgets" component={Widgets}/>
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
