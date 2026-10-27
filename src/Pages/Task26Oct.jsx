import React, { use, useEffect, useState } from "react";

const Task26Oct = () => {
  const categories = ["beauty", "fragrances", "furniture", "groceries", "all"];
  const [category, setCategory] = useState([]);
  const [product, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) =>
        setCategory(
          data.filter((c) => [
            "all",
            "beauty",
            "fragrances",
            "furniture",
            "groceries",
          ].includes(c)),
        ),
      )
      //   .then((data) => console.log(data))
      .catch((err) => console.log(err));

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      //   .then((data) => console.log(data.products))
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Store</h1>

      {/* Category Buttons */}
      <div style={{ marginBottom: "20px" }}>
        {["All",...category].map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            style={{
              padding: "10px 15px",
              margin: "5px",
              backgroundColor: selectedCategory === c ? "blue" : "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {c === "All" ? "All Products" : c}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {product
          .filter((p) => {
            if (selectedCategory === "All") {
              return true;
            }

            return p.category === selectedCategory;
          })
          .map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={p.thumbnail}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "contain",
                }}
              />

              <h3>{p.title}</h3>
              <p>Category: {p.category}</p>
              <h3>₹{p.price}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Task26Oct;
