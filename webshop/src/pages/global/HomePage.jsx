import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const addToCart = (clickedProduct) => {}

  const sortAZ = () => {}

  const sortZA = () => {}

  const sortPriceAsc = () => {}

  const sortPriceDesc = () => {}

  return (
    <div>

      <div>
        {products.map(product =>
            <div key={product.id}>
              <img src={product.image} alt="" />
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div>{product.description}</div>
              <div>{product.category}</div>
              <div>{product.active}</div>
              <button>Lisa ostukorvi</button>
            </div>
          )}
      </div>
    </div>
  )
}

export default HomePage