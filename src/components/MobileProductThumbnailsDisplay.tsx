import React, { useState, useEffect } from 'react';
import { ProductDetails } from '../types/types';
import arrowLeft from '../assets/images/icon-previous.svg';
import arrowRight from '../assets/images/icon-next.svg';

const MobileProductThumbnailsDisplay: React.FC<ProductDetails> = ({ img }) => {
  const images = img.mainImg;
  const [index, setIndex] = useState<number>(0);

  const showPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setIndex((i) => (i + 1) % images.length);
  const selectIndex = (i: number) => setIndex(i);

  console.log(images);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length]);

  return (
    <>
      <div className="relative">
        <img
          src={images[index]}
          alt={`Product photo ${index + 1}`}
          className="w-full lg:rounded-xl object-cover transition-all duration-200"
        />
        <button
          type="button"
          aria-label="Previous image"
          onClick={showPrev}
          className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
        >
          <img src={arrowLeft} alt="" className="w-4 h-4 object-contain" />
        </button>

        <button
          type="button"
          aria-label="Next image"
          onClick={showNext}
          className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
        >
          <img src={arrowRight} alt="" className="w-4 h-4 object-contain" />
        </button>
      </div>
      <div className="hidden mt-[2rem] md:flex flex-wrap justify-around gap-2">
        {images?.map?.((thumb, i) => (
          <button
            key={i}
            type="button"
            onClick={() => selectIndex(i)}
            aria-label={`Pokaż obraz ${i + 1}`}
            className={`w-24 h-24 rounded-lg overflow-hidden border-2 ${
              i === index ? 'border-orange-500' : 'border-transparent'
            } focus:outline-none`}
          >
            <img src={thumb} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </>
  );
};

export default MobileProductThumbnailsDisplay;
