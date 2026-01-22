import React from 'react';
import productMainThumbnail from '../assets/images/image-product-1.jpg';
import productThumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import productThumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import productThumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import productThumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';
const ProductThumbnail = () => {
  return (
    <div className="max-w-[450px]">
      <img src={productMainThumbnail} alt="" className="w-full lg:rounded-xl" />
      <div className="hidden mt-[2rem] lg:flex flex-wrap justify-beetwen gap-5">
        <img
          src={productThumbnail1}
          alt=""
          className="w-24 h-24 rounded-lg border-2 border-transparent hover:border-orange-500 hover:opacity-25 cursor-pointer"
        />
        <img
          src={productThumbnail2}
          alt=""
          className="w-24 h-24 rounded-lg border-2 border-transparent hover:border-orange-500 hover:opacity-25 cursor-pointer"
        />
        <img
          src={productThumbnail3}
          alt=""
          className="w-24 h-24 rounded-lg border-2 border-transparent hover:border-orange-500 hover:opacity-25 cursor-pointer"
        />
        <img
          src={productThumbnail4}
          alt=""
          className="w-24 h-24 rounded-lg border-2 border-transparent hover:border-orange-500 hover:opacity-25 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductThumbnail;
