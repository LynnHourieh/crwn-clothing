import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utlis/firebase/firebase.utils";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
const Navigation = () => {
  //const {currentUser , setCurrentUser}=useContext(UserContext)
  // console.log(currentUser)

  // const signOutHandler =async ()=>{
  // const res = await signOutUser()
  // setCurrentUser(null)
  // console.log(res)
  // }
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  //{/* if isCartOpen is true => show CartDropdown Component */}
  return (
    <Fragment>
    <NavigationContainer>
      <LogoContainer to='/'>
        <CrwnLogo />
      </LogoContainer>
      <NavLinks>
        <NavLink to='/shop'>SHOP</NavLink>

        {currentUser ? (
          <NavLink as='span' onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink to='/auth'>SIGN IN</NavLink>
        )}
        <CartIcon />
      </NavLinks>
      {isCartOpen && <CartDropdown />}
    </NavigationContainer>
    <Outlet />
  </Fragment>
  );
};
export default Navigation;
