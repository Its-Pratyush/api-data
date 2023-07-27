import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => alert("Data not fetched"));
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="container">
        <div className="mid">
          <div className="description">
            <img src={product.thumbnail} />
          </div>
          <div className="specs">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <li>Price: {product.price}</li>
            <li>Discount:{product.discountPercentage}</li>
            <li>Rating: {product.rating}</li>
            <li>Stock:{product.stock}</li>
            <li>Brand: {product.brand}</li>
            <li>Category: {product.category}</li>
          </div>
        </div>
      </div>
    </div>
  );
}
