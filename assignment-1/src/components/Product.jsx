// src/components/Product.jsx
import React from 'react';

const Product = ({ product }) =>{

  // Destructuring props values
  const {image, title, price,rating, desc} = product;

return (

  <div className="product-card">
    
 
    <img src={image} alt={title} className="product-image" />


    <div className="product-details">
     

      <h2 className="product-title">{title}</h2> 
      <h4 className="product-price">${price}</h4>
      <h4 className="product-rating">{rating}</h4>
      <p className="product-desc">{desc}</p>

       <button className="btn-buy">Add to Cart</button>

    </div>

  </div>

);

}

export default Product;



