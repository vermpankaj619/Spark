import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE,
    GET_SCH,
    GET_RES,
    SEARCH,
    STORE,
    LOCOTION
  } from '../actions/types';
  
  const initialState = {
    locotion:null,
    profile: null,
    profiles: null,
    Schedule:null,
    loading: false,
    res:null,
    book:null,
    search: null,
    store:null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOCOTION:
        return {
          ...state,
          locotion: action.payload,
          loading: true
        };
      case PROFILE_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_PROFILE:
        return {
          ...state,
          profile: action.payload,
          loading: false
        };
        case  GET_SCH:
          return {
            ...state,
            Schedule: action.payload,
            loading: false
          };
      case GET_PROFILES:
        return {
          ...state,
          profiles: action.payload,
          loading: false
        };
        case GET_RES:
        return {
          ...state,
          res: action.payload,
          loading: true
        };
        case STORE:
          return {
            ...state,
            store: action.payload,
            loading: true
          };
        case SEARCH:
        return {
          ...state,
          search: action.payload,
          loading: true
        };
      case CLEAR_CURRENT_PROFILE:
        return {
          ...state,
          profile: null
        };
      default:
        return state;
    }
  }