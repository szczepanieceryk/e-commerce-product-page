import React, { useEffect, useRef } from 'react';
import { CartProps } from '../types/types';

const CartComponent: React.FC<CartProps> = ({ isCartOpen, setIsCartOpen }) => {
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
      className={`${!isCartOpen ? 'hidden' : ''} absolute inset-x-0 lg:right-[5rem]  top-4 z-index-1000 w-[95%] md:max-w-[400px] min-h-64 p-3 mx-auto rounded-md border-2 border-black`}
    >
      <span className="block mb-4 font-semibold">Cart</span>
      <hr />
      <div className="min-h-48 flex items-center justify-center">
        <span className="block text-[hsl(223, 64%, 98%]">Your cart is empty</span>
      </div>
    </div>
  );
};

export default CartComponent;
