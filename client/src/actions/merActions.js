import axios from "axios";


import {

    GET_CAT , STOCK , ONLINE
    
  } from './types';


export const getCatlog = () => (dispatch) => {

  axios
  .get('/api/users/catlog',)
   .then(
    res =>
    dispatch({
      type: GET_CAT,
      payload: res.data
    })

    

    )
    .catch(err =>
     console.log(err)
    ); 

};
export const editPrice= (profileData ) => (dispatch) => {

  axios
  .post('/api/users/editPrice', profileData)
   .then(
    res =>
    dispatch({
      type: GET_CAT,
      payload: res.data
    })

    

    )
    .catch(err =>
     console.log(err)
    ); 

};

export const outofstock= (profileData , history) => (dispatch) => {

  axios
  .post('/api/users/stock', profileData)
   .then(
    res =>
    dispatch({
      type: GET_CAT,
      payload: res.data
    })
   
    

    )
    .catch(err =>
     console.log(err)
    ); 

};
export const backstock= (profileData , history) => (dispatch) => {

  axios
  .post('/api/users/backstock', profileData)
   .then(
    res =>
    dispatch({
      type: GET_CAT,
      payload: res.data
    })

    

    )
   
    .catch(err =>
     console.log(err)
    ); 

};


export const getonline= (profileData ) => (dispatch) => {

  axios
  .get('/api/users/getonline', profileData)
   .then(
    res =>
    dispatch({
      type: ONLINE,
      payload: res.data
    })

    

    )
   
    .catch(err =>
     console.log(err)
    ); 

};

export const setonline= (profileData ) => (dispatch) => {

  axios
  .post('/api/users/setonline', profileData)
   .then(
    res =>
    dispatch({
      type: ONLINE,
      payload: res.data
    })

    

    )
   
    .catch(err =>
     console.log(err)
    ); 

};