import * as Request from './request'
import { vehicleArrayNormalize } from '../../../settings/schema'
import { fromJS } from 'immutable'

const STATUS_OK = 200

async function getDriverVehicles(username) {
  const response = await Request.getDriverVehicles(username)
  if (response.status === STATUS_OK) {
    const data = response.data.result
    const vehicles = vehicleArrayNormalize(data)
    return fromJS(vehicles)
  }
  throw new Error('Something wrong.(getDriverVehicles)')
}

export {
  getDriverVehicles
}
