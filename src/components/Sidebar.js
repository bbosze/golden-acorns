import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'inactive',
    }
  }
  activateSidebar = () => {
    let sidebar = (this.state.active === "inactive") ? "active" : "inactive";
    this.setState({active: sidebar,})
  }

  render() {
    return(
      <aside className={'sidebar ' + this.state.active }>
        <button
          className="sidebar-button"
          onClick={this.activateSidebar}
          >
          &#10594;
        </button>
      </aside>
    )
  }
}

export default Sidebar;
