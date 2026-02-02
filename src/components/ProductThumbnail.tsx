import React from 'react';
import { ProductDetails } from '../types/types';

import MobileProductThumbnailsDisplay from './MobileProductThumbnailsDisplay';

const ProductThumbnail: React.FC<ProductDetails> = (img) => {
  return (
    <div className="max-w-[500px]">
      <MobileProductThumbnailsDisplay {...img} />
    </div>
  );
};

export default ProductThumbnail;
