import * as Type from './actionTypes'

import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  screenLoading: false,
  formLoading: false
})

const fuelReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case Type.ADD_SUCCESS:
      return state.set('current', payload)
    case Type.SET_LOADING:
      return state.set(`${payload.scope}Loading`, payload.loading)
    default:
      return state
  }
}

export default fuelReducer
