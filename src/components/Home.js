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
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,EOS,BCH,CRE,XRP,ETH,LINK,ETC,BSV,&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
       axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,EOS,BCH,CRE,XRP,ETH,LINK,ETC,BSV,&tsyms=EUR')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,EOS,BCH,CRE,XRP,ETH,LINK,ETC,BSV,&tsyms=BTC')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
       axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP,BCH,CRE,XRP,ETH,LINK,ETC,BSV,&tsyms=ETH')
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
            <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></span>
            <br/>
            <span className="right"><NumberFormat value={this.state.cryptos[key].EUR} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'€'} /></span>
            <br/>
             <span className="right"><NumberFormat value={this.state.cryptos[key].BTC} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'BTC'} /></span>
            <br/>
            <span className="right"><NumberFormat value={this.state.cryptos[key].ETH} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'ETH'} /></span>
           
          </div>

        ))}


      </div>
    );
  }
}

export default App;
