import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Welcome extends Component {

  render() {
    return (
      <div>
        <header className="App-welcome">
          <img src={logo} className="App-logo" alt="acorn" />
        </header>
        <a className="App-link" href="/simple">Simple golden acorn is life</a>
        <a className="App-link" href="/redux">Golden acorn with Redux is more life</a>
      </div>
    );
  }
}

export default Welcome;
