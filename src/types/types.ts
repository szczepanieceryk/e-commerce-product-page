export interface CartProps {
  isCartOpen: boolean;
  isProductInCart?: boolean;
  setIsCartOpen: (value: boolean) => void;
}
