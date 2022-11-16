import React, { useState } from "react";
import ProductList from "../components/Products/ProductsList/ProductsList";

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const [isSideBar, setIsSideBar] = useState(true);

  function changeSideBarStatus() {
    setIsSideBar(!isSideBar);
  }

  return (
    <ProductList
      page={page}
      setPage={setPage}
      changeSideBarStatus={changeSideBarStatus}
    />
  );
};

export default ProductsPage;
