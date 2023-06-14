import React, { useContext } from "react";
import { ShoppingIcon,CartIconContainer,ItemCount } from "./cart-icon.styles";

import { CartContext } from "../../contexts/cart.context";
export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen ,cartItemCount } = useContext(CartContext);
  console.log(cartItemCount)
  //function to reverse the value of isCartOpen named as toogle
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  //console.log(isCartOpen)
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
    <ShoppingIcon className='shopping-icon' />
    <ItemCount>{cartItemCount}</ItemCount>
  </CartIconContainer>
  );
};
