import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <p className='header-counter'>Number of acorns in redux: { this.props.count }</p>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
export default connect(mapStateToProps)(Header);
