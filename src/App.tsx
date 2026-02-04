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
    cartItemQuantity,
  } = useCart();

  return (
    <>
      <header>
        <Navigation
          isCartOpen={isCartOpen}
          cartItemQunatity={cartItemQuantity}
          setIsCartOpen={setIsCartOpen}
        />
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
      <footer className="my-[2rem] md:mt-[5rem] mx-auto max-w-md text-xs text-center">
        <div className="text-[#3e52a3]">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/szczepanieceryk">Eryk Szczepaniec</a>.
        </div>
      </footer>
    </>
  );
};

export default App;
