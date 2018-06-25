import addPrefix from '../../utils/addPrefix'

export const MODULE_NAME = 'DRIVER'
const addDriverPrefix = addPrefix(MODULE_NAME)

export const SET_LOADING = addDriverPrefix('SET_LOADING')
export const FETCH_PROFILE_REQUEST = addDriverPrefix('FETCH_PROFILE_REQUEST')
export const FETCH_PROFILE_SUCCESS = addDriverPrefix('FETCH_PROFILE_SUCCESS')
export const TO_CHANGE_REQUEST = addDriverPrefix('TO_CHANGE_REQUEST')
export const TO_CHANGE_SUCCESS = addDriverPrefix('TO_CHANGE_SUCCESS')
export const BACK_REQUEST = addDriverPrefix('BACK_REQUEST')
export const BACK_SUCCESS = addDriverPrefix('BACK_SUCCESS')
export const CHANGE_PASSWORD_REQUEST = addDriverPrefix('CHANGE_PASSWORD_REQUEST')
export const CHANGE_PASSWORD_SUCCESS = addDriverPrefix('CHANGE_PASSWORD_SUCCESS')
