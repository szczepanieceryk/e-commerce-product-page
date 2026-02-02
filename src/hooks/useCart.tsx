import { useState } from 'react';
import { ProductDetails, CartEntry } from '../types/types';

const useCart = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [cartItemQuantity, setCartItemQuantity] = useState<number>(0);
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
    setCartItemQuantity(qty);
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
    setCartItemQuantity(0);
  };

  const clearCart = () => setCartItems([]);

  return {
    addToCart,
    removeFromCart,
    clearCart,
    updateCartQuantity,
    isCartOpen,
    setIsCartOpen,
    itemQuantity,
    setItemQuantity,
    cartItems,
    setCartItems,
    product,
    setProduct,
    cartItemQuantity,
  };
};

export default useCart;
