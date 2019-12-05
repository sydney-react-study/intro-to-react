import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import { menuData } from './data/menuData';
class App extends Component {
  state = {
    order: [],
    total: 0,
    data: menuData,
  };

  handleUpdate = (name, price) => {
    const newItem =  [ name, price ] ;
    // this.setState(({ order, total }) => ({
    //   order: [...order, newItem],
    //   total: total + price
    // }));
    this.setState({
      order: this.state.order.concat(newItem),
      total: this.state.total + price
    });
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
                  updateOrder={this.handleUpdate}
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