import React from 'react';

import { AppContext } from '../../App';
import { Categories } from '../categories/Categories';
import { Sort } from '../sort/Sort';
import MyLoader from '../loader/Loader';
import Card from '../card/Card';

export function Home(props) {
  const { cards, isLoading } = React.useContext(AppContext);

  return (
    <>
      <div className="upper-part">
        <Categories />
        <Sort />
      </div>
      <h2 className="all-pizza-header">Все пиццы</h2>
      <div className="all-pizza-container">
        {isLoading
          ? [...Array(10)].map((_, index) => {
              return <MyLoader key={index} />;
            })
          : cards.map((object) => {
              return <Card key={object.id} {...object} />;
            })}
      </div>
    </>
  );
}
