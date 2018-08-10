import React, { Component } from 'react';
import '../App.css';
import inputValidator from './helpers/inputvalidator';
import passwordValidator from './helpers/passwordvalidator';
import rePasswordValidator from './helpers/reenter-passwordvalidator';
import getUser from './helpers/getuser';


let addUser = (user) => {
  fetch(`http://localhost:9000/users`, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    })
  }).then(response=>response.json())
}

const patterns = {
  password: /^[\w@-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      reenter: '',
      users: [],
      btnValid: false,
      passValid: false,
      emailValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    getUser().then(data => this.setState({ users: data }));
  }


  async handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const password = this.state.password
    const reenter = this.state.reenter
    await this.setState({ [event.target.name]: value });
    if(name === 'password') {
      await this.setState({
        passValid: passwordValidator(value, patterns[name])
      })
    }
    else {
      await this.setState({ emailValid: inputValidator(value, patterns[name]) });
    }
    const allValidators = (this.state.emailValid && this.state.passValid) ? true : false
    this.setState({ btnValid: allValidators });
  };



  handleSubmit(event) {
    let newUser = {
      email: this.state.email,
      password: this.state.password,
      reenter: this.state.password
    }
    event.preventDefault();
    addUser(newUser);
    this.setState({
      users: [...this.state.users, {email: this.state.email}]
    });
    this.setState({
      email: '',
      password: '',
      reenter: '',
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Subscribe now for many new acorns!</h1>
        <form
          onSubmit={this.handleSubmit}
          className="form"
          >
            <input
              className="inputfield"
              type="text"
              name="email"
              placeholder="Please add your email address!"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <p>Email must be a valid address, e.g. me@mydomain.com</p>
            <input
              className="inputfield"
              type="password"
              name="password"
              placeholder="Please enter your password!"
              value={this.state.passwords}
              onChange={this.handleChange}
            />
            <p>Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>
            {/* <input
              className="inputfield"
              type="password"
              name="reenter"
              placeholder="Please reenter password!"
              value={this.state.reenter}
              onChange={this.handleChange}
            /> */}
            <p>Password must match the previously entered password</p>
            <input
            className={'submitbutton ' + this.state.btnValid }
            type="submit"
            value="Submit"
            onSubmit={this.handleSubmit}
          />
        </form>
        <p>Recently subscribed users:
        </p>
        <ul className="users"> {
          this.state.users.map(users => <li key={users.email}> {users.email} </li>)
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Subscribe;
