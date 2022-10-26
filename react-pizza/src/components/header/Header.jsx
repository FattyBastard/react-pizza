import React from 'react';

export function Header() {
  return (
    <header className="header">
      <div className="logo-part">
        <img className="logo" src="img/logo.svg" alt="logo" height={38} width={38} />
        <div className="logo-description">
          <h2>REACT PIZZA</h2>
          <span>самая вкусная пицца во вселенной</span>
        </div>
      </div>
      <div className="header-button">
        <span>520 ₽</span>
        <img src="img/slash.svg" alt="slash" className="slash" height={25} width={1} />
        <img src="img/cart.svg" alt="cart" className="cart" height={16} width={16} />
        <span className="items-count">3</span>
      </div>
    </header>
  );
}
