import * as Type from './actionTypes'
import { createAction } from 'redux-actions'

export const fetchProfileRequest = createAction(Type.FETCH_PROFILE_REQUEST)
export const toChangeRequest = createAction(Type.TO_CHANGE_REQUEST)
export const backRequest = createAction(Type.BACK_REQUEST)
export const changePasswordRequest = createAction(Type.CHANGE_PASSWORD_REQUEST)
