import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {HTTP} from 'meteor/http';
import App from './../imports/ui/App';
import Login from './../imports/ui/Login';
import Signup from './../imports/ui/SignUp';
import AddPastoralist from './../imports/ui/AddPastoralist';
import MarsabitWard from './../imports/ui/MarsabitWard';
import IsioloWard from './../imports/ui/IsioloWard';
import CountySelector from './../imports/ui/CountySelector';
import SelectLocation from './../imports/ui/SelectLocation';

const routes=(
  <Router  history={browserHistory}>
    <Route path='/' component={SelectLocation}/>
    <Route path='/login' component={Login}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/addpastoralist' component={AddPastoralist}/>
    <Route path='/wardisiolo' component={IsioloWard}/>
    <Route path='/wardmarsabit' component={MarsabitWard}/>
  </Router>
);

//startup method
Meteor.startup(() => {

  ReactDOM.render(routes, document.getElementById('app'));
});
