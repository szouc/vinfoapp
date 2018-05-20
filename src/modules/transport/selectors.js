import createImmutableSelector from '../../utils/createImmutableSelector'
import { fromJS } from 'immutable'
import { formValueSelector } from 'redux-form/immutable'
// import moment from 'moment'

const submitFormSelector = formValueSelector('TransportSubmitForm')
const fromName = state => submitFormSelector(state, 'fromName')
const toName = state => submitFormSelector(state, 'toName')
const fromAddr = state => submitFormSelector(state, 'fromAddr')
const toAddr = state => submitFormSelector(state, 'toAddr')
const fromWeight = state => submitFormSelector(state, 'fromWeight')
const toWeight = state => submitFormSelector(state, 'toWeight')
const fromDate = state => submitFormSelector(state, 'fromDate')
const toDate = state => submitFormSelector(state, 'toDate')
const transportEntity = state => state.getIn(['entities', 'transports'])
const assignIds = state => state.getIn(['transport', 'assignIds'])
const acceptIds = state => state.getIn(['transport', 'acceptIds'])
const checkIds = state => state.getIn(['transport', 'checkIds'])
const transportIds = state => state.getIn(['transport', 'transportIds'])
const currentTransport = state => state.getIn(['transport', 'currentTransport'])

const transportArraySelector = createImmutableSelector(
  [transportEntity, transportIds],
  (transports, ids) => {
    return !ids.isEmpty() ? ids.map(item => transports.get(item)) : ids
  }
)

const transportCurrentSelector = createImmutableSelector(
  [transportEntity, currentTransport],
  (transports, current) => {
    return current && transports.get(current)
  }
)

const assignArraySelector = createImmutableSelector(
  [transportEntity, assignIds],
  (transports, ids) => {
    return !ids.isEmpty() ? ids.map(item => transports.get(item)) : ids
  }
)

const assignCountSelector = createImmutableSelector([assignIds], transports =>
  transports.count()
)

const acceptArraySelector = createImmutableSelector(
  [transportEntity, acceptIds],
  (transports, ids) => {
    return !ids.isEmpty() ? ids.map(item => transports.get(item)) : ids
  }
)

const acceptCountSelector = createImmutableSelector([acceptIds], transports =>
  transports.count()
)

const checkArraySelector = createImmutableSelector(
  [transportEntity, checkIds],
  (transports, ids) => {
    return !ids.isEmpty() ? ids.map(item => transports.get(item)) : ids
  }
)

const checkCountSelector = createImmutableSelector([checkIds], transports =>
  transports.count()
)

const saveFormValuesSelector = createImmutableSelector(
  [fromName, toName, fromAddr, toAddr, fromWeight, toWeight, fromDate, toDate],
  (
    fromName,
    toName,
    fromAddr,
    toAddr,
    fromWeight,
    toWeight,
    fromDate,
    toDate
  ) =>
    fromJS({
      fromName,
      toName,
      fromAddr,
      toAddr,
      fromWeight,
      toWeight,
      fromDate,
      toDate
    })
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
  transportArraySelector,
  transportCurrentSelector,
  assignArraySelector,
  assignCountSelector,
  acceptArraySelector,
  acceptCountSelector,
  checkArraySelector,
  checkCountSelector,
  saveFormValuesSelector
}
