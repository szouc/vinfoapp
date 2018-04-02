import { fork } from 'redux-saga/effects'
import { saga as authSaga } from '../modules/auth'
import { saga as driverSaga } from '../modules/driver'
import { saga as fuelSaga } from '../modules/fuel'

export default function * rootSagas() {
  yield fork(authSaga)
  yield fork(driverSaga)
  yield fork(fuelSaga)
}
