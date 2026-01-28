import React from 'react';
import Navigation from './layouts/Navigation';
import Cart from './components/CartComponent';
import ProductPage from './layouts/ProductPage';

import useCart from './hooks/useCart';

import { productDetails } from './data/ProductsData';

const App = () => {
  const {
    addToCart,
    removeFromCart,
    clearCart,
    updateCartQuantity,
    isCartOpen,
    setIsCartOpen,
    itemQuantity,
    setItemQuantity,
    cartItems,
  } = useCart();

  return (
    <>
      <header>
        <Navigation isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      </header>
      <main className="relative">
        <Cart
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          removeFromCart={removeFromCart}
          updateCartQuantity={updateCartQuantity}
          clearCart={clearCart}
          cartItems={cartItems}
        />

        <ProductPage
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
          productDetails={productDetails}
          addToCart={addToCart}
        />
      </main>
    </>
  );
};

export default App;
