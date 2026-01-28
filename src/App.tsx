import React, { useState } from 'react';
import Navigation from './layouts/Navigation';
import Cart from './components/CartComponent';
import ProductPage from './layouts/ProductPage';
import { ProductDetails, CartEntry } from './types/types';
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
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [cartItems, setCartItems] = useState<CartEntry[]>([]);
  const [product, setProduct] = useState<ProductDetails | null>(null);

  const addToCart = (productToAdd: ProductDetails, qty: number) => {
    if (qty <= 0) return;
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((e) => e.product.id === productToAdd.id);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex] = {
          ...copy[existingIndex],
          quantity: copy[existingIndex].quantity + qty,
        };
        return copy;
      }
      return [...prev, { product: productToAdd, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (productId: number, qty: number) => {
    setCartItems((prev) =>
      prev
        .map((e) => (e.product.id === productId ? { ...e, quantity: Math.max(0, qty) } : e))
        .filter((e) => e.quantity > 0),
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((e) => e.product.id !== productId));
  };

  const clearCart = () => setCartItems([]);

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
