import {   REMOVE_CART,
  ADD_CART } from "../actions/types";



export default function(state = {}, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
     
        user: action.payload
      };
      case ADD_CART:
        return {
          ...state,
       
          user: action.payload
        };
   
    default:
      return state;
  }
}
