import createImmutableSelector from '../../utils/createImmutableSelector'
import { fromJS } from 'immutable'
import moment from 'moment'

const username = state => state.getIn(['auth', 'username'])
const fullname = state => state.getIn(['auth', 'fullname'])
const fuelEntity = state => state.getIn(['entities', 'fuels'])
const fuelIds = state => state.getIn(['fuel', 'fuelIds'])
const vehicleEntity = state => state.getIn(['entities', 'vehicles'])
const currentVehicle = state => state.getIn(['fuel', 'currentVehicle'])
const vehicleIds = state => state.getIn(['fuel', 'vehicleIds'])

const vehicleArraySelector = createImmutableSelector(
  [vehicleEntity, vehicleIds],
  (vehicles, ids) => {
    return !ids.isEmpty() ? ids.map(item => vehicles.get(item)) : ids
  }
)

const vehicleCurrentSelector = createImmutableSelector(
  [vehicleEntity, currentVehicle],
  (vehicles, current) => current && vehicles.get(current)
)

const vehiclePickerSelector = createImmutableSelector(
  [vehicleArraySelector],
  vehicles => {
    return (
      vehicles &&
      vehicles.map(item =>
        fromJS({
          label: item.get('plate'),
          value: item.get('_id')
        })
      )
    )
  }
)

const vehicleInitPickerSelector = createImmutableSelector(
  [vehicleCurrentSelector, username, fullname],
  (vehicle, username, fullname) =>
    vehicle &&
    fromJS({
      vehicleId: vehicle.get('_id'),
      applicant: username,
      fullname: `${fullname}(${username})`
    })
)

const fuelArraySelector = createImmutableSelector(
  [fuelEntity, fuelIds],
  (fuels, ids) =>
    !ids.isEmpty()
      ? ids.map(item => fuels.get(item)).sort((a, b) => {
        if (moment(a.get('date')).isBefore(b.get('date'))) {
          return 1
        }
        if (moment(a.get('date')).isAfter(b.get('date'))) {
          return -1
        }
        if (moment(a.get('date')).isSame(b.get('date'))) {
          return 0
        }
      })
      : ids
)

export {
  vehicleArraySelector,
  vehicleCurrentSelector,
  vehiclePickerSelector,
  vehicleInitPickerSelector,
  fuelArraySelector
}
