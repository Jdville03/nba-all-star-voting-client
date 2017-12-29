import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Players from '../containers/Players';

class App extends Component {

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">NBA All Star Voting</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

      <div>
        <header className="App-header">
          <h1>NBA All Star Voting</h1>
        </header>
        <Players />
      </div>
    );
  }
}

export default App;
