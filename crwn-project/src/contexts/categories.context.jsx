import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utlis/firebase/firebase.utils.jsx";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  //we commit use effect because every time we refresh the page it will upload new collection named categories
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  //getCategoriesMap is an async function so when we call it in useEffect we have to define a new function 
  //we can't write useEffect(async()=>{getCategoriesAndDocuments()},[])
  useEffect(()=>{
    const getCategoriesMap=async()=>{
      const categoryMap=await getCategoriesAndDocuments()
      //console.log(categoryMap)
      setCategoriesMap(categoryMap)
    }
   getCategoriesMap()
  },[])
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
