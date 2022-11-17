import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/DetailsStyle.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();
  const navigate = useNavigate();

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
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/");
                }}
                className="pathBtn">
                Home
              </h5>
              <img
                src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-orange.png"
                alt=""
                height="18px"
              />
              <h5
                style={{
                  fontWeight: "lighter",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/products");
                }}
                className="pathBtn">
                Catalog
              </h5>
              <img
                src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-orange.png"
                alt=""
                height="18px"
              />
              <h5
                style={{
                  fontWeight: "lighter",
                  color: "lightgrey",
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
              <div className="infoLeft">
                <div className="imageTitle">
                  <img
                    src={productDetails.imageDetails}
                    alt=""
                    width="375px"
                    className="imageDetails"
                  />
                </div>
                <div className="productInfoLeft">
                  <ul>
                    <li className="productInfoLeftElment">
                      <div style={{ color: "#8b8b8b" }} className="infoKey">
                        Genre
                      </div>
                      <div className="infoIn">{productDetails.type}</div>
                    </li>
                    <li className="productInfoLeftElment">
                      <div style={{ color: "#8b8b8b" }} className="infoKey">
                        Language
                      </div>
                      <div className="infoIn">English / Russian</div>
                    </li>
                    <li className="productInfoLeftElment">
                      <p style={{ color: "#8b8b8b" }} className="infoKey">
                        Region
                      </p>
                      <p className="infoIn">Russia, Ukraine and CIS</p>
                    </li>
                    <li className="productInfoLeftElment">
                      <p style={{ color: "#8b8b8b" }} className="infoKey">
                        Publisher
                      </p>
                      <p className="infoIn">{productDetails.type}</p>
                    </li>
                    <li className="productInfoLeftElment">
                      <p style={{ color: "#8b8b8b" }} className="infoKey">
                        Developer
                      </p>
                      <p className="infoIn">{productDetails.type}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="infoRight">
                <div className="infoElement">
                  <div className="infoAbout">
                    <ul>
                      <li className="delivery">
                        <img src="https://steampay.com/img/svg/product/2.svg" />
                        <p>Instant Delivery</p>
                      </li>
                      <li>
                        <img
                          src="https://steampay.com/img/svg/product/3.svg"
                          alt=""
                        />
                        <p>
                          Licensed activation STEAM <br />
                          <span style={{ color: "#ff793a" }}>key</span>{" "}
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://steampay.com/img/svg/product/3.svg"
                          alt=""
                        />
                        <p>
                          <span style={{ color: "#ff793a" }}>Region:</span>{" "}
                          Russia, Ukraine and CIS
                        </p>
                      </li>
                      <li>
                        <img
                          src="https://steampay.com/img/svg/product/4.svg"
                          alt=""
                        />
                        <p>
                          Cumulative discount up to{" "}
                          <span style={{ color: "#ff793a" }}>10%</span>{" "}
                        </p>
                      </li>
                    </ul>
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
                <div className="productDesc">
                  <h3>Description</h3>
                  <p
                    style={{
                      marginTop: "20px",
                      fontWeight: "lighter",
                      color: "#111",
                      fontSize: "17px",
                    }}>
                    {productDetails.description}
                  </p>
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
