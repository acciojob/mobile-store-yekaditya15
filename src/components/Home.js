import React from "react";
import { Link } from "react-router-dom";

const initialProducts = [
  { id: 1, name: "iPhone 14" },
  { id: 2, name: "Samsung Galaxy S23" },
  { id: 3, name: "Google Pixel 7" },
];

function Home() {
  return (
    <div>
      <h1>Product Store</h1>
      <ul>
        {initialProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Home;
