import * as Type from './actionTypes'

import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  screenLoading: false,
  formLoading: false,
  currentTransport: null,
  transportIds: []
})

const transportReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case Type.FETCH_SUCCESS:
      return state.set('transportIds', payload)
    case Type.ACCEPT_SUCCESS:
      return state.set('currentTransport', payload)
    case Type.SAVE_SUCCESS:
      return state.set('currentTransport', payload)
    case Type.SUBMIT_SUCCESS:
      return state.set('currentTransport', payload)
    case Type.SET_LOADING:
      return state.set(`${payload.scope}Loading`, payload.loading)
    default:
      return state
  }
}

export default transportReducer
