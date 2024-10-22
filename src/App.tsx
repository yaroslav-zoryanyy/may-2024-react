import React from 'react';
import './App.css';
import Products from "./components/Products";
import {ProductsArray} from "./components/Product";

function App () {
  return (
    <div>
      <Products skip={ProductsArray.skip}
                limit={ProductsArray.limit}
                total={ProductsArray.total}
                products={ProductsArray.products}/>
    </div>
  );
}

export default App;
