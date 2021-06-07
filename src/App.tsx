import React from 'react';
import CartProvider from './infoContext/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div>
          test
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
