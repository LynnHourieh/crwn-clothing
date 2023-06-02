import { createContext, useState, useEffect } from "react";

//addCartItem is to compare the id of cartItems with productToAdd
const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  //if found, increment quantity
  //return new modified cartItems / new cart item

  //existingCartItem returns boolean value
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == productToAdd.id
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

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
  cartTotal:0
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
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //The reduce method is a higher-order function that iterates over each element of the array and accumulates a single value based on a provided callback function. In this case, it calculates the total count of items in the cartItems array by summing up the quantity property of each cartItem.
  //default value = 0
  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);
  //setCartItems function calls addCartItem function to check the existance o product in dropdown list.
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    clearItemFromCart,
    cartItemCount,
    removeItemToCart,
    cartTotal
   

  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
