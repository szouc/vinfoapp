import * as Type from './actionTypes'
import { createAction } from 'redux-actions'

export const toAcceptRequest = createAction(Type.TO_ACCEPT_REQUEST)
export const toActiveRequest = createAction(Type.TO_ACTIVE_REQUEST)
export const toListRequest = createAction(Type.TO_LIST_REQUEST)
export const toCheckRequest = createAction(Type.TO_CHECK_REQUEST)
export const toSubmitRequest = createAction(Type.TO_SUBMIT_REQUEST)
export const initialRequest = createAction(Type.INITIAL_REQUEST)
export const fetchRequest = createAction(Type.FETCH_REQUEST)
export const fetchAssignRequest = createAction(Type.FETCH_ASSIGN_REQUEST)
export const fetchAcceptRequest = createAction(Type.FETCH_ACCEPT_REQUEST)
export const fetchCheckRequest = createAction(Type.FETCH_CHECK_REQUEST)
export const acceptRequest = createAction(Type.ACCEPT_REQUEST)
export const saveRequest = createAction(Type.SAVE_REQUEST)
export const submitRequest = createAction(Type.SUBMIT_REQUEST)
export const deleteRequest = createAction(Type.DELETE_REQUEST)
export const backRequest = createAction(Type.BACK_REQUEST)
export const backToActiveRequest = createAction(Type.BACK_ACTIVE_REQUEST)
