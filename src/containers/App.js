import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Players from './Players';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">App Container</h1> */}
        </header>
        <Players />
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
