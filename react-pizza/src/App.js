import React from 'react';

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

export const AppContext = React.createContext({});

function App() {
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

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
        <AppContext.Provider value={{ cards, isLoading }}>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
