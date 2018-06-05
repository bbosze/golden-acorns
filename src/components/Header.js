import React, { Component } from 'react';
import logo from '../logo.svg';
import Navbar from './Navbar'

class Header extends Component {
  activateMenuBar() {
    let menuItems = document.querySelectorAll('.menu-item')
    menuItems.forEach((e) => {
      e.classList.toggle('active')
    })
  }
  render() {
    return (
      <header className="App-header">
      <Navbar />
        <a className="logo-link" href="http://localhost:3000/">
          <img src={logo} className="App-logo" alt="acorn" />
      </a>
      </header>
    )
  }
}

export default Header;
