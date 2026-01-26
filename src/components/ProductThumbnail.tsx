import React from 'react';

interface ProductThumbnail {
  img: { mainImg: string; thumbnails: string[] };
}
const ProductThumbnail: React.FC<ProductThumbnail> = ({ img }) => {
  return (
    <div className="max-w-[450px]">
      <img src={img.mainImg} alt="" className="w-full lg:rounded-xl" />
      <div className="hidden mt-[2rem] lg:flex flex-wrap justify-beetwen gap-5">
        <img
          src={img.thumbnails[0]}
          alt=""
          className="w-24 h-24 rounded-lg border-2 border-transparent hover:border-orange-500 hover:opacity-25 cursor-pointer"
        />
        <img
          src={img.thumbnails[1]}
          alt=""
          className="w-24 h-24 rounded-lg border-2 border-transparent hover:border-orange-500 hover:opacity-25 cursor-pointer"
        />
        <img
          src={img.thumbnails[2]}
          alt=""
          className="w-24 h-24 rounded-lg border-2 border-transparent hover:border-orange-500 hover:opacity-25 cursor-pointer"
        />
        <img
          src={img.thumbnails[3]}
          alt=""
          className="w-24 h-24 rounded-lg border-2 border-transparent hover:border-orange-500 hover:opacity-25 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductThumbnail;
