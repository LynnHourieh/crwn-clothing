import React, { useEffect } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utlis/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss"
//const user declares a constant variable called user, which cannot be reassigned a new value after it has been initialized.
//On the other hand, const {user} is using destructuring assignment to extract the user property from an object and assign it to a constant variable also called user.
//This means that user will be a constant variable that holds the value of the user property from the object.
const Authentication = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     //adding user to database
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   fetchData();
  // }, []);
  //getRedirectResult is async function
  //[] empty array means that run this function one time after mounting
  //signInWithGoogleRedirect function will mount again so after mounting useEffect will run and it will console the response of the Redirect result
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   //console.log(user);
  // };
  // const logGoogleRedirectUser = async () => {
  //   const {user} = await signInWithGooglePopup();
  //  //application started from beginning , it didn't show user on console after sign-in with goggle Redirect so =>(use useEffect + getRedirectResult + auth)
  //   console.log({user});
  // };
  // <button onClick={logGoogleRedirectUser
  // }>SignIn with GoogleRedirect</button>
  return (
    <div>
   
      {/* <button onClick={logGoogleUser}>SignIn with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        SignIn with GoogleRedirect
  </button> */}
      <div className="authentication-container">
        {" "}
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};
export default Authentication;
