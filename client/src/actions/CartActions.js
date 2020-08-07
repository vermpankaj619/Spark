import axios from "axios";


import {

    ADD_CART,
    ADDRESS,
    GET_ERRORS,
    ORDERS,
  
    
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

export const setAddress = (profileData) => (dispatch) => {

  axios
  .post('/api/users/setaddress', profileData)
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

export const placeorder = (profileData ,  history) => (dispatch) => {

  axios
  .post('/api/users/placeorder', profileData)
  .then(res => history.push('/'))
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};

export const orders = () => (dispatch) => {

  axios
  .get('/api/users/orders', )
  .then(res => 
    dispatch({
      type: ORDERS,
      payload: res.data
    }))
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};