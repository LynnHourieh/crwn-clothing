import React from "react";
import "./category-preview.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import ProductCart from "../product-card/product-card.component.jsx";
import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";
export const CategoryPreview = ({ products, title }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
