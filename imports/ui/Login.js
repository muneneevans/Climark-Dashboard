import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';
import Header from './Header';
import {Router, Route, browserHistory} from 'react-router';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    //login with email and password
    Meteor.loginWithPassword({
      email
    }, password, (err) => {
      // console.log('Login callback',err);
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
        browserHistory.push('/addpastoralist');
      }
    });

    if (Meteor.userId()) {

    }
  }

  render() {
    return (<div>
      <div>
        <Header/>
      </div>

      <div className='box'>
        <div className='box__box'>
          <h1>
            Climark Administrator Login
          </h1>
          {
            this.state.error
              ? <p>{this.state.error}</p>
              : undefined
          }
          <form onSubmit={this.onSubmit.bind(this)} className='box__form'>
            <input type='email' ref='email' name='email' placeholder='Email'/>
            <input type='password' ref='password' name='password' placeholder='password'/>
            <button className='button'>Login</button>
          </form>
          <div>
            <Link to="/signup">Create Account</Link>
          </div>
          {/* <div>
            <Link to="/forgotpassword">Forgot Password</Link>
          </div> */
          }

        </div>
      </div>
    </div>);
  }
}
