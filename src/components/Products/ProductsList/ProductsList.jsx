import React, { useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import "../../../styles/CardStyle.css";

const ProductList = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h3>Products list</h3>
      <div className="motherProducts">
        {products ? (
          products.map(item => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};

export default ProductList;
