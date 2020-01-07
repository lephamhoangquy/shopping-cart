import _ from "lodash";
import { ActionType } from "../constant";
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

const products = (state = initialState, action) => {
  const { product, quantity } = action;
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      const index = _.findIndex(state, item => item.product.id === product.id);
      if (index === -1) {
        state.push({
          product,
          quantity
        });
      } else if (
        index !== -1 &&
        state[index].quantity < state[index].product.inventory
      )
        state[index].quantity += quantity;

      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case ActionType.DECREASE: {
      const index = _.findIndex(state, item => item.product.id === product.id);
      if (state[index].quantity > 1) state[index].quantity -= 1;
      else {
        _.remove(state, item => item.product.id === product.id);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    case ActionType.INCREASE: {
      const index = _.findIndex(state, item => item.product.id === product.id);
      if (state[index].quantity < state[index].product.inventory)
        state[index].quantity += 1;
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    default:
      return [...state];
  }
};

export default products;
