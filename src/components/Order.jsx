import React from 'react';

const Order = ({ order, total, handleResetClick, handleSubmitClick }) => (
  <div className="order__wrapper">
    <div className="order__title">My order</div>
    {order.length === 0 ? (
        <>
            <div className="order__text">
                You haven't ordered any emojis. Select some delicious emojis from the menu.
            </div>
            <div className="order__emoji">
                <span role="img" aria-label="point">
                👈
                </span>
            </div>
        </>
    ) : (
        <>
        {order.map(item => (
          <div className="order__item">
            <span>{item.name}</span>
            <span>
              ${item.price}
              .00
            </span>
          </div>
        ))}
        <div className="order__total">
          <span>Total</span>
          <span>
            ${total}
            .00
          </span>
        </div>
        <button className="order__submit" onClick={handleSubmitClick}>
          Submit
        </button>
        <button className="order__reset" onClick={handleResetClick}>
          Reset
        </button>
      </>
    )}
  </div>
);

export default Order;