import * as Api from './api'
import * as Type from './actionTypes'
import { REQUEST_ERROR } from '../error'
import { ADD_TRANSPORT_ENTITY, DELETE_ENTITY } from '../entity'
import { fromJS } from 'immutable'
import { NavigationActions } from 'react-navigation'
// import { resetSection } from 'redux-form'
import { Toast } from 'antd-mobile'

import { all, call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import Machine from '../../utils/machine'

const transportState = {
  currentState: 'main_screen',
  states: {
    main_screen: {
      initial: 'loading',
      to_accept: 'loading',
      to_active: 'loading',
      to_check: 'loading',
      to_list: 'loading'
    },
    loading: {
      // response 'initial', 'back'
      initial_success: 'main_screen',
      // response 'to_accept', 'accept'
      accept_success: 'accept_screen',
      // response 'to_active', back_active', 'submit'
      active_success: 'active_screen',
      // response 'to_check'
      check_success: 'check_screen',
      // response 'fetch', 'to_list'
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
    check_screen: {
      back: 'loading'
    },
    list_screen: {
      fetch: 'loading',
      back: 'loading'
    },
    error: {
      main_retry: 'main_screen',
      accept_retry: 'accept_screen',
      active_retry: 'active_screen',
      check_retry: 'check_screen',
      list_retry: 'list_screen',
      submit_retry: 'submit_screen'
    }
  }
}

function * mainScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.assign.get('entities')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.accept.get('entities')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.check.get('entities')
      })
      yield put({
        type: Type.FETCH_ASSIGN_SUCCESS,
        payload: data.assign.get('result')
      })
      yield put({
        type: Type.FETCH_ACCEPT_SUCCESS,
        payload: data.accept.get('result')
      })
      yield put({
        type: Type.FETCH_CHECK_SUCCESS,
        payload: data.check.get('result')
      })
      break
    case 'back':
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.assign.get('entities')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.accept.get('entities')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.check.get('entities')
      })
      yield put({
        type: Type.FETCH_ASSIGN_SUCCESS,
        payload: data.assign.get('result')
      })
      yield put({
        type: Type.FETCH_ACCEPT_SUCCESS,
        payload: data.accept.get('result')
      })
      yield put({
        type: Type.FETCH_CHECK_SUCCESS,
        payload: data.check.get('result')
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
        type: ADD_TRANSPORT_ENTITY,
        payload: data.get('entities')
      })
      yield put({
        type: Type.ACCEPT_SUCCESS,
        payload: data.get('result')
      })
      break
    case 'delete':
      yield put({
        type: DELETE_ENTITY,
        payload: { stateKey: 'transports', id: data }
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

function * activeScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'TransActive' }))
      break
    case 'submit':
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.submit.get('entities')
      })
      yield put({
        type: Type.SAVE_SUCCESS,
        payload: data.update.get('result')
      })
      yield put({
        type: Type.SUBMIT_SUCCESS,
        payload: data.submit.get('result')
      })
      yield put(NavigationActions.back())
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
      yield put({
        type: Type.TO_SUBMIT_SUCCESS,
        payload: data
      })
      yield put(NavigationActions.navigate({ routeName: 'TransSubmit' }))
      break
    case 'save':
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.get('entities')
      })
      yield put({
        type: Type.SAVE_SUCCESS,
        payload: data.get('result')
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

function * checkScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'TransCheck' }))
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
    case 'fetch':
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.get('entities')
      })
      yield put({
        type: Type.FETCH_SUCCESS,
        payload: data.get('result')
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

function * loadingEffect(scope) {
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: true }
  })
}

function * errorEffect(scope, error) {
  yield put({
    type: REQUEST_ERROR,
    payload: fromJS({ errorScope: 'Transport', message: error.message }) })
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
  check_screen: checkScreenEffect,
  list_screen: listScreenEffect
}

const machine = new Machine(transportState, transportEffects)
const initialEffect = machine.getEffect('initial')
const toAcceptScreenEffect = machine.getEffect('to_accept')
const toActiveScreenEffect = machine.getEffect('to_active')
const toCheckScreenEffect = machine.getEffect('to_check')
const toListScreenEffect = machine.getEffect('to_list')
const initialSuccessEffect = machine.getEffect('initial_success')
const acceptSuccessEffect = machine.getEffect('accept_success')
const activeSuccessEffect = machine.getEffect('active_success')
const checkSuccessEffect = machine.getEffect('check_success')
const listSuccessEffect = machine.getEffect('list_success')
const saveSuccessEffect = machine.getEffect('save_success')
const acceptEffect = machine.getEffect('accept')
const toSubmitScreenEffect = machine.getEffect('to_submit')
const saveEffect = machine.getEffect('save')
const submitEffect = machine.getEffect('submit')
const fetchEffect = machine.getEffect('fetch')
const backEffect = machine.getEffect('back')
const backActiveEffect = machine.getEffect('back_active')
const failureEffect = machine.getEffect('failure')

