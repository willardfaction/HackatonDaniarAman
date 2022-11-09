import React from "react";

const AddProduct = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      <h2>Add product</h2>

      <input type="text" placeholder="Product name" />
      <input type="text" placeholder="Product price" />
      <input type="text" placeholder="Product image" />
      <input type="text" placeholder="Product description" />
      <button>Add product</button>
    </div>
  );
};

export default AddProduct;
