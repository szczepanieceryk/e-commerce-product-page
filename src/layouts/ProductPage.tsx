import React from 'react';
import ProductThumbnail from '../components/ProductThumbnail';
import ProductDescription from '../components/ProductDescription';
import CartHandling from '../components/CartHandling';
const ProductPage: React.FC = () => {
  return (
    <div>
      <ProductThumbnail />
      <div className="p-5 max-w-[450px]">
        <ProductDescription />
        <CartHandling />
      </div>
    </div>
  );
};

export default ProductPage;
