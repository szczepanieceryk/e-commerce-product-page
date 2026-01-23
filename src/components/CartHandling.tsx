import React from 'react';
import cartIcon from '../assets/images/icon-cart.svg';
import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';

const CartHandling: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-between items-center p-4 bg-[#f7f8fdff] rounded-lg">
        <img src={minusIcon} alt="" />
        <span>3</span>
        <img src={plusIcon} alt="" />
      </div>
      <div className="relative ">
        <img src={cartIcon} alt="" className="absolute top-[2rem]  left-[6rem]" />
        <button
          type="button"
          className="py-4 my-4 w-full h-auto rounded-lg bg-orange-500 font-semibold"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartHandling;
