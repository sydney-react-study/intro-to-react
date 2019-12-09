import React from 'react';

const SucessOrder = ({ order, total }) => (
  <div className="order__wrapper">
    <div className="order__title">My order</div>
        <div className="order__text">
            Welcome to emoji eats. You have ordered {order.map(item => `${item.name}, ` )}and this comes to a total of ${total} dollars.
        </div>
  </div>
);

export default SucessOrder;