import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/CardStyle.css";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();

  return (
    <div className="card">
      <img src={item.image} alt="" height="120px" className="productImage" />
      <div className="infoBlock">
        <div>
          <h3>{item.name}</h3>
          <h5
            style={{
              color: "grey",
            }}>
            {item.type}
          </h5>
        </div>
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
            onClick={() => navigate(`/details/${item.id}`)}>
            Buy
          </button>
        </div>
        <h3>{item.price}$</h3>
      </div>
    </div>
  );
};

export default ProductCard;
