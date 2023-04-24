import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <div  key={category.id} className="category-container">
    <div className="background-image" style={{backgroundImage:`url(${category.imageURL})`}} />
    <div className="category-body-container">
      <h2>{category.title}</h2>
      <p>shop</p>
    </div>
  </div>
  )
}

export default CategoryItem