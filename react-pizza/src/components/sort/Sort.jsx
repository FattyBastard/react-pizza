import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortCategory } from '../../redux/slices/sortSlice';

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
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => {
    return state.filter;
  });

  const onClickSort = (id) => {
    dispatch(setSortCategory(id));
  };

  return (
    <>
      <div
        onClick={() => {
          setVisiblePopup(!visiblePopup);
        }}
        className="sort">
        <img src="img/triangle.svg" alt="triangle" height={6} width={10} />
        <span>Сортировка по: </span>
        <div className="sorted-category">{sortType[sort].name}</div>
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
