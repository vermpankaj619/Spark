import {   REMOVE_CART,
  ADD_CART } from "../actions/types";

  const initialState = {
 cart:null,
 loading: false,
  };

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        loading: true,
        cart: action.payload
      };
      case REMOVE_CART:
        return {
          ...state,
          loading: true,
          cart: action.payload
        };
   
    default:
      return state;
  }
}
