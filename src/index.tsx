import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import CartProvider from './infoContext/CartContext';
import ProductProvider from './infoContext/ProductContext';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client = {client}>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);
