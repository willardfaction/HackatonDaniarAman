import React from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  Paper,
  TableBody,
  TextField,
  Typography,
} from "@mui/material";
import { useCart } from "../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "../../styles/Cart.css";

export default function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCountOfProducts } = useCart();
  React.useEffect(() => {
    getCart();
  }, []);

  function clearCart() {
    localStorage.removeItem("cart");
    navigate("/");
  }
  console.log(cart);

  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <div className="cartTitle">
          <h2>Cart</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="cartBlock">
          <div className="productsListInCart">
            {cart?.products.map(row => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                <div key={row?.item?.id} className="productCardInCart">
                  <div className="imgName">
                    <div className="imgOfProduct">
                      <img src={row?.item?.imageList} alt="" width="250px" />
                    </div>
                    <div>
                      <h2 style={{ fontWeight: "lighter" }}>
                        {row?.item?.name}
                      </h2>
                      <h4 style={{ fontWeight: "lighter" }}>
                        {row?.item?.type}
                      </h4>
                    </div>
                  </div>
                  <div className="price">
                    <div className="priceBtn">
                      <input
                        type="number"
                        value={row?.count}
                        onChange={e =>
                          changeCountOfProducts(e.target.value, row?.item?.id)
                        }
                        className="valueInp"
                      />
                    </div>
                    <h2>{row?.item?.price}$</h2>
                    <CloseIcon
                      onClick={() => deleteFromCart(row?.item?.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <hr className="lineCart" />
              </div>
            ))}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "50px",
            }}>
            <button class="btn-43">
              <span class="old">Buy</span>
              <span class="new">Go to Payment </span>
            </button>
            <h2>Total Price: {cart?.totalPrice} $</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
