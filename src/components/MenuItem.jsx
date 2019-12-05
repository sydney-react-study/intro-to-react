import React from 'react';

const MenuItem = () => {
  return (
    <div className="menuitem__wrapper">
      <div>
        <span role="img" aria-label="label" className="menuitem__emoji">
          emoji
        </span>
      </div>
      <div className="menuitem__column">
        <div className="menuitem__name">name</div>
        <div className="menuitem__description">description</div>
        <button className="menuitem__button">
          add to order
        </button>
      </div>
      <div className="menuitem__price">
        $10.00
      </div>
    </div>
  );
};

export default MenuItem;