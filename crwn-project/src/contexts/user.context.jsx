import { createContext, useState, useEffect } from "react";
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

//provider

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
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
