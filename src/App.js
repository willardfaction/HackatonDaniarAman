import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
      </AuthContextProvider>
    </>
  );
};

export default App;
