import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuateMap from './Maps/GuateMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Powered by Josue</h2>
        </div>
        <GuateMap />
      </div>
    );
  }
}

export default App;
