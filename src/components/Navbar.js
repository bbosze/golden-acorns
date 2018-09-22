import React, { Component } from 'react';
import menu from '../menu.svg';


class Navbar extends Component {
  activateMenuBar() {
    let menuItems = document.querySelectorAll('.menu-item')
    menuItems.forEach((e) => {
      e.classList.toggle('active')
    })
  }
  render() {
    return (
      <nav>
        <div className="toggle">
            <img onClick={this.activateMenuBar} src={menu} className="mobile-menu" alt="mobile-menu-bars" />
        </div>
        <ul className="menu-items-list">
          <li className="menu-item"><a href="/simple">Simple</a></li>
          <li className="menu-item"><a href="/redux">Redux</a></li>
          <li className="menu-item"><a href="/index">Subscribe</a></li>
          <li className="menu-item"><a href="/age">Ageteller</a></li>
          <li className="menu-item"><a href="/currency">Currency</a></li>
          <li className="menu-item"><a href="/aquarium">Aquarium</a></li>
          <li className="menu-item"><a href="/">Logout</a></li>
        </ul>
      </nav>
    )
  }
}


export default Navbar;
