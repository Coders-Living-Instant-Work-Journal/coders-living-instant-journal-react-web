// actions related to the email profiles go ehre...

import superagent from 'superagent'
import cookie from 'react-cookies'
// consts
import { API_SERVER_URI } from '../config/config'
const token = () => {
  return cookie.load('Auth-Token')
}

export function createEmailProfile(newProfile) {
  return async function (dispatch) {
    const response = await superagent.post(`${API_SERVER_URI}/createEmailProfile`)
      .set('Authorization', `bearer ${token()}`)
      .send(newProfile)
    dispatch(CEPDispatch(response.body.email))
  }
}

function CEPDispatch(profile) {
  return { type: 'CREATE_EMAIL_PROFILE', payload: profile }
}

export function updateEmailProfile(profile) {
  return async function (dispatch) {
    const response = await superagent.put(`${API_SERVER_URI}/updateEmailProfile`).set('Authorization', `bearer ${token()}`)
      .send(profile)
    dispatch(UEPDispatch(response.body))
  }
}

function UEPDispatch(data) {
  return { type: 'UPDATE_EMAIL_PROFILE', payload: data }
}

export function getEmailProfiles() {
  return async function (dispatch) {
    const response = await superagent.get(`${API_SERVER_URI}/readEmailProfiles`).set('Authorization', `bearer ${token()}`)
    console.log(response, 'response.body')
    dispatch(GEPDispatch(response.body))
  }
}
function GEPDispatch(data) {
  return { type: 'GET_EMAIL_PROFILE', payload: data }
}

export function deleteEmailProfile(id) {
  return async function (dispatch) {
    const response = await superagent.delete(`${API_SERVER_URI}/deleteEmailProfile`).set('Authorization', `bearer ${token()}`).send({ id: id })
    dispatch(DEPDispatch(response.body.deletedProfile))
  }
}

function DEPDispatch(data) {
  return { type: 'DELETE_EMAIL_PROFILE', payload: data }
}
