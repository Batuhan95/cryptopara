import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
var NumberFormat = require('react-number-format');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken&api_key=')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
         
       
   
      
  }

  render() {
    return (
      <div className="App">
        {Object.keys(this.state.cryptos).map((key) => (

          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right"><NumberFormat value={this.state.cryptos[key].PRICE} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></span>
            <br/>
            <span className="right"><NumberFormat value={this.state.cryptos[key].PRICE} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'€'} /></span>
            
          </div>

        ))}


      </div>
    );
  }
}

export default App;
