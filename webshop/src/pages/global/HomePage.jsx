import React, { useState} from 'react'
import productsFromFile from "../../data/products.json";
import "../../css/HomePage.css";
// import cartFromFile from "../../data/cart.json"
// import { toast, ToastContainer } from "react-toastify";
 
function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
 
  const addToCart = (clickedProduct) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(clickedProduct);
    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  // 1. võtame localStorage-st
  // 2. võtame jutumärgid maha (converdime sõnast array, et saaks pushida)
  // 3. lisame juurde .push() abil
  // 4. paneme jutumärgid tagasi (localStorage-sse array panemiseks)
  // 5. paneme localStorage-sse tagasi
  // localStorage.setItem("teema", "dark");
  // localStorage.setItem("keel", "est");
 
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
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAsc}>Sort Price Asc</button>
      <button onClick={sortPriceDesc}>Sort Price Desc</button>
      <br />
      <br />
      <div className="products">
        {products.map(product => 
          <div key={product.id} className="product"> 
            <img className="image" src={product.image} alt="" />
            <div> {product.name} </div>
            <div> {product.price} </div>
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