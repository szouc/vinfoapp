import * as Type from './actionTypes'

import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  screenLoading: false,
  formLoading: false,
  user: null
})

const driverReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case Type.FETCH_PROFILE_SUCCESS:
      return state.set('user', payload)
    case Type.SET_LOADING:
      return state.set(`${payload.scope}Loading`, payload.loading)
    default:
      return state
  }
}

export default driverReducer
