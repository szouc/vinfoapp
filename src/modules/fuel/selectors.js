import createImmutableSelector from '../../utils/createImmutableSelector'
import { fromJS } from 'immutable'

const userEntity = state => state.getIn(['entities', 'users'])
const username = state => state.getIn(['auth', 'username'])
const fuelEntity = state => state.getIn(['entities', 'fuels'])
const vehicleEntity = state => state.getIn(['entities', 'vehicles'])
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
  [vehiclePickerSelector, userSelector],
  (vehicles, user) =>
    vehicles
      ? { vehicleId: vehicles.getIn([0, 'value']), applicant: user }
      : { vehicleId: undefined, applicant: user }
)

const fuelArraySelector = createImmutableSelector(
  [vehicleArraySelector, fuelEntity],
  (vehicles, fuels) =>
    vehicles
      ? vehicles.getIn([0, 'fuels']).map(item => fuels.get(item))
      : fromJS([])
)

export {
  userSelector,
  vehicleArraySelector,
  vehiclePickerSelector,
  vehicleInitPickerSelector,
  fuelArraySelector
}
