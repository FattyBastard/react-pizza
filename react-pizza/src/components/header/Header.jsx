import React from 'react';

import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

export function Header() {
  const { selectedCards, totalPrice, inputOnChange, inputValue, setInputValue } =
    React.useContext(AppContext);

  const useRef = React.useRef();

  return (
    <header className="header">
      <Link to="/">
        <div className="logo-part">
          <img className="logo" src="img/logo.svg" alt="logo" height={38} width={38} />
          <div className="logo-description">
            <h2>REACT PIZZA</h2>
            <span>самая вкусная пицца во вселенной</span>
          </div>
        </div>
      </Link>
      <div className="search-field">
        <img src="img/search.svg" alt="search" height={12} width={12} className="search" />
        <input
          ref={useRef}
          onChange={(event) => inputOnChange(event)}
          value={inputValue}
          className="search-input"
          type="text"
          placeholder="Поиск..."
        />
        <img
          onClick={() => {
            setInputValue('');
            useRef.current.focus();
          }}
          src="img/close-search.svg"
          alt="close"
          height={7}
          width={7}
          className="search-close"
        />
      </div>
      <Link to="/cart">
        <div className="header-button">
          <span>{totalPrice} ₽</span>
          <img src="img/slash.svg" alt="slash" className="slash" height={25} width={1} />
          <img src="img/cart.svg" alt="cart" className="cart" height={16} width={16} />
          <span className="items-count">{selectedCards.length}</span>
        </div>
      </Link>
    </header>
  );
}
