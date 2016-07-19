import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Chat,
    Home,
    Elements,
    Widgets,
    AsyncApp,
    About,
    Login,
    LoginSuccess,
    Survey,
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
      <Route path="survey" component={Survey}/>
      <Route path="widgets" component={Widgets}/>
      <Route path="asyncApp" component={AsyncApp}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
