import * as Api from './api'
import * as Type from './actionTypes'
import { REQUEST_ERROR } from '../error'
import { ADD_TRANSPORT_ENTITY, DELETE_ENTITY } from '../entity'
import { fromJS } from 'immutable'
import { NavigationActions } from 'react-navigation'
// import { resetSection } from 'redux-form'
import { Toast } from 'antd-mobile'

import { call, fork, put, take } from 'redux-saga/effects'
import Machine from '../../utils/machine'

const transportState = {
  currentState: 'main_screen',
  states: {
    main_screen: {
      initial: 'loading',
      to_accept: 'loading',
      to_active: 'loading',
      to_list: 'loading'
    },
    loading: {
      // response 'fetch', 'back'
      fetch_success: 'main_screen',
      // response 'to_accept', 'accept'
      accept_success: 'accept_screen',
      // response 'to_active', back_active', 'submit'
      active_success: 'active_screen',
      // response 'to_list'
      list_success: 'list_screen',
      // response 'to_submit', 'save'
      save_success: 'submit_screen',
      failure: 'error'
    },
    accept_screen: {
      accept: 'loading',
      back: 'loading'
    },
    active_screen: {
      to_submit: 'loading',
      back: 'loading'
    },
    submit_screen: {
      save: 'loading',
      submit: 'loading',
      back_active: 'loading'
    },
    list_screen: {
      back: 'loading'
    },
    error: {
      main_retry: 'main_screen',
      accept_retry: 'accept_screen',
      active_retry: 'active_screen',
      list_retry: 'list_screen',
      submit_retry: 'submit_screen'
    }
  }
}

function * mainScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put({
        type: Type.FETCH_SUCCESS,
        payload: data.get('result')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.get('entities')
      })
      break
    case 'back':
      yield put({
        type: Type.FETCH_SUCCESS,
        payload: data.get('result')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.get('entities')
      })
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
function * acceptScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'TransAccept' }))
      break
    case 'accept':
      yield put({
        type: Type.FETCH_SUCCESS,
        payload: data.get('result')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
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
        payload: { stateKey: 'transports', id: data }
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

function * activeScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'TransActive' }))
      break
    case 'submit':
      yield put({
        type: Type.ADD_SUCCESS,
        payload: data.get('result')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.get('entities')
      })
      Toast.success('提交成功！', 2)
      break
    case 'back_active':
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

function * submitScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'TransSubmit' }))
      break
    case 'save':
      yield put({
        type: Type.ADD_SUCCESS,
        payload: data.get('result')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.get('entities')
      })
      Toast.success('暂存成功！', 2)
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

function * listScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'TransList' }))
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

const transportEffects = {
  loading: loadingEffect,
  error: errorEffect,
  main_screen: mainScreenEffect,
  accept_screen: acceptScreenEffect,
  active_screen: activeScreenEffect,
  submit_screen: submitScreenEffect,
  list_screen: listScreenEffect
}

const machine = new Machine(transportState, transportEffects)
const initialEffect = machine.getEffect('initial')
const toAcceptScreenEffect = machine.getEffect('to_accept')
const toActiveScreenEffect = machine.getEffect('to_active')
const toListScreenEffect = machine.getEffect('to_list')
const fetchSuccessEffect = machine.getEffect('fetch_success')
const acceptSuccessEffect = machine.getEffect('accept_success')
const activeSuccessEffect = machine.getEffect('active_success')
const listSuccessEffect = machine.getEffect('list_success')
const saveSuccessEffect = machine.getEffect('save_success')
const acceptEffect = machine.getEffect('accept')
const toSubmitScreenEffect = machine.getEffect('to_submit')
const saveEffect = machine.getEffect('save')
const submitEffect = machine.getEffect('submit')
const backEffect = machine.getEffect('back')
const backActiveEffect = machine.getEffect('back_active')
const failureEffect = machine.getEffect('failure')

