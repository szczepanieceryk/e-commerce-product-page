import React from 'react';
import { ProductDetails } from '../types/types';
const ProductDescription: React.FC<ProductDetails> = ({
  name,
  description,
  company,
  originalprice,
  discountedPrice,
}) => {
  return (
    <>
      <span className="mb-2 block uppercase text-gray-500 text-xs">{company}</span>
      <span className="block text-2xl font-bold max-w-[200px]">{name}</span>
      <p className="my-4 text-gray-500 font-light">{description}</p>
      <div className="my-6 flex flex-wrap lg:max-w-[150px] justify-between items-center">
        <div className="flex items-center">
          <span className="mr-2 font-bold text-2xl">${discountedPrice}</span>
          <span className="mt-2 p-1 rounded-md bg-black text-white text-xs">50%</span>
        </div>
        <span className="lg:mt-2 text-gray-500 font-semibold">
          <s> ${originalprice}</s>
        </span>
      </div>
    </>
  );
};

export default ProductDescription;
