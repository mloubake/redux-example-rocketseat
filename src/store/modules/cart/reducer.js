import produce from "immer";

const INITIAL_STATE = {
  items: [],
};

const cart = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART_SUCCESS": {
        const { product } = action.payload;

        const productinCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );
        if (productinCartIndex >= 0) {
          draft.items[productinCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }

      default: {
        return state;
      }
    }
  });
};

export default cart;
