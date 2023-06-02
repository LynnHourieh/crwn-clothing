import { createContext, useState,useEffect } from "react";

//addCartItem is to compare the id of cartItems with productToAdd
export const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  //if found, increment quantity
  //return new modified cartItems / new cart item

  //existingCartItem returns boolean value
  const existingCartItem = cartItems.find((cartItem) => 
    cartItem.id == productToAdd.id
  );
  // if true, do map in order to add quantity +1 of the product
  //if not return cartItem array
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id == productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //[...cartItems]: This part uses the spread syntax ([...array]) to create a new array that contains all the elements from the cartItems array.
  //{ ...productToAdd, quantity: 1 }: This part uses the spread syntax again to create a new object. It takes all the properties from productToAdd and spreads them into the new object. Additionally, it adds a new property quantity with a value of 1.
  // The resulting object represents the new item to be added to the cart.

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount:0
});
// products {
//     Id,
//     name,
//     price,
//     imageUrl,
//     quantity
// }
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const[cartItemCount,setCartItemCount]=useState(0)


  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);
  //setCartItems function calls addCartItem function to check the existance o product in dropdown list.
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const value = { isCartOpen, setIsCartOpen,addItemToCart,cartItems,cartItemCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
