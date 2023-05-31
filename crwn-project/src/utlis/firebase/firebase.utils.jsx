import { initializeApp } from "firebase/app";
//for authentication
//in firebase sign-in with email doesn't need a provider it has by defaut, instead inset createUserWithEmailAndPassword method
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
//for database
//getDoc getting documents data
//setDoc set documnets data
//doc get a doc instance
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTrKgPqfTzHx4ZnQBy8jpLqJWVCvG5OjE",
  authDomain: "crwn-project-db-a616f.firebaseapp.com",
  projectId: "crwn-project-db-a616f",
  storageBucket: "crwn-project-db-a616f.appspot.com",
  messagingSenderId: "550147167103",
  appId: "1:550147167103:web:ce9dd197f4b846844fc04a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
//auth keeps tracking of the authentication state during entire application
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);
//for Database

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log("userSnapshot", userSnapshot);
  //if it exists in database or not
  console.log("userSnapshot", userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

//for sign-up using email "creating"
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

//for sign-in using email 
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser =async()=> await signOut(auth)


//This function is to monitor authenticaction state of the user 
export const onAuthStateChangedListener=(callback)=>{
  onAuthStateChanged(auth,callback)
}