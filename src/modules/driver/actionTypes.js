import addPrefix from '../../utils/addPrefix'

export const MODULE_NAME = 'DRIVER'
const addDriverPrefix = addPrefix(MODULE_NAME)

export const SET_LOADING = addDriverPrefix('SET_LOADING')
export const FETCH_PROFILE_REQUEST = addDriverPrefix('FETCH_PROFILE_REQUEST')
export const FETCH_PROFILE_SUCCESS = addDriverPrefix('FETCH_PROFILE_SUCCESS')
