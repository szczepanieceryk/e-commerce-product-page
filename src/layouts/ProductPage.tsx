import React from 'react';
import ProductThumbnail from '../components/ProductThumbnail';
import ProductDescription from '../components/ProductDescription';
import CartHandling from '../components/CartHandling';
import { ProductPageProps } from '../types/types';

const ProductPage: React.FC<ProductPageProps> = ({
  itemQuantity,
  setItemQuantity,
  productDetails,
  addToCart,
}) => {
  return (
    <div className="max-w-7xl mx-auto">
      {productDetails?.map?.((product) => (
        <div key={product.id} className="md:flex md:mt-[7rem] flex-wrap justify-around gap-2">
          <ProductThumbnail {...product} />
          <div className="p-5 max-w-[500px]">
            <ProductDescription {...product} />
            <CartHandling
              product={{ ...product }}
              itemQuantity={itemQuantity}
              setItemQuantity={setItemQuantity}
              addToCart={addToCart}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
