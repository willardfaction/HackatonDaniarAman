import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/CardStyle.css";
import { useCart } from "../../../contexts/CartContextProvider";
import { useAuth } from "../../../contexts/AuthContextProvider";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { user } = useAuth();

  const { addProductToCart } = useCart();
  // const [admin, setAdmin] = useState();

  function getAdmin() {
    console.log(user.isAdmin);
  }

  useEffect(() => getAdmin(), []);

  return (
    <div className="card">
      <div
        className="mainDetails"
        onClick={() => navigate(`/details/${item.id}`)}>
        <img src={item.imageList} alt="" className="productImage" />
        <div>
          <h3>{item.name}</h3>
          <h5
            style={{
              color: "grey",
            }}>
            {item.type}
          </h5>
        </div>
      </div>
      <div className="infoBlock">
        {user.isAdmin ? (
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
        ) : (
          <div>
            <button
              className="productButton"
              onClick={() => addProductToCart(item)}>
              Add To Cart
            </button>
          </div>
        )}
        <h3>{item.price}$</h3>
      </div>
    </div>
  );
};

export default ProductCard;
