import {  GET_CAT , STOCK } from "../actions/types";
  
    const initialState = {
   catlog:null,
   outofStock:null
    };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CAT:
        return {
          ...state,
          loading: true,
          catlog: action.payload
        };
        case STOCK:
        return {
          ...state,
          loading: true,
          outofStock: action.payload
        };
     
      default:
        return state;
    }
  }
  