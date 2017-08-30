import fetch from 'isomorphic-fetch'
import { SET_PROFILE } from './constants'
const apiUrl = process.env.REACT_APP_API

export const getProfile = profileId => (dispatch, getState) => {
  fetch(apiUrl + `profiles/${profileId}`, getState())
    .then(res => res.json())
    .then(data => dispatch({ type: SET_PROFILE, payload: data }))
    .catch(err => console.log(err))
}
