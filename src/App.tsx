import React, { useState } from 'react';
import Navigation from './layouts/Navigation';
import Cart from './components/CartComponent';
import ProductPage from './layouts/ProductPage';
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
  const [itemQuantity, setItemQuantity] = useState<number>(1);
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
        <ProductPage itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} />
      </main>
    </>
  );
};

export default App;
