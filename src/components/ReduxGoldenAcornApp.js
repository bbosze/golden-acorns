import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Button from './Button';
import Display  from './Display';
import getInitialState from './helpers/getinitialstate'
import '../App.css';

class ReduxGoldenAcornApp extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
    getInitialState('redux').then(data => {
      this.props.dispatch({
        type: 'SET INIT',
        payload: data
      })
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  buyOne = () => {
    this.props.dispatch({ type: 'BUYONE'})
  }

  eatOne = () => {
    if (this.props.count > 0){
      this.props.dispatch({ type: 'EATONE'})
    }
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 38) {
      this.buyOne();
    }
    else if (e.keyCode === 40) {
      this.eatOne();
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Golden acorn with Redux is more life!</h1>
        <Display acorns={ this.props.count }/>
        <Button buyOne={this.buyOne} eatOne={this.eatOne}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
export default connect(mapStateToProps)(ReduxGoldenAcornApp);
