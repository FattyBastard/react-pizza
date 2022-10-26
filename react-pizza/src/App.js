import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Cart } from './pages/Cart';

import './App.scss';

export const AppContext = React.createContext({});

function App() {
  const [cards, setCards] = React.useState([]);
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

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
    fetch('http://localhost:8000/pizza')
      .then((res) => res.json())
      .then((arr) => {
        setCards(arr);
        setIsLoading(false);
      });
  }, []);

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
