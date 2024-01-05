import React, { useState } from 'react';
import cartFromFile from '../../data/cart.json';
 
function Cart() {
  const [cart, setCart] = useState(cartFromFile);
 
  const emptyCart = () => {
    setCart([]);
  };
 
  const removeFromCart = (index) => {
    // const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    cart.splice(index,1);
    setCart(cart.slice());
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
        <div key={cartItem.id}>
          <p>{cartItem.name}</p>
          <p>{cartItem.description}</p>
          <p>{cartItem.price}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
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