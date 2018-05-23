import * as Request from './request'
import {
  maintainArrayNormalize,
  vehicleNormalize,
  vehicleArrayNormalize
} from '../../../settings/schema'
import { fromJS } from 'immutable'

async function getDriverVehicles(username) {
  const response = await Request.getDriverVehicles(username)
  if (response.data.ok) {
    const data = response.data.result || {}
    const vehicles = vehicleArrayNormalize(data)
    return fromJS(vehicles)
  }
  if (!response.data.ok) {
    const data = {}
    const vehicles = vehicleArrayNormalize(data)
    return fromJS(vehicles)
  }
  throw new Error('Something wrong.(getDriverVehicles)')
}

async function addVehicleMaintain({ username, data }) {
  const response = await Request.addVehicleMaintain(username, data)
  if (response.data.ok) {
    const data = response.data.result || {}
    const vehicle = vehicleNormalize(data)
    return fromJS(vehicle)
  }
  if (!response.data.ok) {
    throw new Error(response.data.error)
  }
  throw new Error('Something wrong.(addVehicleMaintain)')
}

async function getVehicleMaintains({ username, vehicleId }) {
  const response = await Request.getVehicleMaintains(username, vehicleId)
  if (response.data.ok) {
    const data = response.data.result || {}
    const maintenance = maintainArrayNormalize(data)
    return fromJS(maintenance)
  }
  if (!response.data.ok) {
    throw new Error(response.data.error)
  }
  throw new Error('Something wrong.(getVehicleMaintain)')
}

async function deleteVehicleMaintain({ username, fuelId }) {
  const response = await Request.deleteVehicleMaintain(username, fuelId)
  if (response.data.ok) {
    const data = response.data.result || {}
    const vehicle = vehicleNormalize(data)
    return fromJS(vehicle)
  }
  if (!response.data.ok) {
    throw new Error(response.data.error)
  }
  throw new Error('Something wrong.(deleteVehicleMaintain)')
}

export { getDriverVehicles, addVehicleMaintain, getVehicleMaintains, deleteVehicleMaintain }
