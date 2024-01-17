import React, { useEffect, useRef, useState } from "react";

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(process.env.REACT_APP_DB_URL_CATEGORIES)
      .then(res => res.json()) // kui on "null", siis võta []
      .then(json => setCategories(json || []))
  }, []);

  const add = () => {
    categories.push({"name": categoryRef.current.value});
    fetch(process.env.REACT_APP_DB_URL_CATEGORIES, {"method": "PUT", "body": JSON.stringify(categories)})
    setCategories(categories.slice());
    categoryRef.current.value = "";
  }

  const deleteCategory = (index) => {
    categories.splice(index,1);
    fetch(process.env.REACT_APP_DB_URL_CATEGORIES, {"method": "PUT", "body": JSON.stringify(categories)})
    setCategories(categories.slice());
  }

  return (
    <div>
      <label>Kategooria nimi</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={add}>Sisesta</button> <br />
      {categories.map((category, index) => 
        <div key={category.name}>
          {category.name}
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>)
      }
    </div>
  );
}

export default MaintainCategories;
