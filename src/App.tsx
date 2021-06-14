import React, { useContext } from 'react';
import './styles/global.css';
import Navigation from './components/header/Navigation';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NewsSection from './components/header/NewsSection';
import CartComponent from './components/content/CartComponent';
import Footer from './components/footer/Footer';
import HomeComponent from './majorComponents/HomeComponent';
import ProductsComponent from './majorComponents/ProductsComponent';
import CategoryProvider from './infoContext/CategoryContext';

import ScrollToTop from './helpers/scrollToTop'



function App() {

  const [isOpen, setIsOpen] = React.useState(false);

  const homeComponentProps = {isOpen, setIsOpen}

  return (
      <div className="App">
        <Router>
          <ScrollToTop>
            <NewsSection />
            <Navigation setIsOpen={setIsOpen}/>
            <CartComponent isOpen={isOpen} setIsOpen={setIsOpen} />
                <Switch>
                  <Route exact path={["/home", "/"]} component={HomeComponent} ></Route>
                  <CategoryProvider>
                    <Route exact path="/products" component={ProductsComponent}></Route>
                  </CategoryProvider>
                </Switch>
              <Footer />
            </ScrollToTop>
        </Router>
      </div>
  );
}

export default App;
