import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/CardStyle.css";
import { useCart } from "../../../contexts/CartContextProvider";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();

  const { addProductToCart } = useCart();

  return (
    <div className="card">
      <div
        className="mainDetails"
        onClick={() => navigate(`/details/${item.id}`)}>
        <img src={item.imageList} alt="" className="productImage" />
        <div>
          <h3
            style={{
              fontWeight: "lighter",
            }}>
            {item.name}
          </h3>
          <div className="productType">
            <img
              src="https://steampay.com/img/platforms/1.png"
              alt=""
              style={{
                marginRight: "10px",
              }}
              width="20px"
            />
            <h5
              style={{
                color: "grey",
              }}>
              {item.type}
            </h5>
          </div>
        </div>
      </div>
      <div className="infoBlock">
        <div className="productButtons">
          <button
            onClick={() => navigate(`/edit/${item.id}`)}
            className="productButton">
            Edit
          </button>
          <button
            onClick={() => deleteProduct(item.id)}
            className="productButton">
            Delete
          </button>
          <button
            className="productButton"
            onClick={() => addProductToCart(item)}>
            Add To Cart
          </button>
        </div>
        <h3>{item.price}$</h3>
      </div>
    </div>
  );
};

export default ProductCard;
