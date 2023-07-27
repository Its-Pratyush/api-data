import React from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <>
      <>
        <div className="container">
          {products &&
            products.map((item) => (
              <div key={item.id} className="item">
                <img src={item.thumbnail} alt="" className="card-img" />
                <Link to={`/product/${item.id}`}>{item.title}</Link>
              </div>
            ))}
        </div>
      </>
    </>
  );
}

export default ProductList;
