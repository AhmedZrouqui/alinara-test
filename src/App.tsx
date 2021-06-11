import React, { useContext } from 'react';
import './styles/global.css';
import Navigation from './components/header/Navigation';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Hero from './components/header/Hero';
import NewsSection from './components/header/NewsSection';
import Bestseller from './components/content/Bestseller';
import CartComponent from './components/content/CartComponent';



function App() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
      <div className="App">
        <Router>
            <NewsSection />
            <Navigation setIsOpen={setIsOpen}/>
            <Hero />
            <CartComponent isOpen={isOpen} setIsOpen={setIsOpen} />

            <Bestseller />
        </Router>
      </div>
  );
}

export default App;
