import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import api from "../../services/api";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <>
      <main>
        <h1>Catalog</h1>

        {catalog.map((product) => (
          <article key={product.id}>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> <button type="button">Buy</button>
          </article>
        ))}
      </main>
    </>
  );
};

export default Catalog;
