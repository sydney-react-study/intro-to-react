import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MenuItem />
      </div>
    );
  }
}

export default App;