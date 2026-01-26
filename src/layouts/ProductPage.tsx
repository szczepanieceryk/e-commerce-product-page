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
      <ProductThumbnail img={productDetails[0].img} />
      <div className="p-5 max-w-[450px]">
        {productDetails?.map?.((product) => <ProductDescription key={product.id} {...product} />)}
        <CartHandling itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} />
      </div>
    </div>
  );
};

export default ProductPage;
