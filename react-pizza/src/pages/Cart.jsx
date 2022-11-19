import React from 'react';
import { CartItem } from '../components/cart-item/CartItem';
import { AppContext } from '../App';
import { setSelectedPizzas, removeSelectedPizzas } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export function Cart(props) {
  // const { selectedCards } = React.useContext(AppContext);

  const { selectedPizzas } = useSelector((store) => {
    return store.cart;
  });

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <div className="cart-header-left">
            <img src="img/big-cart.svg" alt="cart" height={29} width={29} />
            <h2>Корзина</h2>
          </div>
          <div className="cart-header-right">
            <img src="img/trash.svg" alt="cart" height={20} width={20} />
            <span>Очистить корзину</span>
          </div>
        </div>
        <ul className="cart-list">
          {selectedPizzas.map((object, index) => {
            return <CartItem key={index} {...object} />;
          })}
        </ul>
      </div>
    </>
  );
}
