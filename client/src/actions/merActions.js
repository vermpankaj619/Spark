import axios from "axios";


import {

    GET_CAT , STOCK 
    
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

