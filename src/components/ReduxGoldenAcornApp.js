import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Button from './Button';
import { dispatchEat, dispatchBuy } from './actions/actions'
import putAcornData from './helpers/putacorndata'
import Display  from './Display';
import '../App.css';


class ReduxGoldenAcornApp extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  sendAcornData() {
    putAcornData(this.props.count, this.props.history.location.pathname.substr(1),)
  }

  buyOne = () => {
    dispatchBuy(this.props);
    this.sendAcornData();
  }

  eatOne = () => {
    if (this.props.count > 0){
      dispatchEat(this.props)
      this.sendAcornData();
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
        <p className="arrow-info">&uarr; and &darr; keys also work to change the amount of acorns.</p>
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
