import * as URL from '../../../settings/routes'
import axios from '../../../settings/axiosInstance'

const loginRequest = payload => {
  const config = {
    url: URL.LOGIN,
    method: 'post',
    data: payload
  }
  return axios(config)
}

const logoutRequest = () => {
  const config = {
    url: URL.LOGOUT,
    method: 'get'
  }
  return axios(config)
}

export { loginRequest, logoutRequest }
