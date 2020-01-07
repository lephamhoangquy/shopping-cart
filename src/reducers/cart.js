import _ from "lodash";
import { ActionType } from "../constant";
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

const products = (state = initialState, action) => {
  const { product, quantity } = action;
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      const index = _.findIndex(state, item => item.product.id === product.id);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

export default products;
