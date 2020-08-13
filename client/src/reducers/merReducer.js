import {  GET_CAT , STOCK  , ONLINE} from "../actions/types";
import { Online } from "../components/merchant/Menu/style/style";
  
    const initialState = {
   catlog:null,
   outofStock:null,
   online:null
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
        case ONLINE:
          return {
            ...state,
            loading: true,
            online: action.payload
          };
     
      default:
        return state;
    }
  }
  