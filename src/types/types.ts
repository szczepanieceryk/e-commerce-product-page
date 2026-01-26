export interface CartProps {
  isCartOpen: boolean;
  isProductInCart?: boolean;
  cartItemsQuantity?: number;
  setIsCartOpen: (value: boolean) => void;
}

export interface CartStateProps {
  itemQuantity: number;
  setItemQuantity: (quantity: number) => void;
}

export interface ProductDetails {
  id: number;
  img: { mainImg: string; thumbnails: string[] };
  name: string;
  description: string;
  company: string;
  originalprice: number;
  discountedPrice?: number;
  quantity?: number;
}

export interface ProductPageProps extends CartStateProps {
  productDetails?: ProductDetails[];
}
