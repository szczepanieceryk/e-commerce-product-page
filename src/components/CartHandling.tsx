import React from 'react';
import cartIcon from '../assets/images/icon-cart.svg';
import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';
import { CartStateProps } from '../types/types';

const CartHandling: React.FC<CartStateProps> = ({
  itemQuantity,
  setItemQuantity,
  addToCart,
  product,
}) => {
  const increaseItemQuantity = () => {
    itemQuantity += 1;
    setItemQuantity(itemQuantity);
  };

  const decreaseItemQuantity = () => {
    itemQuantity > 0 ? (itemQuantity -= 1) : (itemQuantity = 0);

    setItemQuantity(itemQuantity);
  };

  return (
    <div className="md:flex flex-wrap items-center">
      <div className="p-4 flex flex-wrap justify-between items-center bg-[#f7f8fdff] rounded-lg md:w-1/3">
        <img
          src={minusIcon}
          alt="Decrease Item Quantity"
          onClick={decreaseItemQuantity}
          className="cursor-pointer"
        />
        <span>{itemQuantity}</span>
        <img
          src={plusIcon}
          alt="Increase Item Quantity"
          onClick={increaseItemQuantity}
          className="cursor-pointer"
        />
      </div>
      <button
        type="button"
        className="py-4 my-4 w-full h-auto rounded-lg bg-orange-500 hover:bg-orange-300 font-semibold shadow-lg shadow-orange-500/50 flex items-center justify-center gap-2 md:w-2/3"
        onClick={() => product && addToCart(product, itemQuantity)}
        disabled={!product || itemQuantity <= 0}
      >
        <img src={cartIcon} alt="Add to cart" className="w-5 h-5" />
        Add to cart
      </button>
    </div>
  );
};

export default CartHandling;
