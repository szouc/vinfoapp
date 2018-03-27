import addPrefix from '../../utils/addPrefix'

export const MODULE_NAME = 'AUTH'
const addAuthPrefix = addPrefix(MODULE_NAME)

export const SET_AUTH = addAuthPrefix('SET_AUTH')
export const REMOVE_AUTH = addAuthPrefix('REMOVE_AUTH')
export const SET_LOADING = addAuthPrefix('SET_LOADING')
export const LOGIN_REQUEST = addAuthPrefix('LOGIN_REQUEST')
export const LOGIN_SUCCESS = addAuthPrefix('LOGIN_SUCCESS')
export const LOGOUT_REQUEST = addAuthPrefix('LOGOUT_REQUEST')
export const LOGOUT_SUCCESS = addAuthPrefix('LOGOUT_SUCCESS')
