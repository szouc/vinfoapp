import createImmutableSelector from '../../utils/createImmutableSelector'
import { fromJS } from 'immutable'

const userEntity = state => state.getIn(['entities', 'users'])
const username = state => state.getIn(['auth', 'username'])
const fuelEntity = state => state.getIn(['entities', 'fuels'])
const fuelIds = state => state.getIn(['fuel', 'fuelIds'])
const vehicleEntity = state => state.getIn(['entities', 'vehicles'])
const currentVehicle = state => state.getIn(['fuel', 'currentVehicle'])
const vehicleIds = state => state.getIn(['fuel', 'vehicleIds'])

const userSelector = createImmutableSelector(
  [userEntity, username],
  (users, username) => (username ? users.get(username) : undefined)
)

const vehicleArraySelector = createImmutableSelector(
  [vehicleEntity, vehicleIds],
  (vehicles, ids) =>
    ids ? fromJS(ids.map(item => vehicles.get(item))) : fromJS([])
)

const vehicleCurrentSelector = createImmutableSelector(
  [vehicleEntity, currentVehicle],
  (vehicles, current) => (current ? vehicles.get(current) : fromJS({}))
)

const vehiclePickerSelector = createImmutableSelector(
  [vehicleArraySelector],
  vehicles =>
    vehicles
      ? vehicles.map(item =>
        fromJS({
          label: item.get('plate'),
          value: item.get('_id')
        })
      )
      : fromJS([])
)

const vehicleInitPickerSelector = createImmutableSelector(
  [vehicleCurrentSelector, userSelector],
  (vehicle, user) =>
    vehicle
      ? { vehicleId: vehicle.get('_id'), applicant: user }
      : { vehicleId: undefined, applicant: user }
)

const fuelArraySelector = createImmutableSelector(
  [fuelEntity, fuelIds],
  (fuels, ids) => (ids ? ids.map(item => fuels.get(item)) : fromJS([]))
)

export {
  userSelector,
  vehicleArraySelector,
  vehiclePickerSelector,
  vehicleInitPickerSelector,
  fuelArraySelector
}
