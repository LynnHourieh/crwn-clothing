import React, { Fragment } from "react";
import { useContext } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import { CategoriesContext } from "../../contexts/categories.context";

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);
  //console.log(categoriesMap)
  //Expected output from Objects.keys().map(): Array ["hats", "jackets", "mens"]
  //categoriesMap is an object of arrays , 
  
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {/*  hats : 0:{name..price..image}
                        1:{name:..price..image}*/}
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default Shop;
