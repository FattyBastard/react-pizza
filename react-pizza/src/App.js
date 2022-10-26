import React from 'react';
import axios from 'axios';

import './App.scss';
import Card from './components/card/Card';
import { Header } from './components/header/Header';
import { Categories } from './components/categories/Categories';
import { Sort } from './components/sort/Sort';

function App() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const getResource = async (url) => {
      return await axios.get(url);
    };
    try {
      getResource('http://localhost:8000/pizza').then((res) => {
        setCards(res.data);
      });
    } catch (error) {
      alert('Не получилось загрузить данные :(');
    }
  }, []);

  console.log('+');

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="upper-part">
            <Categories />
            <Sort />
          </div>
          <h2 className="all-pizza-header">Все пиццы</h2>
          <div className="all-pizza-container">
            {cards.map((object) => {
              return <Card key={object.id} {...object} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
