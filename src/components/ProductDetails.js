import React from "react";
import { useParams, Link } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    name: "iPhone 14",
    price: "$999",
    description: "Latest Apple iPhone",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: "$799",
    description: "Latest Samsung flagship",
  },
  {
    id: 3,
    name: "Google Pixel 7",
    price: "$699",
    description: "Google's premium phone",
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = initialProducts.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ProductDetails;
