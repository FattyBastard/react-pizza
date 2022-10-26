import React from 'react';

function Card({ imageUrl, title, price, sizes, types }) {
  const pizzaTypes = ['Тонкое', 'Толстое'];

  return (
    <div className="card">
      <img src={imageUrl} alt="img" height={260} width={260} />
      <h2>{title}</h2>
      <div className="select-parameters">
        <ul className="type-list">
          {types.map((item, index) => {
            return (
              <li key={index} className="type-list-item">
                {pizzaTypes[item]}
              </li>
            );
          })}
        </ul>
        <ul className="size-list">
          {sizes.map((item, index) => {
            return (
              <li key={index} className="size-list-item">
                {item} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom-part">
        <span className="price">от {price} ₽</span>
        <div className="add-button">
          <img src="img/button-plus.svg" alt="plus" height={12} width={12} />
          <div>Добавить</div>
          <span>2</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
