import { ProductDetails } from '../types/types';
import productImg from '../assets/images/image-product-1.jpg';
import thumb1 from '../assets/images/image-product-1-thumbnail.jpg';
import thumb2 from '../assets/images/image-product-2-thumbnail.jpg';
import thumb3 from '../assets/images/image-product-3-thumbnail.jpg';
import thumb4 from '../assets/images/image-product-4-thumbnail.jpg';

export const productDetails: ProductDetails[] = [
  {
    id: 1,
    img: {
      mainImg: productImg,
      thumbnails: [thumb1, thumb2, thumb3, thumb4],
    },
    name: 'Fall Limited Edition Sneakers',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    company: 'sneaker company',
    originalprice: 250,
    discountedPrice: 125,
    quantity: 100,
  },
];
