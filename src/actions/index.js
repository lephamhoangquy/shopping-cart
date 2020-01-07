import { ActionType } from "../constant";

export const actAddToCart = (product, quantity) => {
  return {
    type: ActionType.ADD_TO_CART,
    product,
    quantity
  };
};

export const actIncrease = product => {
  return {
    type: ActionType.INCREASE,
    product
  };
};

export const actDecrease = product => {
  return {
    type: ActionType.DECREASE,
    product
  };
};
