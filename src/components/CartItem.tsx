import React from 'react';
import productThumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import trashIcon from '../assets/images/icon-delete.svg';
import { CartItemProps } from '../types/types';

const CartItem: React.FC<CartItemProps> = ({ product, total, quantity, onRemove }) => {
  return (
    <div className="flex flex-wrap justify-betwen gap-6 items-center">
      <img src={productThumbnail} alt="" className="w-12 h-12 rounded-md" />
      <div>
        <span className="text-gray-500">{product.name}</span>
        <span className="block text-gray-500">
          ${product.discountedPrice} x{quantity} <strong className="text-black">${total}</strong>
        </span>
      </div>
      <img src={trashIcon} alt="" className="w-4 h-4 cursor-pointer" onClick={onRemove} />
    </div>
  );
};

export default CartItem;
