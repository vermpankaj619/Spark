import axios from 'axios';

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_SCH
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
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
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

export const adddata = (data) => dispatch => {

  axios
    .get('/api/users/Adddata')
    .then(res =>
       console.log('upadted')
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