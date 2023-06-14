import React from "react";
import { DirectoryContainer } from "./directory.styles.jsx";
import DirectoryItem from "../directory-item/directory-item.component.jsx";

export const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
