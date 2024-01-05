import React, { useState} from 'react'
import productsFromFile from "../../data/products.json";
import cartFromFile from "../../data/cart.json"
 
function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
 
  const addToCart = (clickedProduct) => {
    cartFromFile.push(clickedProduct);
  }
 
  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
    // setProducts([...products]);
  }

  const sortPriceAsc = () => {
    // const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    // setProducts(sortedProducts);
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }
  
  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }
 
  return (
    <div>
      <div>
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
        <button onClick={sortPriceAsc}>Sort Price Asc</button>
        <button onClick={sortPriceDesc}>Sort Price Desc</button>
        <br />
        <br />
        {products.map(product => 
          <div key={product.id}> 
            <img src={product.image} alt="" />
            <div> {product.name} </div>
            <div> {product.price} </div>
            <div> {product.description} </div>
            <div> {product.category} </div>
            <div> {product.active} </div>
            <button onClick={() => addToCart(product)}>Add to cart</button>
 
            <br />
            <br />
          </div>
          )}
      </div>
    </div>
  )
}
 
export default HomePage