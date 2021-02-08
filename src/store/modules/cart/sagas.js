import { all, takeLatest, select } from "redux-saga/effects";

function* checkProductStock(addProductToCartRequest) {
  const { product } = addProductToCartRequest.payload;

  const currentQuantity = yield select((state) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  console.log(currentQuantity);
}

export default all([
  takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkProductStock),
]);
