import React, { useState } from 'react';
// import cartFromFile from '../../data/cart.json';
// import "../../css/Cart.css"; // <-- see teeb CSSi globaalseks
import styles from "../../css/Cart.module.css" // see teeb, et ta on ainult siin failis
 
function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
 
  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    // localStorage.setItem("cart", "[]");
  };
 
  const removeFromCart = (index) => {
    // const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    // localStorage.setItem("cart", '[{"id":27333323,"image":"https://i.ebayimg.com/thumbs/images/g/vmMAAOSwnXVibfoX/s-l225.webp","name":"Roblox Random Virtual","price":2.49,"description":"Roblox Random Virtual Toy Codes New Celebrity Series Sent By Messages Unused","category":"figure","active":true}]');
    setCart(cart.slice());
    // toast.success('Võtsid "ära" toote')
    // toast.success("Võtsid 'ära' toote")
  };
 
  const calculateCartSum = () => {
    // const sum = cart.reduce((total, item) => total + item.price, 0);
    let sum = 0;
    cart.forEach(item => sum = sum + item.price);
    return sum.toFixed(2); // Display total with 2 decimal places
  };
 
  // Ära näita HTMLs tühjendamise nuppu, ostukorvi kogusummat, kui on tühi
  // Näita teksti/mingit pilti kui on tühi
  return (
    <div>
      <h2>Cart</h2>
      {/* Display items in cart */}
      {cart.map((cartItem, index) => (
        <div key={cartItem.id} className={styles.product}>
          <img className={styles.image} src={cartItem.image} alt="" />
          <div className={styles.name}>{cartItem.name}</div>
          <div className={styles.price}>{cartItem.price}</div>
          <div className={styles.quantity}>
            <img className={styles.button} src="/minus.png" alt="" />
            <div>10 pcs</div>
            <img className={styles.button} src="/plus.png" alt="" />
          </div>
          <div className={styles.total}>hind*kogus€</div>
          {/* <button className={styles.button} >Remove</button> */}
          <img className={styles.button} src="/remove.png" onClick={() => removeFromCart(index)} alt="" />
        </div>
      ))}
 
      {/* Show cart total */}
      <p>Total: ${calculateCartSum()}</p>
 
      {/* Button to empty cart */}
      <button onClick={() => emptyCart()}>Empty Cart</button>
    </div>
  );
}
 
export default Cart;

// onClick={emptyCart}
// onClick={() => emptyCart()}
// onClick={() => removeFromCart(index)}
// {calculateCartSum()}

// Kui ma tahan kohe lehele tulles funktsiooni käima panna, siis panen sulud lõppu nii,
//    et () => algusesse ei pane