import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div>
      <img src={item.image} alt="" />
      <h3>{item.name}</h3>
      <h3>{item.price}$</h3>
    </div>
  );
};

export default ProductCard;
