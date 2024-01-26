import React, { useRef, useState, useEffect } from "react";
 
function MaintainShops() {
  const [shops, setShops] = useState([]);
  const shopRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const openTimeRef = useRef();
 
 
  useEffect(() => {
    fetch(process.env.REACT_APP_DB_URL_SHOPS)
    .then(res => res.json())
    .then(json => setShops(json || []))
  }, []);
 
  const add = () => {
    // shop.push({"name": shopRef.current.value});
    // shop.push({"name": latitudeRef.current.value});
    // shop.push({"name": longitudeRef.current.value});
    // shop.push({"name": openTimeRef.current.value});
    const newShop = {
      "name": shopRef.current.value,
      "lat": latitudeRef.current.value,
      "long": longitudeRef.current.value,
      "openTime": openTimeRef.current.value
    }
    shops.push(newShop);
 
    fetch(process.env.REACT_APP_DB_URL_SHOPS, {"method": "PUT", "body": JSON.stringify(shops)})
    setShops(shops.slice());
    shopRef.current.value = "";
    latitudeRef.current.value = "";
    longitudeRef.current.value = "";
    openTimeRef.current.value = "";
  }
 
  const deleteShop =(index) => {
    // categories.push({"name": categoryRef.current.value});
    shops.splice(index,1);
    fetch(process.env.REACT_APP_DB_URL_SHOPS, {"method": "PUT", "body": JSON.stringify(shops)})
    setShops(shops.slice()); 
  }
 
  return (
  <div>
    <label>Poe nimi</label><br />
    <input ref={shopRef} type="text"/><br />
    <label>Latitude</label><br />
    <input ref={latitudeRef} type="text" /><br />
    <label>Longtude</label><br />
    <input ref={longitudeRef} type="text" /><br />
    <label>Avatud</label><br />
    <input ref={openTimeRef} type="text" /><br />
 
    <button onClick={add}>Sisesta</button><br />
 
    {shops.map((shop, index) => 
      <div key={shop.name}>
        {shop.name}
        <button onClick={() => deleteShop(index)}>x</button>
        </div>)
        }
  </div>
  )
}
 
export default MaintainShops;
 
// täpselt samamoodi nagu MaintainCategories:
  // 1. VÕTTA
  // 2. LISADA: 
  // name: nameRef
  // latitude: latitudeRef
  // longitude: longitudeRef
  // openTime: openTimeRef
  // 3. KUSTUTADA