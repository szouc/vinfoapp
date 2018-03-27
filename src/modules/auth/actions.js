import * as Type from './actionTypes'

import { createAction } from 'redux-actions'

export const loginRequest = createAction(Type.LOGIN_REQUEST)
export const logoutRequest = createAction(Type.LOGOUT_REQUEST)
