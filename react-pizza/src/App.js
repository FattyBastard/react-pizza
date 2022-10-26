import React from 'react';

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';

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
    <AppContext.Provider value={{ cards, isLoading }}>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="container">
            <Home />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
