import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import { menuData } from './data/menuData';
class App extends Component {
  state = {
    data: menuData,
  };
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="menu">
            <div className="menuitems">
              {data.map((item, index) => (
                <MenuItem
                  key={index}
                  emoji={item.emoji}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          </div>
      </div>
    );
  }
}

export default App;