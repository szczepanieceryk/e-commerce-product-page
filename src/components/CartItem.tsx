import React from 'react';
import productThumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import trashIcon from '../assets/images/icon-delete.svg';
const CartItem: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-betwen gap-6 items-center">
      <img src={productThumbnail} alt="" className="w-12 h-12 rounded-md" />
      <div>
        <span>Fall Limited Edition Sneakers</span>
        <span className="block">
          $125.00 x3 <strong>$375</strong>
        </span>
      </div>
      <img src={trashIcon} alt="" className="w-4 h-4 cursor-pointer" />
    </div>
  );
};

export default CartItem;
