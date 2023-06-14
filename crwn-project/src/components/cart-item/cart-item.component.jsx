import './cart-item.styles.jsx';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

export const CartItem = ({ cartItem }) => {
  const { imageurl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
    <img src={imageurl} alt={`${name}`} />
    <ItemDetails>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
  );
};

