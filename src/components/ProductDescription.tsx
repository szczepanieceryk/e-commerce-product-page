import React from 'react';

const ProductDescription = () => {
  return (
    <div className="p-5 max-w-[450px]">
      <span className="mb-2 block uppercase text-gray-500 text-xs">sneaker company</span>
      <span className="block text-2xl font-bold max-w-[200px]">Fall Limited Edition Sneakers</span>
      <p className="my-4 text-gray-500 font-light">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s.
      </p>
      <div className="my-6 flex flex-wrap lg:max-w-[150px] justify-between items-center">
        <div className="flex items-center">
          <span className="mr-2 font-bold text-2xl">$125.00</span>
          <span className="mt-2 p-1 rounded-md bg-black text-white text-xs">50%</span>
        </div>
        <span className="lg:mt-2 text-gray-500 font-semibold">$250</span>
      </div>
    </div>
  );
};

export default ProductDescription;
