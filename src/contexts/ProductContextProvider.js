import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContextProvider";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const API = " http://localhost:8000/users";
const JSON_API_PRODUCTS = "http://localhost:8000/products";

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  const location = useLocation();

  const getProducts = async () => {
    console.log(window.location.search);
    const { data } = await axios(
      `${JSON_API_PRODUCTS}/${window.location.search}`
    );
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const addProduct = async newProduct => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    getProducts();
  };

  const deleteProduct = async id => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };

  const getProductDetails = async id => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: data,
    });
  };

  const saveEditedProduct = async newProduct => {
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);
    getProducts();
  };

  const values = {
    products: state.products,
    productDetails: state.productDetails,

    addProduct,
    getProducts,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
