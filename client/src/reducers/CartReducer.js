import {   REMOVE_CART,
  ADD_CART , ADDRESS , ORDERS } from "../actions/types";

  const initialState = {
 cart:null,
 loading: false,
 address:null,
 orders:null
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
        case ADDRESS:
        return {
          ...state,
          loading: true,
          address: action.payload
        };
        case ORDERS:
          return {
            ...state,
            loading: true,
            orders: action.payload
          };
   
    default:
      return state;
  }
}
