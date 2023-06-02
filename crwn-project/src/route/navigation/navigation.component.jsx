import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utlis/firebase/firebase.utils";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
const Navigation = () => {
  //const {currentUser , setCurrentUser}=useContext(UserContext)
  // console.log(currentUser)

  // const signOutHandler =async ()=>{
  // const res = await signOutUser()
  // setCurrentUser(null)
  // console.log(res)
  // }
const {currentUser} =useContext(UserContext)
const{isCartOpen}=useContext(CartContext)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (<span className="nav-link" onClick={signOutUser}>Sign Out</span>):(<Link className="nav-link" to="/auth">
            Sign-In
          </Link>)}
        <CartIcon/>
        </div>
        {/* if isCartOpen is true => show CartDropdown Component */}
        {isCartOpen && <CartDropdown/> }
       
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
