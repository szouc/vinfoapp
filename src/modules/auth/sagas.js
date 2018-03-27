// @flow

import * as Api from './api'
import * as Type from './actionTypes'
import { REQUEST_ERROR } from '../error'

import { call, fork, put, take } from 'redux-saga/effects'

import type { fromJS as Immut } from 'immutable'
import { fromJS } from 'immutable'
import Machine from '../../utils/machine'
import { NavigationActions } from 'react-navigation'
import { delay } from 'redux-saga'

const machineState = {
  currentState: 'login_screen',
  states: {
    login_screen: {
      login: 'loading'
    },
    loading: {
      login_success: 'main_screen',
      logout_success: 'login_screen',
      failure: 'error'
    },
    main_screen: {
      logout: 'login_screen',
      failure: 'error'
    },
    error: {
      login_retry: 'login_screen',
      logout_retry: 'main_screen'
    }
  }
}

function * clearError() {
  yield delay(2000)
  yield put({ type: REQUEST_ERROR, payload: '' })
}

function * loginScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'login':
      yield put({
        type: Type.REMOVE_AUTH
      })
      yield put(NavigationActions.navigate({ routeName: 'Login' }))
  }
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

function * mainScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'logout':
      yield put({
        type: Type.SET_AUTH,
        payload: data
      })
      yield put(NavigationActions.navigate({ routeName: 'Main' }))
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
  yield fork(clearError)
}

const effects = {
  loading: loadingEffect,
  main_screen: mainScreenEffect,
  error: errorEffect,
  login_screen: loginScreenEffect
}

const machine = Machine(machineState, effects)
const loginEffect = machine.getEffect('login')
const logoutEffect = machine.getEffect('logout')
const failureEffect = machine.getEffect('failure')
const loginSuccessEffect = machine.getEffect('login_success')
const logoutSuccessEffect = machine.getEffect('logout_success')

/**
 * Log in saga
 * @export
 */
export function * loginFlow(): any {
  while (true) {
    const action: { type: string, payload: Immut } = yield take(
      Type.LOGIN_REQUEST
    )
    const username: string = action.payload.get('username')
    yield loginEffect('form')
    try {
      let isAuth: ?boolean = yield call(Api.login, action.payload)
      if (isAuth) {
        yield loginSuccessEffect('form', 'login', username)
      }
    } catch (error) {
      yield failureEffect('form', error)
      machine.operation('login_retry')
    }
  }
}

/**
 * Log out saga
 *
 * @export
 */
export function * logoutFlow(): any {
  while (true) {
    yield take(Type.LOGOUT_REQUEST)
    yield logoutEffect('whole')
    try {
      let isLogout: ?boolean = yield call(Api.logout)
      if (isLogout) {
        yield logoutSuccessEffect('form', 'logout')
      }
    } catch (error) {
      yield failureEffect('whole', error)
      machine.operation('logout_retry')
    }
  }
}

export default function * rootSagas(): any {
  yield fork(loginFlow)
  yield fork(logoutFlow)
}