function * initialFlow() {
  while (true) {
    const { payload } = yield take(Type.FETCH_REQUEST)
    yield initialEffect('screen')
    try {
      const transports = yield call(Api.getDriverTransports, payload)
      if (transports) {
        yield fetchSuccessEffect('screen', 'initial', transports)
      }
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('main_retry')
    }
  }
}

function * toAcceptScreenFlow() {
  while (true) {
    yield take(Type.TO_ACCEPT_REQUEST)
    yield toAcceptScreenEffect('screen')
    try {
      yield acceptSuccessEffect('screen', 'initial')
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('main_retry')
    }
  }
}

function * toActiveScreenFlow() {
  while (true) {
    yield take(Type.TO_ACTIVE_REQUEST)
    yield toActiveScreenEffect('screen')
    try {
      yield activeSuccessEffect('screen', 'initial')
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('main_retry')
    }
  }
}

function * toListScreenFlow() {
  while (true) {
    yield take(Type.TO_LIST_REQUEST)
    yield toListScreenEffect('screen')
    try {
      yield listSuccessEffect('screen', 'initial')
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('main_retry')
    }
  }
}

function * toSubmitScreenFlow() {
  while (true) {
    yield take(Type.TO_SUBMIT_REQUEST)
    yield toSubmitScreenEffect('screen')
    try {
      yield saveSuccessEffect('screen', 'initial')
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('main_retry')
    }
  }
}

function * acceptFlow() {
  while (true) {
    const { payload } = yield take(Type.ACCEPT_REQUEST)
    yield acceptEffect('form')
    try {
      const transport = yield call(Api.acceptTransport, payload)
      if (transport) {
        yield acceptSuccessEffect('form', 'accept', transport)
      }
    } catch (error) {
      yield failureEffect('form', error)
      machine.operation('accept_retry')
    }
  }
}

function * saveFlow() {
  while (true) {
    const { payload } = yield take(Type.SAVE_REQUEST)
    yield saveEffect('screen')
    try {
      const transport = yield call(Api.updateTransport, payload)
      if (transport) {
        yield saveSuccessEffect('screen', 'save', transport)
      }
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('submit_retry')
    }
  }
}

function * submitFlow() {
  while (true) {
    const { payload } = yield take(Type.SUBMIT_REQUEST)
    yield submitEffect('screen')
    try {
      const transport = yield call(Api.submitTransport, payload)
      if (transport) {
        yield activeSuccessEffect('screen', 'submit', transport)
      }
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('submit_retry')
    }
  }
}

// function * deleteFuelFlow() {
//   while (true) {
//     const { payload } = yield take(Type.DELETE_REQUEST)
//     yield deleteFuelEffect('screen')
//     try {
//       const vehicle = yield call(Api.deleteVehicleFuel, payload)
//       if (vehicle) {
//         yield deleteSuccessEffect('screen', 'delete', vehicle)
//       }
//     } catch (error) {
//       yield failureEffect('screen', error)
//       machine.operation('fetch_retry')
//     }
//   }
// }

function * backFlow() {
  while (true) {
    const { payload } = yield take(Type.BACK_REQUEST)
    yield backEffect('screen')
    try {
      const transports = yield call(Api.getDriverTransports, payload)
      if (transports) {
        yield fetchSuccessEffect('screen', 'back', transports)
      }
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('main_retry')
    }
  }
}

function * backActiveFlow() {
  while (true) {
    yield take(Type.BACK_ACTIVE_REQUEST)
    yield backActiveEffect('screen')
    try {
      yield activeSuccessEffect('screen', 'back_active')
    } catch (error) {
      yield failureEffect('screen', error)
      machine.operation('submit_retry')
    }
  }
}

export default function * rootSagas() {
  yield fork(initialFlow)
  yield fork(toAcceptScreenFlow)
  yield fork(toActiveScreenFlow)
  yield fork(toListScreenFlow)
  yield fork(toSubmitScreenFlow)
  yield fork(acceptFlow)
  yield fork(saveFlow)
  yield fork(submitFlow)
  yield fork(backFlow)
  yield fork(backActiveFlow)
}
