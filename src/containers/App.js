import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Players from './Players';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/players`)
      .then(response => response.json())
      .then(players => this.setState({ players }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">App Container</h1> */}
        </header>
        <Players players={this.state.players} />
        {/*}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */}
      </div>
    );
  }
}

export default App;
