import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

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
    <>
      {product ? (
        <>
          <h2>Add product</h2>

          <input
            type="text"
            value={product.name}
            placeholder="Product name"
            name="name"
            onChange={handleInp}
          />
          <input
            type="text"
            value={product.price}
            placeholder="Product price"
            name="price"
            onChange={handleInp}
          />
          <input
            type="text"
            value={product.image}
            placeholder="Product image (url) "
            name="image"
            onChange={handleInp}
          />
          <input
            type="text"
            value={product.description}
            placeholder="Product description"
            name="description"
            onChange={handleInp}
          />
          <input
            type="text"
            value={product.type}
            placeholder="Product category"
            name="type"
            onChange={handleInp}
          />
          <button
            onClick={() => {
              saveEditedProduct(product);
              navigate("/products");
            }}>
            Save
          </button>
        </>
      ) : (
        <h3>Loading</h3>
      )}
    </>
  );
};

export default EditProduct;