import * as Api from './api'
import * as Type from './actionTypes'
import { REQUEST_ERROR } from '../error'
import { fromJS } from 'immutable'

import { call, fork, put, take } from 'redux-saga/effects'
import Machine from '../../utils/machine'

const driverState = {
  currentState: 'driver_screen',
  states: {
    driver_screen: {
      fetch: 'loading'
    },
    loading: {
      success: 'driver_screen',
      failure: 'error'
    },
    error: {
      fetch_retry: 'driver_screen'
    }
  }
}

function * screenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'fetch':
      yield put({
        type: Type.FETCH_PROFILE_SUCCESS,
        payload: data
      })
      break
    default:
      yield put({
        type: REQUEST_ERROR,
        payload: fromJS({ message: '没有相应的操作。' })
      })
      break
  }
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

function * loadingEffect(scope) {
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: true }
  })
}

function * errorEffect(scope, error) {
  yield put({ type: REQUEST_ERROR, payload: fromJS(error) })
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

const driverEffects = {
  loading: loadingEffect,
  error: errorEffect,
  driver_screen: screenEffect
}

const machine = new Machine(driverState, driverEffects)
const fetchEffect = machine.getEffect('fetch')
const successEffect = machine.getEffect('success')
const failureEffect = machine.getEffect('failure')

function * fetchProfileFlow(args) {
  while (true) {
    const { payload } = yield take(Type.FETCH_PROFILE_REQUEST)
    yield fetchEffect('screen')
    try {
      const driver = yield call(Api.getDriverByUsername, payload)
      if (driver) {
        yield successEffect('screen', 'fetch', driver)
      }
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('fetch_retry')
    }
  }
}

export default function * rootSagas() {
  yield fork(fetchProfileFlow)
}
