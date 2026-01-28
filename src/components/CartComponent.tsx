import React, { useEffect, useRef } from 'react';
import { CartProps } from '../types/types';
import CartItem from './CartItem';

const CartComponent: React.FC<CartProps> = ({
  isCartOpen,
  setIsCartOpen,
  cartItems,
  updateCartQuantity,
  removeFromCart,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!isCartOpen) return;
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsCartOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const total = cartItems.reduce((sum, e) => sum + e.product.discountedPrice * e.quantity, 0);

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
      className="p-5 mx-auto absolute lg:right-[5rem] top-4 z-50 w-[95%] md:max-w-[400px] rounded-md shadow-xl bg-white"
    >
      <span className="block my-4 font-semibold">Cart</span>
      <hr />
      <div className="my-4">
        {cartItems.length === 0 && (
          <div className="py-8 text-center text-gray-500">Your cart is empty</div>
        )}

        {cartItems.length > 0 && (
          <>
            <div className="space-y-4">
              {cartItems.map((entry) => (
                <CartItem
                  key={entry.product.id}
                  product={entry.product}
                  quantity={entry.quantity}
                  total={total}
                  onRemove={() => removeFromCart(entry.product.id)}
                  onQuantityChange={(q: number) => updateCartQuantity(entry.product.id, q)}
                />
              ))}
            </div>
            <button className="py-3 mt-4 w-full bg-orange-500 text-gray-700 font-semibold rounded">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
