import React, { useContext } from 'react';
import CartProvider, { CartContext } from './infoContext/CartContext';

function App() {

  const [cart, setCart] = useContext(CartContext);

  return (
    <CartProvider>
      <div className="App">
        <div>
          {

          }
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
