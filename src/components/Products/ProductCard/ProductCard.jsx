import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/CardStyle.css";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={item.image} alt="" height="80%" className="productImage" />
      <div className="infoBlock">
        <div>
          <h3>{item.name}</h3>
          <h3>{item.price}$</h3>
        </div>
        <div>
          <button>Edit</button>
          <button>Delete</button>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
