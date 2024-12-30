import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialProducts = [
  { id: 1, name: "iPhone 14", price: "$999" },
  { id: 2, name: "Samsung Galaxy S23", price: "$799" },
  { id: 3, name: "Google Pixel 7", price: "$699" },
];

function Admin() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const history = useHistory();

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (id) => {
    const newName = prompt("Enter new product name:");
    if (newName) {
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, name: newName } : product
        )
      );
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      const newId = products.length ? products[products.length - 1].id + 1 : 1;
      setProducts([...products, { id: newId, ...newProduct }]);
      setNewProduct({ name: "", price: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => editProduct(product.id)}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Add New Product</h3>
      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <button type="submit">Add Product</button>
      </form>

      <button onClick={() => history.push("/")}>Back to Home</button>
    </div>
  );
}

export default Admin;
