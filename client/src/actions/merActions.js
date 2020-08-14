import axios from "axios";


import {

    GET_CAT , DATA , ONLINE , ORDERS
    
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

export const getorders= () => (dispatch) => {

  axios
  .get('/api/users/merorder')
   .then(
    res =>
    dispatch({
      type: ORDERS,
      payload: res.data
    })

    

    )
   
    .catch(err =>
     console.log(err)
    ); 

};

export const  filteritem = (data , order) => (dispatch) => {

console.log(data)


const car = data.filter(element => element.orderNumber === order);
console.log(car)

dispatch({
  type: DATA,
  payload: car
})

};

export const  accept= (data  , history) => (dispatch) => {

  axios
  .post('/api/users/accept', data)
   .then(
    res =>
   
  history.push('/preper')
     

    )
   
    .catch(err =>
     console.log(err)
    ); 
  
  };

  export const  prepare= (data  , history) => (dispatch) => {

    axios
    .post('/api/users/prepare', data)
     .then(
      res =>
     
  console.log('sd')
       
  
      )
     
      .catch(err =>
       console.log(err)
      ); 
    
    };