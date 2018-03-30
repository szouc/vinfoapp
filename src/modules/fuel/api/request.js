import * as URL from '../../../settings/routes'
import axios from '../../../settings/axiosInstance'
import replaceAll from '../../../utils/replaceAll'

const getDriverVehicles = username => {
  const config = {
    url: URL.DRIVER_VEHICLE.replace(/:username/, username),
    method: 'get'
  }
  return axios(config)
}

const addVehicleFuel = (username, data) => {
  const config = {
    url: URL.DRIVER_FUEL.replace(/:username/, username),
    method: 'post',
    data: data
  }
  return axios(config)
}

const getVehicleFuels = (username, vehicleId) => {
  const config = {
    url: URL.DRIVER_FUEL.replace(/:username/, username),
    method: 'get',
    params: { vehicleId }
  }
  return axios(config)
}

const deleteVehicleFuel = (username, fuelId) => {
  const mapObj = {
    ':username': username,
    ':childId': fuelId
  }
  const config = {
    url: replaceAll(URL.DRIVER_FUEL_ID, mapObj),
    method: 'get'
  }
  return axios(config)
}

export { getDriverVehicles, addVehicleFuel, getVehicleFuels, deleteVehicleFuel }
