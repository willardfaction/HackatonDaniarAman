import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";
import ProductContextProvider from "./contexts/ProductContextProvider";

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default App;
