import React from 'react';

export function Sort() {
  const category = ['популярности', 'цене', 'алфавиту'];
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [sortCategory, setSortCategory] = React.useState(category[0]);

  return (
    <>
      <div
        onClick={() => {
          setVisiblePopup(!visiblePopup);
        }}
        className="sort">
        <img src="img/triangle.svg" alt="triangle" height={6} width={10} />
        <span>Сортировка по: </span>
        <div className="sorted-category">{sortCategory}</div>
        <ul className={visiblePopup ? `popup active` : `popup`}>
          {category.map((item, index) => {
            return (
              <li
                onClick={() => {
                  setSortCategory(item);
                }}
                key={index}
                className="popup-item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
