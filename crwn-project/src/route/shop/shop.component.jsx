import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category  from '../category/category.component';

const Shop = () => {
  // ":category" it is a dynamic route provided => /shop/hats  ----/shop/jackets
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  );
};

export default Shop;