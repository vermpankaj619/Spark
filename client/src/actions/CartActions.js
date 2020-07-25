import axios from "axios";


import {
    REMOVE_CART,
    ADD_CART
  
    
  } from './types';


export const addcart = (profileData) => (dispatch) => {

  axios
  .post('/api/users/cart', profileData)
   .then(
    res =>
          dispatch({
            type: ADD_CART,
            payload: res.data
          })
    

    )
    .catch(err =>
     console.log(err)
    ); 

};