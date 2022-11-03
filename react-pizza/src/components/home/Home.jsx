import React from 'react';

import ReactPaginate from 'react-paginate';

import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/sortSlice';
import { AppContext } from '../../App';
import { Categories } from '../categories/Categories';
import { Sort } from '../sort/Sort';
import MyLoader from '../loader/Loader';
import Card from '../card/Card';

export function Home(props) {
  const { cards, isLoading, inputValue } = React.useContext(AppContext);
  const dispatch = useDispatch();
  return (
    <div className="container">
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
          : cards
              .filter((card) => card.title.toLowerCase().includes(inputValue.toLowerCase()))
              .map((object) => {
                return <Card key={object.id} {...object} />;
              })}
      </div>
      <div className="paginator-container">
        <ReactPaginate
          className="paginator"
          pageClassName="paginator-item"
          breakLabel="..."
          nextLabel=">"
          onPageChange={(event) => {
            dispatch(setCurrentPage(event.selected + 1));
          }}
          pageRangeDisplayed={5}
          pageCount={4}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
