import React from 'react';
import { CartContextProvider } from './contexts/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <CartContextProvider>
      <ProductList />
      <Cart />
    </CartContextProvider>
  );
}

export default App;