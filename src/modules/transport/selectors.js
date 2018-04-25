import createImmutableSelector from '../../utils/createImmutableSelector'
import { fromJS } from 'immutable'
import {
  transportDenormalize,
  transportArrayDenormalize
} from '../../settings/schema'
// import moment from 'moment'

const entity = state => state.get('entities')
// const transportEntity = state => state.getIn(['entities', 'transports'])
const userEntity = state => state.getIn(['entities', 'users'])
const username = state => state.getIn(['auth', 'username'])
const assignIds = state => state.getIn(['transport', 'assignIds'])
const acceptIds = state => state.getIn(['transport', 'acceptIds'])
const checkIds = state => state.getIn(['transport', 'checkIds'])
const transportIds = state => state.getIn(['transport', 'transportIds'])
const currentTransport = state => state.getIn(['transport', 'currentTransport'])

const userSelector = createImmutableSelector(
  [userEntity, username],
  (users, username) =>
    !users.isEmpty() && username ? users.get(username) : fromJS({})
)

const transportArraySelector = createImmutableSelector(
  [entity, transportIds],
  (entities, ids) => {
    return transportArrayDenormalize(ids, entities)
  }
)

const transportCurrentSelector = createImmutableSelector(
  [entity, currentTransport],
  (entities, current) => {
    return transportDenormalize(current, entities)
  }
)

const assignArraySelector = createImmutableSelector(
  [entity, assignIds],
  (entities, ids) => {
    return transportArrayDenormalize(ids, entities)
  }
)

const assignCountSelector = createImmutableSelector(
  [assignIds],
  transports => transports.count()
)

const acceptArraySelector = createImmutableSelector(
  [entity, acceptIds],
  (entities, ids) => {
    return transportArrayDenormalize(ids, entities)
  }
)

const acceptCountSelector = createImmutableSelector(
  [acceptIds],
  transports => transports.count()
)

const checkArraySelector = createImmutableSelector(
  [entity, checkIds],
  (entities, ids) => {
    return transportArrayDenormalize(ids, entities)
  }
)

const checkCountSelector = createImmutableSelector(
  [checkIds],
  transports => transports.count()
)
// const acceptCountSelector = createImmutableSelector(
//   [transportEntity, transportIds],
//   (transports, ids) => {
//     let newAcc
//     return ids.isEmpty() || transports.isEmpty()
//       ? 0
//       : ids
//         .reduce((acc, item) => {
//           if (transports.getIn([item, 'captain_status']) === 'accept') {
//             newAcc = acc.push(item)
//           } else {
//             newAcc = acc
//           }
//           return newAcc
//         }, fromJS([]))
//         .count()
//   }
// )

// const vehiclePickerSelector = createImmutableSelector(
//   [vehicleArraySelector],
//   vehicles => {
//     return !vehicles.isEmpty()
//       ? vehicles.map(item =>
//         fromJS({
//           label: item.get('plate'),
//           value: item.get('_id')
//         })
//       )
//       : fromJS([])
//   }
// )

// const vehicleInitPickerSelector = createImmutableSelector(
//   [vehicleCurrentSelector, userSelector],
//   (vehicle, user) =>
//     !vehicle.isEmpty() && !user.isEmpty()
//       ? fromJS({ vehicleId: vehicle.get('_id'), applicant: user })
//       : fromJS({})
// )

// const fuelArraySelector = createImmutableSelector(
//   [fuelEntity, fuelIds],
//   (fuels, ids) =>
//     !fuels.isEmpty() && !ids.isEmpty()
//       ? ids.map(item => fuels.get(item)).sort((a, b) => {
//         if (moment(a.get('date')).isBefore(b.get('date'))) {
//           return 1
//         }
//         if (moment(a.get('date')).isAfter(b.get('date'))) {
//           return -1
//         }
//         if (moment(a.get('date')).isSame(b.get('date'))) {
//           return 0
//         }
//       })
//       : fromJS([])
// )

export {
  userSelector,
  transportArraySelector,
  transportCurrentSelector,
  assignArraySelector,
  assignCountSelector,
  acceptArraySelector,
  acceptCountSelector,
  checkArraySelector,
  checkCountSelector
}
