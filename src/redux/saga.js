import { fork } from 'redux-saga/effects'
import { saga as authSaga } from '../modules/auth'

export default function * rootSagas() {
  yield fork(authSaga)
}
