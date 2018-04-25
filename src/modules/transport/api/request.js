import * as URL from '../../../settings/routes'
import axios from '../../../settings/axiosInstance'
import replaceAll from '../../../utils/replaceAll'

const getDriverTransports = username => {
  const config = {
    url: URL.DRIVER_TRANSPORT.replace(/:username/, username),
    method: 'get'
  }
  return axios(config)
}

const getAssignTransports = username => {
  const config = {
    url: URL.DRIVER_TRANSPORT.replace(/:username/, username),
    method: 'get',
    params: { captain_status: 'assign' }
  }
  return axios(config)
}

const getAcceptTransports = username => {
  const config = {
    url: URL.DRIVER_TRANSPORT.replace(/:username/, username),
    method: 'get',
    params: { captain_status: 'accept' }
  }
  return axios(config)
}

const getCheckTransports = username => {
  const config = {
    url: URL.DRIVER_TRANSPORT.replace(/:username/, username),
    method: 'get',
    params: { captain_status: 'submit' }
  }
  return axios(config)
}

const acceptTransport = (username, transportId) => {
  const mapObj = {
    ':username': username,
    ':childId': transportId
  }
  const config = {
    url: replaceAll(URL.DRIVER_TRANSPORT_ID_STATUS, mapObj),
    method: 'put',
    data: { status: 'accept' }
  }
  return axios(config)
}

const submitTransport = (username, transportId) => {
  const mapObj = {
    ':username': username,
    ':childId': transportId
  }
  const config = {
    url: replaceAll(URL.DRIVER_TRANSPORT_ID_STATUS, mapObj),
    method: 'put',
    data: { status: 'submit' }
  }
  return axios(config)
}

const updateTransport = (username, transportId, update) => {
  const mapObj = {
    ':username': username,
    ':childId': transportId
  }
  const config = {
    url: replaceAll(URL.DRIVER_TRANSPORT_ID, mapObj),
    method: 'put',
    data: update
  }
  return axios(config)
}

export {
  getDriverTransports,
  getAssignTransports,
  getAcceptTransports,
  getCheckTransports,
  acceptTransport,
  submitTransport,
  updateTransport
}
