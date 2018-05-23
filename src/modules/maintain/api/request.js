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

const addVehicleMaintain = (username, data) => {
  const config = {
    url: URL.DRIVER_MAINTAIN.replace(/:username/, username),
    method: 'post',
    data: data
  }
  return axios(config)
}

const getVehicleMaintains = (username, vehicleId) => {
  const config = {
    url: URL.DRIVER_MAINTAIN.replace(/:username/, username),
    method: 'get',
    params: { vehicleId }
  }
  return axios(config)
}

const deleteVehicleMaintain = (username, maintainId) => {
  const mapObj = {
    ':username': username,
    ':childId': maintainId
  }
  const config = {
    url: replaceAll(URL.DRIVER_MAINTAIN_ID, mapObj),
    method: 'get'
  }
  return axios(config)
}

export { getDriverVehicles, addVehicleMaintain, getVehicleMaintains, deleteVehicleMaintain }
