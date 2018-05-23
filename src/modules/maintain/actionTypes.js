import addPrefix from '../../utils/addPrefix'

export const MODULE_NAME = 'MAINTAIN'
const addFuelPrefix = addPrefix(MODULE_NAME)

export const SET_LOADING = addFuelPrefix('SET_LOADING')
export const TO_ADD_REQUEST = addFuelPrefix('TO_ADD_REQUEST')
export const TO_ADD_SUCCESS = addFuelPrefix('TO_ADD_SUCCESS')
export const TO_FETCH_REQUEST = addFuelPrefix('TO_FETCH_REQUEST')
export const TO_FETCH_SUCCESS = addFuelPrefix('TO_FETCH_SUCCESS')
export const ADD_REQUEST = addFuelPrefix('ADD_REQUEST')
export const ADD_SUCCESS = addFuelPrefix('ADD_SUCCESS')
export const FETCH_REQUEST = addFuelPrefix('FETCH_REQUEST')
export const FETCH_SUCCESS = addFuelPrefix('FETCH_SUCCESS')
export const DELETE_REQUEST = addFuelPrefix('DELETE_REQUEST')
export const DELETE_SUCCESS = addFuelPrefix('DELETE_SUCCESS')
export const BACK_REQUEST = addFuelPrefix('BACK_REQUEST')
export const BACK_SUCCESS = addFuelPrefix('BACK_SUCCESS')
export const FETCH_VEHICLE_REQUEST = addFuelPrefix('FETCH_VEHICLE_REQUEST')
export const FETCH_VEHICLE_SUCCESS = addFuelPrefix('FETCH_VEHICLE_SUCCESS')
export const SET_VEHICLE_REQUEST = addFuelPrefix('SET_VEHICLE_REQUEST')
export const SET_VEHICLE_SUCCESS = addFuelPrefix('SET_VEHICLE_SUCCESS')
