import * as Request from './request'
import {
  fuelArrayNormalize,
  vehicleNormalize,
  vehicleArrayNormalize
} from '../../../settings/schema'
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

async function addVehicleFuel(username, data) {
  const response = await Request.addVehicleFuel(username, data)
  if (response.status === STATUS_OK) {
    const data = response.data.result
    const vehicle = vehicleNormalize(data)
    return fromJS(vehicle)
  }
  throw new Error('Something wrong.(addVehicleFuel)')
}

async function getVehicleFuels(username, vehicleId) {
  const response = await Request.getDriverVehicles(username, vehicleId)
  if (response.status === STATUS_OK) {
    const data = response.data.result
    const fuels = fuelArrayNormalize(data)
    return fromJS(fuels)
  }
  throw new Error('Something wrong.(getVehicleFuels)')
}

async function deleteVehicleFuel(username, fuelId) {
  const response = await Request.deleteVehicleFuel(username, fuelId)
  if (response.status === STATUS_OK) {
    const data = response.data.result
    const vehicle = vehicleNormalize(data)
    return fromJS(vehicle)
  }
  throw new Error('Something wrong.(deleteVehicleFuel)')
}

export { getDriverVehicles, addVehicleFuel, getVehicleFuels, deleteVehicleFuel }
