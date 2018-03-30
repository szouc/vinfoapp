import addPrefix from '../../utils/addPrefix'

export const MODULE_NAME = 'FUEL'
const addFuelPrefix = addPrefix(MODULE_NAME)

export const SET_LOADING = addFuelPrefix('SET_LOADING')
export const ADD_REQUEST = addFuelPrefix('ADD_REQUEST')
export const ADD_SUCCESS = addFuelPrefix('ADD_SUCCESS')
export const FETCH_REQUEST = addFuelPrefix('FETCH_REQUEST')
export const FETCH_SUCCESS = addFuelPrefix('FETCH_SUCCESS')
export const DELETE_REQUEST = addFuelPrefix('DELETE_REQUEST')
export const DELETE_SUCCESS = addFuelPrefix('DELETE_SUCCESS')
