import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import Order from './components/Order';
import SucessOrder from './components/SucessOrder';
import Loading from './components/Loading';
import { menuData } from './data/menuData';
class App extends Component {
  state = {
    order: [],
    total: 0,
    data: [],
    isOrderSubmitted: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: menuData });
    }, 3000);
  }


  handleUpdate = (name, price) => {
    const newItem =  [{ name, price }] ;  
    // this.setState(({ order, total }) => ({
    //   order: [...order, newItem],
    //   total: total + price
    // }));
    this.setState({
      order: this.state.order.concat(newItem),
      total: this.state.total + price
    });
  };

  resetOrder = () => {
    this.setState({
      order: [],
      total: 0,
    })
  }

  submitOrder = () => {
    this.setState({
      isOrderSubmitted: true
    })
  }

  render() {
    const { order, total, data, isOrderSubmitted } = this.state;
    return (
      <div className="App">
        <Header />
        {data.length > 0 ? (
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
            {isOrderSubmitted
              ? <SucessOrder
                  order={order}
                  total={total}
                />
              : <Order
                order={order}
                total={total}
                handleResetClick={this.resetOrder}
                handleSubmitClick={this.submitOrder}
              />
            }
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;