import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import api from "../../services/api";
import addProductToCart from "../../store/modules/cart/actions";

const Catalog = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddProductToCart = useCallback(
    (product) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <>
      <main>
        <h1>Catalog</h1>

        {catalog.map((product) => (
          <article key={product.id}>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {"  "}
            <button
              type="button"
              onClick={() => handleAddProductToCart(product)}
            >
              Buy
            </button>
          </article>
        ))}
      </main>
    </>
  );
};

export default Catalog;
