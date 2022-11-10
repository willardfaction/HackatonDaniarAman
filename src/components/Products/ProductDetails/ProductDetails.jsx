import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/DetailsStyle.css";

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
          <div class="product__bg"></div>
          <div className="details-block">
            <div className="imageTitle">
              <h2
                style={{
                  marginBottom: "40px",
                }}>
                {productDetails.name}
              </h2>
              <img src={productDetails.image} alt="" width="375px" />
            </div>
            <div className="detailsMain">
              <div className="buttonPrice">
                <h3
                  style={{
                    fontSize: "48px",
                  }}>
                  {productDetails.price}
                  <sup
                    style={{
                      fontSize: "25px",
                    }}>
                    .00 $
                  </sup>
                </h3>
                <button className="addToCart">ADD TO CART</button>
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
