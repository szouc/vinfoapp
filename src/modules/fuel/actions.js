import * as Type from './actionTypes'
import { createAction } from 'redux-actions'

export const fetchFuelsRequest = createAction(Type.FETCH_REQUEST)
export const addFuelRequest = createAction(Type.ADD_REQUEST)
export const deleteFuelRequest = createAction(Type.DELETE_REQUEST)
