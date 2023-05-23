import { initializeApp } from "firebase/app";
//for authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//for Database

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef)
  console.log("userSnapshot",userSnapshot)
  //if it exists in database or not
  console.log("userSnapshot",userSnapshot.exists())
  if(!userSnapshot.exists()){
    const{displayName , email}=userAuth;
    const createdAt=new Date();
    try{
      await setDoc(userDocRef,{displayName,
      email,
      createdAt
    });
    }catch(error){
     console.log("error creating the user",error.message) 
    }

  }
  return userDocRef;
};
