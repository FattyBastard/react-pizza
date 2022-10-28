import React from 'react';
import { AppContext } from '../../App';

export function Sort() {
  const sortType = [
    { name: 'популярности ASC', sortProperty: 'rating' },
    { name: 'алфавиту ASC', sortProperty: 'title' },
    { name: 'цене ASC', sortProperty: 'price' },
    { name: 'популярности DESC', sortProperty: '-rating' },
    { name: 'алфавиту DESC', sortProperty: '-title' },
    { name: 'цене DESC', sortProperty: '-price' },
  ];

  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const { sortCategory, onClickSort } = React.useContext(AppContext);

  return (
    <>
      <div
        onClick={() => {
          setVisiblePopup(!visiblePopup);
        }}
        className="sort">
        <img src="img/triangle.svg" alt="triangle" height={6} width={10} />
        <span>Сортировка по: </span>
        <div className="sorted-category">{sortType[sortCategory].name}</div>
        <ul className={visiblePopup ? `popup active` : `popup`}>
          {sortType.map((item, index) => {
            return (
              <li
                onClick={() => {
                  onClickSort(index);
                }}
                key={index}
                className="popup-item">
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
