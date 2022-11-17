import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useContext } from "react";

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageList: "",
    imageDetails: "",
    type: "",
  });

  const handleInp = e => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "80px",
      }}>
      <h2>Add product</h2>

      <input
        type="text"
        placeholder="Product name"
        name="name"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Product price"
        name="price"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Product image in list"
        name="imageList"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Product image in details"
        name="imageDetails"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Product description"
        name="description"
        onChange={handleInp}
      />
      <input
        type="text"
        placeholder="Product category"
        name="type"
        onChange={handleInp}
      />
      <button
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}>
        Add product
      </button>
    </div>
  );
};

export default AddProduct;
