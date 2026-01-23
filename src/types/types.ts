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
