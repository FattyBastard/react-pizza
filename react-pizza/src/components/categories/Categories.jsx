import React from 'react';
import { AppContext } from '../../App';

export function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const { onClickCategory, activeCategory } = React.useContext(AppContext);

  return (
    <ul className="categories">
      {categories.map((category, index) => {
        return (
          <li
            onClick={() => {
              onClickCategory(index);
            }}
            key={index}
            className={activeCategory === index ? `categories-item active` : `categories-item`}>
            {category}
          </li>
        );
      })}
    </ul>
  );
}
