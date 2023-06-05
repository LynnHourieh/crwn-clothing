import React from "react";
import "./category-preview.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import ProductCart  from "../product-card/product-card.component"
import { Link } from "react-router-dom";

export const CategoryPreview = ({products,title}) => {
 
  return (<div className='category-preview-container'>
     <h2>
    <Link className='title' to={title}>{title.toUpperCase()}</Link>
  </h2>

  <div className='preview'>
    {products
      .slice(0, 4)
      .map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
  </div>
</div>
   
  );
};
