import React, { Component } from 'react';
import Header from './Header';


class Ageteller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      age: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  calculateAge(date) {
    if (date !== '') {
      let birth = new Date(date);
      let now = new Date();
      let age = (now.getTime() - birth.getTime())/1000 / 60 / 60 /24 / 365;
      let years = Math.floor(age)
      age -= years
      let months = Math.floor(age * 12);
      return `${years} years, ${months} months`;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      age: this.calculateAge(this.state.date),
    })
  }

  handleChange(event) {
    const date = event.target.value;
    this.setState({
      date: date
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <form
          className="form"
          onSubmit={this.handleSubmit}
          >
            <input
              className="inputfield"
              type="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input
            className={'submitbutton'}
            type="submit"
            value="Submit"
            onSubmit={this.handleSubmit}
          />
        </form>
        <p>{(typeof this.state.age === 'string') ? `You have been able to eating acorns for ${this.state.age}.` : ''}</p>
      </div>
    )
  }

}

export default Ageteller;
