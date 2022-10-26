import React from 'react';

export function Cartitem(props) {
  return (
    <li className="cart-list-item">
      <img
        src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
        alt="img"
        height={80}
        width={80}
      />
      <div className="cart-list-item-header">
        <h2>Сырный цыпленок</h2>
        <h3>тонкое тесто, 26 см.</h3>
      </div>
      <div className="cart-add-delete">
        <img src="img/minus.svg" alt="minus" height={32} width={32} />
        <span>3</span>
        <img src="img/plus.svg" alt="plus" height={32} width={32} />
      </div>
      <span>770 ₽ </span>
      <img src="img/close.svg" alt="close" height={32} width={32} />
    </li>
  );
}
