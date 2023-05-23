import React from "react";
import { signInWithGooglePopup ,createUserDocumentFromAuth} from "../../utlis/firebase/firebase.utils";
//const user declares a constant variable called user, which cannot be reassigned a new value after it has been initialized.
//On the other hand, const {user} is using destructuring assignment to extract the user property from an object and assign it to a constant variable also called user. 
//This means that user will be a constant variable that holds the value of the user property from the object.
const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef= await createUserDocumentFromAuth(user)
    //console.log(user);
  };
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser
    }>SignIn with Google</button>
    </div>
  );
};
export default SignIn;
