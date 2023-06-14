import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  console.log("category",category)
  //jackets,mem,women....
  const { categoriesMap } = useContext(CategoriesContext);
  //Array of object that have category name ex: jacket:[{id,name,price},{id,name,price}]
  const [products, setProducts] = useState(categoriesMap[category]);
  //each time category change or categoriesMap , use Effect will set new value of products
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
