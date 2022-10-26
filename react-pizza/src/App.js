import React from 'react';
import axios from 'axios';

import './App.scss';
import Card from './components/card/Card';

function App() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const getResource = async (url) => {
      return await axios.get(url);
    };
    try {
      getResource('http://localhost:8000/pizza').then((res) => {
        console.log(res.data);
        setCards(res.data);
      });
    } catch (error) {
      alert('Не получилось загрузить данные :(');
    }
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <div className="logo-part">
            <img className="logo" src="img/logo.svg" alt="logo" height={38} width={38} />
            <div className="logo-description">
              <h2>REACT PIZZA</h2>
              <span>самая вкусная пицца во вселенной</span>
            </div>
          </div>
          <div className="header-button">
            <span>520 ₽</span>
            <img src="img/slash.svg" alt="slash" className="slash" height={25} width={1} />
            <img src="img/cart.svg" alt="cart" className="cart" height={16} width={16} />
            <span className="items-count">3</span>
          </div>
        </header>
        <div className="container">
          <div className="upper-part">
            <ul className="categories">
              <li className="categories-item active">Все</li>
              <li className="categories-item">Мясные</li>
              <li className="categories-item">Вегетарианские</li>
              <li className="categories-item">Гриль</li>
              <li className="categories-item">Острые</li>
              <li className="categories-item">Закрытые</li>
            </ul>
            <div className="sort">
              <img src="img/triangle.svg" alt="triangle" height={6} width={10} />
              <span>Сортировка по: </span>
              <div className="sorted-category">популярности</div>
            </div>
          </div>

          <h2 className="all-pizza-header">Все пиццы</h2>
          <div className="all-pizza-container">
            {cards.map((object) => {
              return <Card {...object} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
