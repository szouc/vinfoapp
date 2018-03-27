// @flow

import * as Type from './actionTypes'

import type { fromJS as Immut } from 'immutable'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  formLoading: false,
  wholeLoading: false
})

const authReducer = (
  state: Immut = initialState,
  action: { type: string, payload: any }
) => {
  const { type, payload } = action
  switch (type) {
    case Type.SET_AUTH:
      return state
        .set('loggedIn', payload.loggedIn)
        .set('username', payload.username)
    case Type.REMOVE_AUTH:
      return state.delete('loggedIn').delete('username')
    case Type.SET_LOADING:
      return state.set(`${payload.scope}Loading`, payload.loading)
    default:
      return state
  }
}

export default authReducer
