// src/App.jsx
import React from 'react';
import Products from './components/Products';
import ProductsData from './data.json';



function App() {

  console.log(ProductsData); 

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '70px', color: '#fff' }}>Product Listing App</h1>

      {/* Part 2: Pass products data as props */}
      <Products products={ProductsData} />
    </main>
  );
}

export default App;