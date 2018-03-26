import { setLocalLoggedIn, removeLocalLoggedIn } from './localStorage'
import * as Request from './request'

const TRUE = true
const STATUS_OK = 200

async function login(payload) {
  const username = payload.get('username')
  try {
    const response = await Request.loginRequest(payload)
    if (response.status === STATUS_OK) {
      await setLocalLoggedIn(username)
      return TRUE
    }
  } catch (error) {
    throw new Error('Something wrong at login Process.')
  }
}

async function logout() {
  try {
    const response = await Request.logoutRequest()
    if (response.status === STATUS_OK) {
      await removeLocalLoggedIn()
      return TRUE
    }
  } catch (error) {
    throw new Error('Something wrong at logout Process.')
  }
}

export { login, logout }
