import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utlis/firebase/firebase.utils";

import { signInWithGooglePopup } from "../../utlis/firebase/firebase.utils";

// import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const {setCurrentUser} = useContext(UserContext)
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    //const { user } = await signInWithGooglePopup();
    // const userDocRef = await createUserDocumentFromAuth(user);
    //console.log(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user)
      // console.log(user);
      resetFormFields();
    } catch (error) {
      if (error.code == "auth/wrong-password") {
        alert("Your Password is wrong");
      } else if (error.code == "auth/user-not-found") {
        alert("no user assosiated with email");
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
//setting an object conatins name od formInput with the value we are entering it 
    setFormFields({ ...formFields, [name]: value });
    //console.log(formFields)
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
          {/* type="button" because if we don't mention it's type then it will take its type as submit , which will make a conflict with sign in with email  */}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
