import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";
import ProductContextProvider from "./contexts/ProductContextProvider";
import "./styles/Style.css";
import CartContextProvider from "./contexts/CartContextProvider";

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <Navbar />
            <MainRoutes />
          </CartContextProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default App;
