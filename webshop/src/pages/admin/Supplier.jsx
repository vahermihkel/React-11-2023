import React, { useEffect, useState } from 'react'

function Supplier() {
  const [products, setProducts] = useState([]);

  // uef --> kui tullakse lehele ja me peame kohe käima panema API päringu
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json()) // KOGU PÄRINGU staatuskood, 404, 200, 403, 401, 500, metaandmed
      .then(json => setProducts(json)) // siia tuleb mis ma päriselt lehel näen
  }, []);

  // API päring - teise rakendusse päring
  //    SmartId, MobiilID
  //    Makse
  //    Pakiautomaadid
  //    Andmebaas
  //    Rahvastikuregister --> kelle laps

  return (
    <div>
       <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => 
            <tr key={product.id}>
              <td><img className="image" src={product.image} alt="" /></td>
              <td> {product.title} </td>
              <td> {product.price} </td>
              <td> {product.description} </td>
              <td> {product.category} </td>
              <td> {product.rating.rate}</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default Supplier