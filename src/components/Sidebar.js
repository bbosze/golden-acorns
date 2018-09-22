import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'inactive',
      sideBarActivate: 100,
    }
  }

  componentDidMount = () => {
    window.addEventListener('mousemove', this._onMouseMove);
  }
  // activateSidebar = () => {
  //   let sidebar = (this.state.active === "inactive") ? "active" : "inactive";
  //   this.setState({active: sidebar,})
  // }

  showSidebar = () => {
    this.setState({active: 'active',})
  }
  hideSidebar = () => {
    this.setState({active: 'inactive',})
  }

  _onMouseMove = (e) => {
    if (e.screenX > window.innerWidth - this.state.sideBarActivate) {
      this.showSidebar();
      this.setState({
        sideBarActivate: 300,
      })
    }
    else if (e.screenX < window.innerWidth - this.state.sideBarActivate) {
      this.hideSidebar();
      this.setState({
        sideBarActivate: 100,
      })
    }
  }

  render() {
    return(
      <aside
        className={'sidebar ' + this.state.active }

        >
        <button
          className="sidebar-button"
          onClick={this.hideSidebar}
          >
          {(this.state.active === 'active')
          ? <span> &#10596;</span>
          : <span> &#10594;</span>
          }
        </button>
      </aside>
    )
  }
}

export default Sidebar;
