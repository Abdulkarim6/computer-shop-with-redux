import { ADD_TO_CART } from "../ActionTypes/actionTypes";

const initialState = {
  cart: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
  return state;
};
