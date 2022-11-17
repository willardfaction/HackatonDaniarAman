import React, { useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import "../../../styles/CardStyle.css";
import { Pagination } from "@mui/material";

const ProductList = ({ page, setPage, changeSideBarStatus }) => {
  const { products, getProducts, searchValue } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const itemsOnPage = 6;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return filteredProducts.slice(begin, end);
  }
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="productsList">
      <div className="listInfo">
        <h3>Products list</h3>
        <h5>Всего {products.length} товаров</h5>
      </div>
      <div className="motherProducts">
        {products ? (
          currentData().map(item => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <Pagination
        count={count}
        page={page}
        onChange={handlePage}
        className="paginationBar"
      />
    </div>
  );
};

export default ProductList;
