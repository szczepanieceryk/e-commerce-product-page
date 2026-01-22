import React from 'react';
import ProductThumbnail from '../components/ProductThumbnail';
import ProductDescription from '../components/ProductDescription';
const ProductPage: React.FC = () => {
  return (
    <div>
      <ProductThumbnail />
      <ProductDescription />
    </div>
  );
};

export default ProductPage;
