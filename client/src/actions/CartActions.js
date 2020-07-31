import axios from "axios";


import {
    REMOVE_CART,
    ADD_CART,
    ADDRESS
  
    
  } from './types';


export const addcart = (profileData) => (dispatch) => {

  axios
  .post('/api/users/Addcart', profileData)
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

export const removecart = (profileData) => (dispatch) => {

  axios
  .post('/api/users/RemoveCart', profileData)
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
export const getcart = () => (dispatch) => {

  axios
  .get('/api/users/cart')
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

export const getAddress = () => (dispatch) => {

  axios
  .get('/api/users/address')
   .then(
    res =>
          dispatch({
            type: ADDRESS,
            payload: res.data
          })
    

    )
    .catch(err =>
     console.log(err)
    ); 

};