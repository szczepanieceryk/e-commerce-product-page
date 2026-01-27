import React from 'react';
import { ProductDetails } from '../types/types';

const ProductThumbnail: React.FC<ProductDetails> = ({ img }) => {
  return (
    <div className="max-w-[450px]">
      <img src={img.mainImg} alt="" className="w-full lg:rounded-xl" />
      <div className="hidden mt-[2rem] lg:flex flex-wrap justify-beetwen gap-2">
        {img.thumbnails?.map?.((thumb, i) => (
          <img
            key={i}
            src={thumb}
            alt={`Thumbnail ${i + 1}`}
            className="w-24 h-24 rounded-lg border-2 border-transparent hover:border-orange-500 hover:opacity-25 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductThumbnail;
