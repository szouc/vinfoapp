import { fork } from 'redux-saga/effects'
import { saga as authSaga } from '../modules/auth'
import { saga as driverSaga } from '../modules/driver'

export default function * rootSagas() {
  yield fork(authSaga)
  yield fork(driverSaga)
}
