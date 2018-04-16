import addPrefix from '../../utils/addPrefix'

export const MODULE_NAME = 'TRANSPORT'
const addFuelPrefix = addPrefix(MODULE_NAME)

export const SET_LOADING = addFuelPrefix('SET_LOADING')
export const FETCH_REQUEST = addFuelPrefix('FETCH_REQUEST')
export const FETCH_SUCCESS = addFuelPrefix('FETCH_SUCCESS')
export const TO_ACCEPT_REQUEST = addFuelPrefix('TO_ACCEPT_REQUEST')
export const TO_ACCEPT_SUCCESS = addFuelPrefix('TO_ACCEPT_SUCCESS')
export const TO_ACTIVE_REQUEST = addFuelPrefix('TO_ACTIVE_REQUEST')
export const TO_ACTIVE_SUCCESS = addFuelPrefix('TO_ACTIVE_SUCCESS')
export const TO_LIST_REQUEST = addFuelPrefix('TO_LIST_REQUEST')
export const TO_LIST_SUCCESS = addFuelPrefix('TO_LIST_SUCCESS')
export const ACCEPT_REQUEST = addFuelPrefix('ACCEPT_REQUEST')
export const ACCEPT_SUCCESS = addFuelPrefix('ACCEPT_SUCCESS')
export const TO_SUBMIT_REQUEST = addFuelPrefix('TO_SUBMIT_REQUEST')
export const TO_SUBMIT_SUCCESS = addFuelPrefix('TO_SUBMIT_SUCCESS')
export const SUBMIT_REQUEST = addFuelPrefix('SUBMIT_REQUEST')
export const SUBMIT_SUCCESS = addFuelPrefix('SUBMIT_SUCCESS')
export const BACK_ACTIVE_REQUEST = addFuelPrefix('BACK_ACTIVE_REQUEST')
export const BACK_ACTIVE_SUCCESS = addFuelPrefix('BACK_ACTIVE_SUCCESS')
export const BACK_REQUEST = addFuelPrefix('BACK_REQUEST')
export const BACK_SUCCESS = addFuelPrefix('BACK_SUCCESS')
