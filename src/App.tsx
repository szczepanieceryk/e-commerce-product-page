import React, { useState } from 'react';
import Navigation from './layouts/Navigation';
import Cart from './components/CartComponent';
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <>
      <header>
        <Navigation isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      </header>
      <main className="relative">
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      </main>
    </>
  );
};

export default App;
