import axios from 'axios';

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_SCH,
  GET_RES,
  BOOK,
  STORE,
  LOCOTION,
  SEARCH

  
} from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/users/details')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      console.log(err)
    );
};

export const getlist = () => dispatch => {

  axios
    .get('/api/users/list')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      console.log(err)
    );
};

export const setLoction = (profileData, history) => dispatch => {
  axios
  .post('/api/users/setloction', profileData)
    .then(res => history.push('/'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const getLoction = (profileData, history) => dispatch => {
  axios
  .get('/api/users/locotion', profileData)
    .then(res => 
      dispatch({
        type:LOCOTION,
        payload:res.data
      })
      )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};




export const createProfile = (profileData, history) => dispatch => {
  axios
  .post('/api/users/upadted', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const createSchedule = (profileData, history) => dispatch => {
  axios
  .post('/api/users/AddSchedule', profileData)
    .then(res => history.push('/AddSchedule'))
    .catch(err =>
     console.log(err)
    );
};
export const getId = (profileData, history) => dispatch => {
  axios
  .post('/api/users/data', profileData)
    .then(
res =>
      dispatch({
        type: GET_RES,
        payload: res.data
      })


    )
    .catch(err =>
     console.log(err)
    );
};

export const booking = (profileData, history) => dispatch => {
  axios
  .post('/api/users/Booked', profileData)
    .then(
   console.log(profileData)


    )
    .catch(err =>
     console.log(err)
    );
};
export const search = (profileData, history) => dispatch => {
  axios
  .post('/api/users/search', profileData)
    .then(
      res =>
      dispatch({
        type: SEARCH,
        payload: res.data
      })


    )
    .catch(err =>
     console.log(err)
    );
};

export const upload = (formData, history) => dispatch => {
  axios
  .post('/api/users/upload', formData)
    .then(
   console.log(formData)


    )
    .catch(err =>
     console.log(err)
    );
};
export const store = (profileData, history) => dispatch => {
  axios
  .post('/api/users/store', profileData)
   .then(
    res =>
          dispatch({
            type: STORE,
            payload: res.data
          })
    

    )
    .catch(err =>
     console.log(err)
    );
};

export const res = (profileData, history) => dispatch => {
  axios
  .post('/api/users/res', profileData)
   .then(
    res =>
          dispatch({
            type: GET_SCH,
            payload: res.data
          })
    

    )
    .catch(err =>
     console.log(err)
    );
};
export const getsch = () => dispatch => {

  axios
    .get('/api/users/sch')
    .then(res =>
      dispatch({
        type:  GET_SCH,
        payload: res.data
      })
    )
    .catch(err =>
      console.log(err)
    );
};






// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};