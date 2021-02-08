import React, { useCallback } from "react";

import { useDispatch } from "react-redux";
import { addProductToCartRequest } from "../../store/modules/cart/actions";

const CatalogItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>R${product.price.toFixed(2)}</span> {"  "}
      <button type="button" onClick={handleAddProductToCart}>
        Buy
      </button>
    </article>
  );
};

export default CatalogItem;
