import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import productsFromFile from "../../data/products.json";

function SingleProduct() {
  const { product_id } = useParams();
  // see MINGI_MUUTUJA peab olema sama, mis App.js sees :MINGI_MUUTUJA nimetus
  // KUIDAS ÜLES OTSIDA:
  // VALE: const leitud = tootedFailist[index];
  const [products, setProducts] = useState([]);

  const found = products.find(product => product.id === Number(product_id));
  // MIKS-> sest eesti keelsel saatsime URLi järjekorranumbri, mitmes ta on
  //        praegu saadame ID, mis on toote omadus, mille järgi saame teda üle otsida .find() abil
  // Ülejäänud eesti keelse järgi


  useEffect(() => {
    fetch(process.env.REACT_APP_DB_URL_PRODUCTS)
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, []);

  if (found === undefined) {
    return <div>Toodet ei leitud!</div>
  }

  return (
    <div>
      <div>{found.id}</div>
      <div>{found.name}</div>
      <div>{found.price}</div>
      <div>{found.category}</div>
      <div>{found.description}</div>
    </div>
  )
}

export default SingleProduct