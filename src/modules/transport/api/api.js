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

async function acceptTransport({ username, transportId }) {
  const response = await Request.acceptTransport(username, transportId)
  if (response.status === STATUS_OK) {
    const data = response.data.result || {}
    const transport = transportNormalize(data)
    return fromJS(transport)
  }
  throw new Error('Something wrong.(acceptTransport)')
}

async function submitTransport({ username, transportId }) {
  const response = await Request.submitTransport(username, transportId)
  if (response.status === STATUS_OK) {
    const data = response.data.result || {}
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
  acceptTransport,
  submitTransport,
  updateTransport
}
