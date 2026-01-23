import React from 'react';
import ProductThumbnail from '../components/ProductThumbnail';
import ProductDescription from '../components/ProductDescription';
import CartHandling from '../components/CartHandling';
import { CartStateProps } from '../types/types';
const ProductPage: React.FC<CartStateProps> = ({ itemQuantity, setItemQuantity }) => {
  return (
    <div>
      <ProductThumbnail />
      <div className="p-5 max-w-[450px]">
        <ProductDescription />
        <CartHandling itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} />
      </div>
    </div>
  );
};

export default ProductPage;
