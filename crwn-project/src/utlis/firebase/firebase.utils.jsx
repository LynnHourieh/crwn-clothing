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
  onAuthStateChanged,
} from "firebase/auth";
//for database
//getDoc getting documents data
//setDoc set documnets data
//doc get a doc instance
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";
//collection: This is a function provided by the Firebase Firestore SDK.
//It is used to create a reference to a collection within a Firestore database.
//The collection function takes two parameters: the Firestore database object and the name of the collection.



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

// create a function that allows us to upload categories from SHOP_DATA in a collection
//collectionKey is the User, Category
//objects are the json object (data)
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  //adding all objects in one successfull transaction=> use Batch
  const batch = writeBatch(db);
  //we can attach write , set , delete to batch
  // we have 5 different objects
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  //console.log("done");
};
//function to get data from Database
export const getCategoriesAndDocuments=async()=>{
const collectionRef=collection(db, "categories");
//By calling query(collectionRef), you create a query object that operates on the specified collection (collectionRef).
//This query object can be used to specify various conditions and filters to retrieve specific documents from the collection based on your requirements.
const q=query(collectionRef);
//getDocs: This is a function provided by the Firebase Firestore SDK.
//It is used to asynchronously retrieve the documents that match the specified query(collectionRef).
//The getDocs function takes the query object as a parameter.
const querySnapshot =await getDocs(q);
//categoryMap: It is an object that stores the category data extracted from the query results.
//The reduce method is used to iterate over the docs array in the querySnapshot.
//For each document, the title and items fields are extracted from the document's data using docSnapshot.data().
//Then, the title is converted to lowercase and used as the key in the categoryMap, with the corresponding items as the value.
const categoryMap =querySnapshot.docs.reduce((acc,docSnapshot)=>{
  const {title , items}=docSnapshot.data()
  acc[title.toLowerCase()]=items;
  return acc
},{})

return categoryMap
}
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
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

export const signOutUser = async () => await signOut(auth);

//This function is to monitor authenticaction state of the user
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
