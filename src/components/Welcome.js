import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state={
      redirectToReferrer: false
    }
    this.signup = this.signup.bind(this);
  }
  signup(res, type){


  }
  render() {
    if(this.state.redirectToReferrer) {
      return (<Redirect to={ 'index' } />)
    }

    const responseGoogle = (response) => {
      console.log(response);
      this.signup(response, 'google');
    }
    return (
      <div>
        <header className="App-welcome">
          <img src={logo} className="App-logo" alt="acorn" />
        </header>
        <GoogleLogin
          clientId="579920879740-bmjr9c2hgiukt563rbbk4tjoul39odhi.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default Welcome;
