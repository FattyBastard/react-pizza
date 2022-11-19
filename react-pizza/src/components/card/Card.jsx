import React from 'react';
import { AppContext } from '../../App';
import { setSelectedPizzas, removeSelectedPizzas } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

function Card({ imageUrl, title, price, sizes, types, id, rating, category }) {
  const pizzaTypes = ['Тонкое', 'Толстое'];
  const pizzaSizes = [26, 30, 40];

  // const { addToCart, countEachProduct } = React.useContext(AppContext);
  const [selectedType, setSelectedType] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(0);
  // const [countPurchase, setCountPurchase] = React.useState(() => countEachProduct(id));

  const dispatch = useDispatch();
  const clickOnPlus = (object) => {
    // addToCart(object);
    dispatch(
      setSelectedPizzas({
        id,
        rating,
        category,
        imageUrl,
        title,
        price,
        sizes: pizzaSizes[selectedSize],
        types: pizzaTypes[selectedType],
      }),
    );

    // setCountPurchase((prev) => prev + 1);
  };

  console.log(pizzaSizes[selectedSize]);
  const object = { id, rating, category, imageUrl, title, price, sizes, types };

  return (
    // <div className="card-warpper">
    <div className="card">
      <img src={imageUrl} alt="img" height={260} width={260} />
      <h2>{title}</h2>
      <div className="select-parameters">
        <ul className="type-list">
          {types.map((item, index) => {
            return (
              <li
                onClick={() => {
                  setSelectedType(index);
                }}
                key={index}
                className={selectedType === index ? `type-list-item active` : `type-list-item`}>
                {pizzaTypes[item]}
              </li>
            );
          })}
        </ul>
        <ul className="size-list">
          {sizes.map((item, index) => {
            return (
              <li
                onClick={() => {
                  setSelectedSize(index);
                }}
                key={index}
                className={selectedSize === index ? `size-list-item active` : `size-list-item`}>
                {item} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom-part">
        <span className="price">от {price} ₽</span>
        <div
          onClick={() => {
            clickOnPlus(object);
          }}
          className="add-button">
          <img src="img/button-plus.svg" alt="plus" height={12} width={12} />
          <button>Добавить</button>
          <span>{0}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
