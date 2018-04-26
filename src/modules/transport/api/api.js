import * as Request from './request'
import {
  transportArrayNormalize,
  transportNormalize
} from '../../../settings/schema'
import { fromJS } from 'immutable'

const STATUS_OK = 200

async function getDriverTransports(username) {
  const response = await Request.getDriverTransports(username)
  if (response.status === STATUS_OK) {
    const data = response.data.result || {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  throw new Error('Something wrong.(getDriverTransports)')
}

async function getAcceptTransports(username) {
  const response = await Request.getAcceptTransports(username)
  if (response.status === STATUS_OK) {
    const data = response.data.result || {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  throw new Error('Something wrong.(getAcceptTransports)')
}

async function getAssignTransports(username) {
  const response = await Request.getAssignTransports(username)
  if (response.status === STATUS_OK) {
    const data = response.data.result || {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  throw new Error('Something wrong.(getAssignTransports)')
}

async function getCheckTransports(username) {
  const response = await Request.getCheckTransports(username)
  if (response.status === STATUS_OK) {
    const data = response.data.result || {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  throw new Error('Something wrong.(getCheckTransports)')
}

async function acceptTransport({ username, transportId }) {
  const response = await Request.acceptTransport(username, transportId)
  if (response.status === STATUS_OK) {
    const data = response.data.result[0] || {}
    const transport = transportNormalize(data)
    return fromJS(transport)
  }
  throw new Error('Something wrong.(acceptTransport)')
}

async function submitTransport({ username, transportId }) {
  const response = await Request.submitTransport(username, transportId)
  if (response.status === STATUS_OK) {
    const data = response.data.result[0] || {}
    const transport = transportNormalize(data)
    return fromJS(transport)
  }
  throw new Error('Something wrong.(submitTransport)')
}

async function updateTransport({ username, transportId, update }) {
  const response = await Request.updateTransport(username, transportId, update)
  if (response.status === STATUS_OK) {
    const data = response.data.result || {}
    const transport = transportNormalize(data)
    return fromJS(transport)
  }
  throw new Error('Something wrong.(updateTransport)')
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
