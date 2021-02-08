function addProductToCartRequest(product) {
  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: {
      product,
    },
  };
}

function addProductToCartSuccess(product) {
  return {
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload: {
      product,
    },
  };
}

function addProductToCartFailure(productId) {
  return {
    type: "ADD_PRODUCT_TO_CART_FAILURE",
    payload: {
      productId,
    },
  };
}

export {
  addProductToCartRequest,
  addProductToCartSuccess,
  addProductToCartFailure,
};
