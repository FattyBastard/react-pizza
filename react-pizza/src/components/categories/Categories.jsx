import React from 'react';

export function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const [activeCategory, setActiveCategory] = React.useState(0);

  return (
    <ul className="categories">
      {categories.map((category, index) => {
        return (
          <li
            onClick={() => {
              setActiveCategory(index);
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
