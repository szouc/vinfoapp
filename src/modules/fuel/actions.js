import * as Type from './actionTypes'
import { createAction } from 'redux-actions'

export const toAddRequest = createAction(Type.TO_ADD_REQUEST)
export const toFetchRequest = createAction(Type.TO_FETCH_REQUEST)
export const fetchFuelsRequest = createAction(Type.FETCH_REQUEST)
export const addFuelRequest = createAction(Type.ADD_REQUEST)
export const deleteFuelRequest = createAction(Type.DELETE_REQUEST)
export const backRequest = createAction(Type.BACK_REQUEST)
export const fetchVehiclesRequest = createAction(Type.FETCH_VEHICLE_REQUEST)
export const setVehicleRequest = createAction(Type.SET_VEHICLE_REQUEST)
