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
  (users, username) =>
    !users.isEmpty() && username ? users.get(username) : fromJS({})
)

const vehicleArraySelector = createImmutableSelector(
  [vehicleEntity, vehicleIds],
  (vehicles, ids) => {
    return !vehicles.isEmpty() && !ids.isEmpty()
      ? ids.map(item => vehicles.get(item))
      : fromJS([])
  }
)

const vehicleCurrentSelector = createImmutableSelector(
  [vehicleEntity, currentVehicle],
  (vehicles, current) =>
    !vehicles.isEmpty() && current ? vehicles.get(current) : fromJS({})
)

const vehiclePickerSelector = createImmutableSelector(
  [vehicleArraySelector],
  vehicles => {
    return !vehicles.isEmpty()
      ? vehicles.map(item =>
        fromJS({
          label: item.get('plate'),
          value: item.get('_id')
        })
      )
      : fromJS([])
  }
)

const vehicleInitPickerSelector = createImmutableSelector(
  [vehicleCurrentSelector, userSelector],
  (vehicle, user) =>
    !vehicle.isEmpty() && !user.isEmpty()
      ? fromJS({ vehicleId: vehicle.get('_id'), applicant: user })
      : fromJS({})
)

const fuelArraySelector = createImmutableSelector(
  [fuelEntity, fuelIds],
  (fuels, ids) =>
    !fuels.isEmpty() && !ids.isEmpty()
      ? ids.map(item => fuels.get(item))
      : fromJS([])
)

export {
  userSelector,
  vehicleArraySelector,
  vehicleCurrentSelector,
  vehiclePickerSelector,
  vehicleInitPickerSelector,
  fuelArraySelector
}
