import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../redux/slices/sortSlice';

export function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  const dispatch = useDispatch();
  const { activeCategory } = useSelector((state) => {
    return state.filter;
  });

  const onClickCategory = (id) => {
    dispatch(setActiveCategory(id));
  };

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
