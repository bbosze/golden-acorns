import React, { Component } from 'react';
import Header from './Header';
import getCurrencyData from './helpers/getcurrencydata'



class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    await getCurrencyData()
      .then(data => {
        this.setState({
          data: data['gesmes:Envelope'].Cube.Cube[0].Cube || [],
        })
      });
    console.log(this.state.data);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <h2>Currency rates from European Central Bank</h2>
        <form
          className="form"
          onSubmit={this.handleSubmit}
          >
            <input
            className={'submitbutton'}
            type="submit"
            value="Showme"
            onSubmit={this.handleSubmit}
          />
        </form>
        <ul className="currency-list"> {
          this.state.data.map(e => <li key={e['@attributes'].rate}>{e['@attributes'].currency} {e['@attributes'].rate}</li>)
        }
        </ul>
      </div>
    )
  }

}

export default Currency;
