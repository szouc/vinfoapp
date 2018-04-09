import * as Api from './api'
import * as Type from './actionTypes'
import { REQUEST_ERROR } from '../error'
import { ADD_VEHICLE_ENTITY, DELETE_ENTITY } from '../entity'
import { fromJS } from 'immutable'
import { NavigationActions } from 'react-navigation'
import { reset } from 'redux-form'
import { Toast } from 'antd-mobile'

import { call, fork, put, take } from 'redux-saga/effects'
import Machine from '../../utils/machine'

const fuelState = {
  currentState: 'main_screen',
  states: {
    main_screen: {
      to_add: 'loading',
      to_fetch: 'loading'
    },
    loading: {
      add_success: 'add_screen',
      fetch_success: 'fetch_screen',
      delete_success: 'fetch_screen',
      back_success: 'main_screen',
      failure: 'error'
    },
    add_screen: {
      add: 'loading',
      back: 'loading'
    },
    fetch_screen: {
      fetch: 'loading',
      delete: 'loading',
      back: 'loading'
    },
    error: {
      main_retry: 'main_screen',
      add_retry: 'add_screen',
      fetch_retry: 'fetch_screen'
    }
  }
}

function * mainScreenEffect(scope, action, data = '', pagination = {}) {
  yield put(NavigationActions.back())
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

/**
 * Fetch & Delete Fuel Screen
 *
 * @param {string} scope - the area of showing loading
 * @param {string} action - the phrase of the screen
 *  includes 'initial' , 'fetch' and 'delete'
 * @param {any} [data='']
 * @param {any} [pagination={}]
 */
function * fetchScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put({
        type: Type.FETCH_VEHICLE_SUCCESS,
        payload: data.get('result')
      })
      yield put({
        type: ADD_VEHICLE_ENTITY,
        payload: data.get('entities')
      })
      yield put(NavigationActions.navigate({ routeName: 'FuelFetch' }))
      break
    case 'fetch':
      yield put({
        type: Type.FETCH_SUCCESS,
        payload: data.get('result')
      })
      yield put({
        type: ADD_VEHICLE_ENTITY,
        payload: data.get('entities')
      })
      break
    case 'delete':
      yield put({
        type: Type.DELETE_SUCCESS,
        payload: data
      })
      yield put({
        type: DELETE_ENTITY,
        payload: { stateKey: 'fuels', id: data }
      })
      break
    default:
      yield put({
        type: REQUEST_ERROR,
        payload: fromJS({ message: '没有相应的操作。' })
      })
  }
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

function * addScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put({
        type: Type.FETCH_VEHICLE_SUCCESS,
        payload: data.get('result')
      })
      yield put({
        type: ADD_VEHICLE_ENTITY,
        payload: data.get('entities')
      })
      yield put(NavigationActions.navigate({ routeName: 'FuelAdd' }))
      break
    case 'add':
      yield put({
        type: Type.ADD_SUCCESS,
        payload: data.get('result')
      })
      yield put({
        type: ADD_VEHICLE_ENTITY,
        payload: data.get('entities')
      })
      yield put(reset('FuelAddForm'))
      Toast.success('提交成功！', 2)
      break
    default:
      yield put({
        type: REQUEST_ERROR,
        payload: fromJS({ message: '没有相应的操作。' })
      })
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

const fuelEffects = {
  loading: loadingEffect,
  error: errorEffect,
  main_screen: mainScreenEffect,
  add_screen: addScreenEffect,
  fetch_screen: fetchScreenEffect
}

const machine = new Machine(fuelState, fuelEffects)
const toAddScreenEffect = machine.getEffect('to_add')
const toFetchScreenEffect = machine.getEffect('to_fetch')
const addSuccessEffect = machine.getEffect('add_success')
const fetchSuccessEffect = machine.getEffect('fetch_success')
const deleteSuccessEffect = machine.getEffect('delete_success')
const backSuccessEffect = machine.getEffect('back_success')
const failureEffect = machine.getEffect('failure')
const addFuelEffect = machine.getEffect('add')
const fetchFuelsEffect = machine.getEffect('fetch')
const deleteFuelEffect = machine.getEffect('delete')
const backEffect = machine.getEffect('back')

function * toAddScreenFlow() {
  while (true) {
    const { payload } = yield take(Type.TO_ADD_REQUEST)
    yield toAddScreenEffect('screen')
    try {
      const vehicles = yield call(Api.getDriverVehicles, payload)
      if (vehicles) {
        yield addSuccessEffect('screen', 'initial', vehicles)
      }
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('main_retry')
    }
  }
}

function * toFetchScreenFlow() {
  while (true) {
    const { payload } = yield take(Type.TO_FETCH_REQUEST)
    yield toFetchScreenEffect('screen')
    try {
      const vehicles = yield call(Api.getDriverVehicles, payload)
      if (vehicles) {
        yield fetchSuccessEffect('screen', 'initial', vehicles)
      }
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('main_retry')
    }
  }
}

function * addFuelFlow() {
  while (true) {
    const { payload } = yield take(Type.ADD_REQUEST)
    yield addFuelEffect('form')
    try {
      const vehicle = yield call(Api.addVehicleFuel, payload)
      if (vehicle) {
        yield addSuccessEffect('form', 'add', vehicle)
      }
    } catch (error) {
      yield failureEffect('form', error)
      machine.operation('add_retry')
    }
  }
}

function * fetchFuelsFlow() {
  while (true) {
    const { payload } = yield take(Type.FETCH_REQUEST)
    yield fetchFuelsEffect('screen')
    try {
      const vehicle = yield call(Api.getVehicleFuels, payload)
      if (vehicle) {
        yield fetchSuccessEffect('screen', 'fetch', vehicle)
      }
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('fetch_retry')
    }
  }
}

function * deleteFuelFlow() {
  while (true) {
    const { payload } = yield take(Type.DELETE_REQUEST)
    yield deleteFuelEffect('screen')
    try {
      const vehicle = yield call(Api.deleteVehicleFuel, payload)
      if (vehicle) {
        yield deleteSuccessEffect('screen', 'delete', vehicle)
      }
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('fetch_retry')
    }
  }
}

function * backFlow() {
  while (true) {
    const { payload } = yield take(Type.BACK_REQUEST)
    yield backEffect('screen')
    try {
      const fuels = yield call(Api.getDriverVehicles, payload)
      if (fuels) {
        yield backSuccessEffect('screen', 'back', fuels)
      }
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('main_retry')
    }
  }
}

export default function * rootSagas() {
  yield fork(toAddScreenFlow)
  yield fork(toFetchScreenFlow)
  yield fork(addFuelFlow)
  yield fork(fetchFuelsFlow)
  yield fork(deleteFuelFlow)
  yield fork(backFlow)
}
