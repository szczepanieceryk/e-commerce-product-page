import React from 'react';
import { ProductDetails } from '../types/types';
import arrowLeft from '../assets/images/icon-previous.svg';
import arrowRight from '../assets/images/icon-next.svg';

const ProductThumbnail: React.FC<ProductDetails> = ({ img }) => {
  return (
    <div className="max-w-[450px]">
      <div className="relative">
        <img src={img.mainImg} alt="" className="w-full lg:rounded-xl" />

        <div className="md:hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex justify-between w-[350px] px-3">
          <div className="flex items-center justify-center bg-white rounded-3xl w-10 h-10">
            <img src={arrowLeft} alt="Previous image" className="w-4 h-4 object-contain" />
          </div>

          <div className="flex items-center justify-center bg-white rounded-3xl w-10 h-10">
            <img src={arrowRight} alt="Next image" className="w-4 h-4 object-contain" />
          </div>
        </div>
      </div>
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
