import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import ProductContextProvider from "./contexts/ProductContextProvider";

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
      </ProductContextProvider>
    </>
  );
};

export default App;
