import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Cart } from './pages/Cart';

import { useSelector } from 'react-redux';

import './App.scss';

export const AppContext = React.createContext({});

function App() {
  const { activeCategory, sort } = useSelector((state) => {
    return state.filter;
  });

  const sortType = [
    { name: 'популярности ASC', sortProperty: 'rating' },
    { name: 'алфавиту ASC', sortProperty: 'title' },
    { name: 'цене ASC', sortProperty: 'price' },
    { name: 'популярности DESC', sortProperty: '-rating' },
    { name: 'алфавиту DESC', sortProperty: '-title' },
    { name: 'цене DESC', sortProperty: '-price' },
  ];

  const [cards, setCards] = React.useState([]);
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [inputValue, setInputValue] = React.useState('');

  const inputOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const totalPrice = selectedCards.reduce((accumulator, currentValue) => {
    return (accumulator += parseInt(currentValue.price));
  }, 0);

  const countEachProduct = (id) => {
    return selectedCards.filter((object) => {
      return parseInt(object.id) === parseInt(id);
    }).length;
  };

  const addToCart = (object) => {
    setSelectedCards((prev) => [...prev, object]);
  };

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://635bc6d8aa7c3f113dc5eb70.mockapi.io/pizza?${
        activeCategory > 0 ? `category=${activeCategory}` : ``
      }&sortBy=${sortType[sort].sortProperty.replace('-', '')}&order=${
        sortType[sort].sortProperty.includes('-') ? `desc` : `asc`
      }`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setCards(arr);
        setIsLoading(false);
      });
  }, [activeCategory, sort, inputValue]);

  return (
    <div className="App">
      <div className="wrapper">
        <AppContext.Provider
          value={{
            cards,
            setCards,
            isLoading,
            setIsLoading,
            selectedCards,
            setSelectedCards,
            addToCart,
            totalPrice,
            countEachProduct,

            inputValue,
            inputOnChange,
            setInputValue,
          }}>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" cart element={<Cart />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
