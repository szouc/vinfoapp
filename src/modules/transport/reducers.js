import * as Type from './actionTypes'

import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  screenLoading: false,
  formLoading: false,
  currentTransport: null,
  assignIds: [],
  acceptIds: [],
  checkIds: [],
  transportIds: []
})

const transportReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case Type.FETCH_SUCCESS:
      return state.set('transportIds', payload)
    case Type.FETCH_ASSIGN_SUCCESS:
      return state.set('assignIds', payload)
    case Type.FETCH_ACCEPT_SUCCESS:
      return state.set('acceptIds', payload)
    case Type.FETCH_CHECK_SUCCESS:
      return state.set('checkIds', payload)
    case Type.ACCEPT_SUCCESS:
      const assignPosition = state.get('assignIds').indexOf(payload)
      return state.deleteIn(['assignIds', assignPosition])
    case Type.TO_SUBMIT_SUCCESS:
      return state.set('currentTransport', payload)
    case Type.SAVE_SUCCESS:
      return state.set('currentTransport', payload)
    case Type.SUBMIT_SUCCESS:
      const acceptPosition = state.get('acceptIds').indexOf(payload)
      return state.deleteIn(['assignIds', acceptPosition])
    case Type.SET_LOADING:
      return state.set(`${payload.scope}Loading`, payload.loading)
    default:
      return state
  }
}

export default transportReducer
