import React, { useEffect, useRef } from 'react';
import { CartProps } from '../types/types';
import CartItem from './CartItem';

const CartComponent: React.FC<CartProps> = ({ isCartOpen, isProductInCart, setIsCartOpen }) => {
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
  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
      className={`${!isCartOpen ? 'hidden' : ''} ${isProductInCart ? '' : 'min-h-64'} p-5 mx-auto absolute lg:right-[5rem] top-4 z-index-1000 w-[95%] md:max-w-[400px] rounded-md shadow-xl`}
    >
      <span className="block my-4 font-semibold">Cart</span>
      <hr />
      <div
        className={`flex flex-wrap ${isProductInCart ? 'my-4' : 'min-h-48 items-center justify-center'}`}
      >
        {isProductInCart && (
          <>
            <CartItem />
            <button
              type="button"
              className="py-4 my-4 w-full h-auto rounded-lg bg-orange-500 font-semibold"
            >
              Checkout
            </button>
          </>
        )}
        {!isProductInCart && (
          <span className="block text-[hsl(223, 64%, 98%]">Your cart is empty</span>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
