import React from 'react';

function Card({ imageUrl, title, price, sizes, types }) {
  const pizzaTypes = ['Тонкое', 'Толстое'];

  const [selectedType, setSelectedType] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(0);
  const [countPurchase, setCountPurchase] = React.useState(0);

  return (
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
            setCountPurchase((prev) => prev + 1);
          }}
          className="add-button">
          <img src="img/button-plus.svg" alt="plus" height={12} width={12} />
          <button>Добавить</button>
          <span>{countPurchase}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
