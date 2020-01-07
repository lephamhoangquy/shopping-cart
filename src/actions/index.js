import { ActionType } from "../constant";

export const actAddToCart = (product, quantity) => {
  return {
    type: ActionType.ADD_TO_CART,
    product,
    quantity
  };
};
