import { createContext, useState, useEffect,useReducer  } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from "../utlis/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

setCurrentuser(payload)
//state object to derive next value ...previous value , or multiple values, multiple users
const userReducer = (state, action) => {
  console.log("dispatched");
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unahandeled type ${type} in userReducer`);
  }
};

export const INITAIL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  //const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITAIL_STATE);
  const { currentUser } = state;
  console.log(currentUser);
  //dispatch(  when we call it , we pass it an action object)
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };
  //  signOutUser is to sign out all the user's sign in
  //  signOutUser();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      //in case sign-in with google we have to save user data in database
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
