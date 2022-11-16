import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/DetailsStyle.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <>
      {productDetails ? (
        <div className="detailsMain">
          <div className="product__bg"></div>
          <div className="details-block">
            <div className="path">
              <h5
                style={{
                  fontWeight: "lighter",
                }}>
                Home
              </h5>
              <img
                src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-orange.png"
                alt=""
                height="20px"
              />
              <h5
                style={{
                  fontWeight: "lighter",
                }}>
                Catalog
              </h5>
              <img
                src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-orange.png"
                alt=""
                height="20px"
              />
              <h5
                style={{
                  color: "lightgrey",
                  fontWeight: "lighter",
                }}>
                {productDetails.name}
              </h5>
            </div>
            <h2
              style={{
                marginBottom: "40px",
                fontSize: "3em",
              }}>
              {productDetails.name}
            </h2>
            <div className="productInfo">
              <div className="imageTitle">
                <img
                  src={productDetails.imageDetails}
                  alt=""
                  width="375px"
                  className="imageDetails"
                />
              </div>
              <div className="infoRight">
                <div className="infoElement">
                  <div className="infoAbout">
                    <ul>
                      <li className="delivery">
                        <img src="https://steampay.com/img/svg/product/2.svg" />
                        <p>Моментальная доставка</p>
                      </li>
                      <li>
                        <img
                          src="https://steampay.com/img/svg/product/3.svg"
                          alt=""
                        />
                        <p>
                          Лицензионный <br />
                          <span style={{ color: "#ff793a" }}>ключ</span>{" "}
                          активации в STEAM
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://steampay.com/img/svg/product/3.svg"
                          alt=""
                        />
                        <p>Регион: Россия, Украина и СНГ</p>
                      </li>
                      <li>
                        <img
                          src="https://steampay.com/img/svg/product/4.svg"
                          alt=""
                        />
                        <p>Накопительная скидка до 10%</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="buttonPrice">
                  <h3
                    style={{
                      fontSize: "48px",
                    }}>
                    {productDetails.price}
                    <sup
                      style={{
                        fontSize: "22px",
                      }}>
                      .00 USD
                    </sup>
                  </h3>
                  <button class="btn-43">
                    <span class="old">Buy</span>
                    <span class="new">Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default ProductDetails;
