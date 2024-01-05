import React, { useState } from 'react';
import productsFromFile from "../../data/products.json"
import { Link } from 'react-router-dom';
 
function MaintainProduct() {
  const [products, setProducts] = useState(productsFromFile);
 
  const emptyProducts = () => {
    setProducts([]); 
  };

  // const deleteProduct = () => {

  // }
 
  return (
    <div>
      <button onClick={emptyProducts}>Delete</button>
      {products.map(product => 
          <div key={product.id}>
            <img src={product.image} alt="" />
            <div> {product.name} </div>
            <div> {product.price} </div>
            <div> {product.description} </div>
            <div> {product.category} </div>
            <div> {product.active} </div>
            <button>x</button>
            <Link to={"/admin/edit/" + product.id}>
              <button>Muuda</button>
            </Link>
            <br />
            <br />
          </div>
          )}
    </div>
  )
}
 
export default MaintainProduct
