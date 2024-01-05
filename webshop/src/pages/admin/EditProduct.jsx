import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsFromFile from "../../data/products.json";

function EditProduct() {
  const { product_id } = useParams();
  // const leitud = tootedFailist[index]; <-- järjekorranumbriga leidmisel
  //                                              22676756  === "22676756" --> number
  const found = productsFromFile.find(product => product.id === Number(product_id));
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

  //   0    1    2    3
  // [{1}, {2}, {3}, {4}]
  // .find() ---> {3}
  // .findIndex() ---> 2
  // .filter() ---> [{3}]

  const edit = () => {
    const index = productsFromFile.findIndex(product => product.id === Number(product_id));
    productsFromFile[index] = {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked
    }
    navigate("/admin/products");
  }

  if (found === undefined) {
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
      <label>ID</label> <br />
      <input ref={idRef} type="number" defaultValue={found.id} /> <br />
      <label>Name</label> <br />
      <input ref={nameRef} type="text" defaultValue={found.name} /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} type="number" defaultValue={found.price} /> <br />
      <label>Image</label> <br />
      <input ref={imageRef} type="text" defaultValue={found.image} /> <br />
      <label>Category</label> <br />
      <input ref={categoryRef} type="text" defaultValue={found.category} /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" defaultChecked={found.active} /> <br />
      <button onClick={edit}>Muuda</button>
    </div>
  );
}

export default EditProduct;
