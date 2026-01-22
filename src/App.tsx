import React, { useState } from 'react';
import Navigation from './layouts/Navigation';
import Cart from './components/CartComponent';
import ProductPage from './layouts/ProductPage';
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isProductInCart, setIsProductInCart] = useState<boolean>(false);

  return (
    <>
      <header>
        <Navigation isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      </header>
      <main className="relative">
        <Cart
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          isProductInCart={isProductInCart}
        />
        <ProductPage />
      </main>
    </>
  );
};

export default App;
