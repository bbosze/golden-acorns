import React, { Component } from 'react';

class Ageteller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      age: null,
    }
  }

  calculateAge(date) {
    if (date !== '') {
      let birth = new Date(date);
      let now = new Date();
      let age = (now.getTime() - birth.getTime())/1000 / 60 / 60 /24 / 365;
      let years = Math.floor(age)
      age -= years
      console.log(age);
      let months = Math.floor(age * 12);
      return `${years} years, ${months} months`;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      age: this.calculateAge(this.state.date),
    })
  }

  handleChange = (event) => {
    const date = event.target.value;
    this.setState({
      date: date
    })
  }

  render() {
    return (
      <React.Fragment>
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
        <p>{(typeof this.state.age === 'string') ? `You have been able to eat acorns for ${this.state.age}.` : ''}</p>
      </React.Fragment>
    )
  }

}

export default Ageteller;
