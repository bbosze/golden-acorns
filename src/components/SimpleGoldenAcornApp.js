import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';
import Display  from './Display';
import getInitialState from './helpers/getinitialstate'
import '../App.css';

class SimpleGoldenAcornApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acorns: 'loading',
      url: this.props.history.location.pathname.substr(1)
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    getInitialState(this.state.url).then(data => this.setState({ acorns: data }));
    }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  buyOne = () => {
    if(this.state.acorns >= 0) {
      this.setState({ acorns: this.state.acorns + 1 });
    }
  };
  eatOne = () => {
    if(this.state.acorns > 0) {
      this.setState({ acorns: this.state.acorns - 1 });
    }
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 38) {
      this.setState({ acorns: this.state.acorns + 1 });
    }
    else if (e.keyCode === 40  && this.state.acorns > 0) {
      this.setState({ acorns: this.state.acorns - 1 });
    }
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <h1>Golden acorn is life!</h1>
        <Display acorns={ this.state.acorns }/>
        <Button buyOne={this.buyOne} eatOne={this.eatOne}/>
      </div>
    );
  }
}

export default SimpleGoldenAcornApp;
