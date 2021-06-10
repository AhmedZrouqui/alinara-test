import React, { useContext } from 'react';
import './styles/global.css';
import Navigation from './components/header/Navigation';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Hero from './components/header/Hero';
import NewsSection from './components/header/NewsSection';



function App() {


  return (
      <div className="App">
        <Router>
            <NewsSection />
            <Navigation />
            <Hero />
        </Router>
      </div>
  );
}

export default App;
