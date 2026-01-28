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
    <div>
      <div className="max-w-[450px]">
        {productDetails?.map?.((product) => (
          <div key={product.id}>
            <ProductThumbnail {...product} />
            <ProductDescription {...product} />
            <CartHandling
              product={{ ...product }}
              itemQuantity={itemQuantity}
              setItemQuantity={setItemQuantity}
              addToCart={addToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
