import React from 'react';
import { AppContext } from '../../App';

export function CartItem({ title, price, id, types, rating, sizes, category, imageUrl }) {
  const { countEachProduct } = React.useContext(AppContext);
  const [countPurchase, setCountPurchase] = React.useState(() => countEachProduct(id));
  return (
    <li className="cart-list-item">
      <img src={imageUrl} alt="img" height={80} width={80} />
      <div className="cart-list-item-header">
        <h2>{title}</h2>
        <h3>тонкое тесто, 26 см.</h3>
      </div>
      <div className="cart-add-delete">
        <img src="img/minus.svg" alt="minus" height={32} width={32} />
        <span>{countPurchase}</span>
        <img src="img/plus.svg" alt="plus" height={32} width={32} />
      </div>
      <span>770 ₽ </span>
      <img src="img/close.svg" alt="close" height={32} width={32} />
    </li>
  );
}
