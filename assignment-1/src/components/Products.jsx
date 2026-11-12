// src/components/Products.jsx
import React from 'react';
import Product from './Product';



const Products = ({ products }) => {


  return(

    
    <section className="products-container">
      {products.map((item) =>
        <Product key={item.id} product={ item} />
      )}

    </section>


  );

}

export default Products;


