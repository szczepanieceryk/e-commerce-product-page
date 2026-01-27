import React from 'react';
import ProductThumbnail from '../components/ProductThumbnail';
import ProductDescription from '../components/ProductDescription';
import CartHandling from '../components/CartHandling';
import { ProductPageProps } from '../types/types';

const ProductPage: React.FC<ProductPageProps> = ({
  itemQuantity,
  setItemQuantity,
  productDetails,
}) => {
  return (
    <div>
      <div className="p-5 max-w-[450px]">
        {productDetails?.map?.((product) => (
          <div key={product.id}>
            <ProductThumbnail {...product} />
            <ProductDescription {...product} />
          </div>
        ))}
        <CartHandling itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} />
      </div>
    </div>
  );
};

export default ProductPage;
