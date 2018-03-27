// @flow

import type { fromJS as Immut } from 'immutable'
import Immutable from 'immutable'
import * as Type from './actionTypes'
import { Toast } from 'antd-mobile'

const initialState = Immutable.fromJS({})

const errorReducer = (
  state: Immut = initialState,
  action: { type: string, payload: any }
) => {
  const { type, payload } = action
  switch (type) {
    case Type.REQUEST_ERROR:
      Toast.fail('网络超时或操作错误', 3)
      return state.clear().merge(payload)
    case Type.CLEAR_ERROR:
      return state.clear()
    default:
      return state
  }
}

export default errorReducer
