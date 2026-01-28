import React from 'react';
import Navigation from './layouts/Navigation';
import Cart from './components/CartComponent';
import ProductPage from './layouts/ProductPage';
import { ProductDetails } from './types/types';

import useCart from './hooks/useCart';

import productImg from './assets/images/image-product-1.jpg';
import thumb1 from './assets/images/image-product-1-thumbnail.jpg';
import thumb2 from './assets/images/image-product-2-thumbnail.jpg';
import thumb3 from './assets/images/image-product-3-thumbnail.jpg';
import thumb4 from './assets/images/image-product-4-thumbnail.jpg';

const productDetails: ProductDetails[] = [
  {
    id: 1,
    img: {
      mainImg: productImg,
      thumbnails: [thumb1, thumb2, thumb3, thumb4],
    },
    name: 'Fall Limited Edition Sneakers',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    company: 'sneaker company',
    originalprice: 250,
    discountedPrice: 125,
    quantity: 100,
  },
];

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
