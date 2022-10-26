import React from 'react';

export function Sort() {
  return (
    <div onClick={() => {}} className="sort">
      <img src="img/triangle.svg" alt="triangle" height={6} width={10} />
      <span>Сортировка по: </span>
      <div className="sorted-category">популярности</div>
    </div>
  );
}
