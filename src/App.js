import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products || [];
        setProducts(productList);
      })
      .catch((err) => alert("Data not fetched"));
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}
