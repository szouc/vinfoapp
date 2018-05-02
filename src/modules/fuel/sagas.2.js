import * as Api from './api'
import * as Type from './actionTypes'
import { REQUEST_ERROR } from '../error'
import { ADD_VEHICLE_ENTITY, ADD_FUEL_ENTITY, DELETE_ENTITY } from '../entity'
import { fromJS } from 'immutable'
import { NavigationActions } from 'react-navigation'
import { resetSection } from 'redux-form'
import { Toast } from 'antd-mobile'

import { call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import Machine from '../../utils/machine'

const fuelState = {
  currentState: 'main_screen',
  states: {
    main_screen: {
      fetch_vehicle: 'loading',
      set: 'loading',
      to_add: 'loading',
      to_fetch: 'loading'
    },
    loading: {
      fetch_vehicle_success: 'main_screen',
      set_success: 'main_screen',
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
  switch (action) {
    case 'initial':
      yield put({
        type: ADD_VEHICLE_ENTITY,
        payload: data.get('entities')
      })
      yield put({
        type: Type.FETCH_VEHICLE_SUCCESS,
        payload: data.get('result')
      })
      break
    case 'set':
      yield put({
        type: Type.SET_VEHICLE_SUCCESS,
        payload: data
      })
      break
    case 'back':
      yield put(NavigationActions.back())
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
      yield put(NavigationActions.navigate({ routeName: 'FuelFetch' }))
      break
    case 'fetch':
      yield put({
        type: ADD_FUEL_ENTITY,
        payload: data.get('entities')
      })
      yield put({
        type: Type.FETCH_SUCCESS,
        payload: data.get('result')
      })
      break
    case 'delete':
      yield put({
        type: DELETE_ENTITY,
        payload: { stateKey: 'fuels', id: data }
      })
      yield put({
        type: Type.DELETE_SUCCESS,
        payload: data
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
      yield put(NavigationActions.navigate({ routeName: 'FuelAdd' }))
      break
    case 'add':
      yield put({
        type: ADD_VEHICLE_ENTITY,
        payload: data.get('entities')
      })
      yield put({
        type: Type.ADD_SUCCESS,
        payload: data.get('result')
      })
      yield put(resetSection('FuelAddForm', 'litre', 'cost', 'mile'))
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
const fetchVehicleEffect = machine.getEffect('fetch_vehicle')
const setVehicleEffect = machine.getEffect('set')
const toAddScreenEffect = machine.getEffect('to_add')
const toFetchScreenEffect = machine.getEffect('to_fetch')
const fetchVehicleSuccessEffect = machine.getEffect('fetch_vehicle_success')
const setSuccessEffect = machine.getEffect('set_success')
const addSuccessEffect = machine.getEffect('add_success')
const fetchSuccessEffect = machine.getEffect('fetch_success')
const deleteSuccessEffect = machine.getEffect('delete_success')
const backSuccessEffect = machine.getEffect('back_success')
const failureEffect = machine.getEffect('failure')
const addFuelEffect = machine.getEffect('add')
const fetchFuelsEffect = machine.getEffect('fetch')
const deleteFuelEffect = machine.getEffect('delete')
const backEffect = machine.getEffect('back')

function * fetchVehicleFlow(action) {
  const { payload } = action
  yield fetchVehicleEffect('screen')
  try {
    const vehicles = yield call(Api.getDriverVehicles, payload)
    if (vehicles) {
      yield fetchVehicleSuccessEffect('screen', 'initial', vehicles)
    }
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * setVehicleFlow(action) {
  const { payload } = action
  yield setVehicleEffect('screen')
  try {
    yield setSuccessEffect('screen', 'set', payload)
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toAddScreenFlow() {
  yield toAddScreenEffect('screen')
  yield delay(200) // show spinning
  try {
    yield addSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toFetchScreenFlow() {
  yield toFetchScreenEffect('screen')
  yield delay(200)
  try {
    yield fetchSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * addFuelFlow(action) {
  const { payload } = action
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

function * fetchFuelsFlow(action) {
  const { payload } = action
  yield fetchFuelsEffect('screen')
  try {
    const fuels = yield call(Api.getVehicleFuels, payload)
    if (fuels) {
      yield fetchSuccessEffect('screen', 'fetch', fuels)
      // I dont know where does this action put ?
      yield put({
        type: Type.SET_VEHICLE_SUCCESS,
        payload: payload.vehicleId
      })
    }
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('fetch_retry')
  }
}

function * deleteFuelFlow(action) {
  const { payload } = action
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

function * backFlow(action) {
  const { payload } = action
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

export default function * rootSagas() {
  // yield fork(fetchVehicleFlow)
  // yield fork(setVehicleFlow)
  // yield fork(toAddScreenFlow)
  // yield fork(toFetchScreenFlow)
  // yield fork(addFuelFlow)
  // yield fork(fetchFuelsFlow)
  // yield fork(deleteFuelFlow)
  // yield fork(backFlow)
  yield takeLatest(Type.FETCH_VEHICLE_REQUEST, fetchVehicleFlow)
  yield takeLatest(Type.SET_VEHICLE_REQUEST, setVehicleFlow)
  yield takeLatest(Type.TO_ADD_REQUEST, toAddScreenFlow)
  yield takeLatest(Type.TO_FETCH_REQUEST, toFetchScreenFlow)
  yield takeLatest(Type.ADD_REQUEST, addFuelFlow)
  yield takeLatest(Type.FETCH_REQUEST, fetchFuelsFlow)
  yield takeLatest(Type.DELETE_REQUEST, deleteFuelFlow)
  yield takeLatest(Type.BACK_REQUEST, backFlow)
}
