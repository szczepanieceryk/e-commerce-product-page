export interface CartProps {
  isCartOpen: boolean;
  setIsCartOpen: (v: boolean) => void;
  cartItems: CartEntry[];
  updateCartQuantity: (productId: number, qty: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export interface CartStateProps {
  product: ProductDetails;
  itemQuantity: number;
  setItemQuantity: (quantity: number) => void;
  addToCart: (productToAdd: ProductDetails, quantity: number) => void;
}

export interface ProductDetails {
  id: number;
  img: { mainImg: string[]; thumbnails: string[] };
  name: string;
  description: string;
  company: string;
  originalprice: number;
  discountedPrice?: number;
  quantity?: number;
}

export interface ProductPageProps {
  itemQuantity: number;
  setItemQuantity: (quantity: number) => void;
  productDetails?: ProductDetails[];
  addToCart: (productToAdd: ProductDetails, quantity: number) => void;
}

export type CartEntry = {
  product: ProductDetails;
  quantity: number;
};

export interface CartItemProps {
  product: ProductDetails;
  total: number;
  quantity: number;
  onRemove: () => void;
  onQuantityChange: (q: number) => void;
}