function * initialFlow(action) {
  const { payload } = action
  yield initialEffect('screen')
  yield call(delay, 200)
  try {
    const [assign, accept, check] = yield all([
      call(Api.getAssignTransports, payload),
      call(Api.getAcceptTransports, payload),
      call(Api.getCheckTransports, payload)
    ])
    if (assign && accept && check) {
      yield initialSuccessEffect('screen', 'initial', { assign, accept, check })
    }
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toAcceptScreenFlow() {
  yield toAcceptScreenEffect('screen')
  yield call(delay, 200)
  try {
    yield acceptSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toActiveScreenFlow() {
  yield toActiveScreenEffect('screen')
  yield call(delay, 200)
  try {
    yield activeSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toCheckScreenFlow() {
  yield toCheckScreenEffect('screen')
  yield call(delay, 200)
  try {
    yield checkSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toListScreenFlow() {
  yield toListScreenEffect('screen')
  yield call(delay, 200)
  try {
    yield listSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toSubmitScreenFlow(action) {
  const { payload } = action
  yield toSubmitScreenEffect('screen')
  yield call(delay, 200)
  try {
    yield saveSuccessEffect('screen', 'initial', payload)
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * acceptFlow(action) {
  const { payload } = action
  yield acceptEffect('form')
  yield call(delay, 200)
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

function * saveFlow(action) {
  const { payload } = action
  yield saveEffect('screen')
  yield call(delay, 200)
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

function * fetchFlow(action) {
  const { payload } = action
  yield fetchEffect('screen')
  yield call(delay, 200)
  try {
    const transport = yield call(Api.getDriverTransports, payload)
    if (transport) {
      yield listSuccessEffect('screen', 'fetch', transport)
    }
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('list_retry')
  }
}

function * submitFlow(action) {
  const { payload } = action
  yield submitEffect('screen')
  yield call(delay, 200)
  try {
    const [update, submit] = yield all([
      call(Api.updateTransport, payload),
      call(Api.submitTransport, payload)
    ])
    if (update && submit) {
      yield activeSuccessEffect('screen', 'submit', { update, submit })
    }
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('submit_retry')
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

function * backFlow(action) {
  const { payload } = action
  yield backEffect('screen')
  yield call(delay, 200)
  try {
    const [assign, accept, check] = yield all([
      call(Api.getAssignTransports, payload),
      call(Api.getAcceptTransports, payload),
      call(Api.getCheckTransports, payload)
    ])
    if (assign && accept && check) {
      yield initialSuccessEffect('screen', 'back', { assign, accept, check })
    }
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * backActiveFlow() {
  yield backActiveEffect('screen')
  yield call(delay, 200)
  try {
    yield activeSuccessEffect('screen', 'back_active')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('submit_retry')
  }
}

export default function * rootSagas() {
  // yield fork(initialFlow)
  // yield fork(toAcceptScreenFlow)
  // yield fork(toActiveScreenFlow)
  // yield fork(toListScreenFlow)
  // yield fork(toSubmitScreenFlow)
  // yield fork(acceptFlow)
  // yield fork(saveFlow)
  // yield fork(submitFlow)
  // yield fork(backFlow)
  // yield fork(backActiveFlow)
  yield takeLatest(Type.INITIAL_REQUEST, initialFlow)
  yield takeLatest(Type.TO_ACCEPT_REQUEST, toAcceptScreenFlow)
  yield takeLatest(Type.TO_ACTIVE_REQUEST, toActiveScreenFlow)
  yield takeLatest(Type.TO_CHECK_REQUEST, toCheckScreenFlow)
  yield takeLatest(Type.TO_LIST_REQUEST, toListScreenFlow)
  yield takeLatest(Type.TO_SUBMIT_REQUEST, toSubmitScreenFlow)
  yield takeLatest(Type.ACCEPT_REQUEST, acceptFlow)
  yield takeLatest(Type.SAVE_REQUEST, saveFlow)
  yield takeLatest(Type.FETCH_REQUEST, fetchFlow)
  yield takeLatest(Type.SUBMIT_REQUEST, submitFlow)
  yield takeLatest(Type.BACK_REQUEST, backFlow)
  yield takeLatest(Type.BACK_ACTIVE_REQUEST, backActiveFlow)
}
