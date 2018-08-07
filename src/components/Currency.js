import React, { Component } from 'react';
import Header from './Header';
import getCurrencyData from './helpers/getcurrencydata'



class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedCurrency: '',
      selectedRate: null,
      time: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    getCurrencyData()
    .then(data => {
      this.setState({
        data: data['gesmes:Envelope'].Cube.Cube[0].Cube || [],
        time: data['gesmes:Envelope'].Cube.Cube[0]['@attributes'].time,
      });
    });
  }

  async handleChange(event) {
    const currency = event.target.value;
    await this.setState({
      selectedCurrency: currency,
    })
    this.setSelectedRate();
  }

  setSelectedRate() {
    const currency = this.state.data.filter(e => e['@attributes'].currency === this.state.selectedCurrency);
    this.setState({
      selectedRate: currency[0]['@attributes'].rate,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h2>Currences in Euro*</h2>
        <p className="footnote">*From European Central Bank</p>
        <p>{ this.state.time }</p>
        <select
          className="currency-dropdown"
          onChange={this.handleChange}
          >
          <option disabled selected hidden>Please, select a currency!</option>
          {
          this.state.data !== [] ?
          this.state.data.map(e => <option
            key={e['@attributes'].currency}
            value={e['@attributes'].currency}
            >
            {e['@attributes'].currency}</option>)
          : <option>loading</option>
          }
        </select>
        <p>
          {this.state.selectedRate} {this.state.selectedCurrency}
        </p>
      </div>
    )
  }

}

export default Currency;
