import createImmutableSelector from '../../utils/createImmutableSelector'

const driverEntity = state => state.getIn(['entities', 'users'])
const driverCurrent = state => state.getIn(['driver', 'username'])

const driverSelector = createImmutableSelector(
  [driverEntity, driverCurrent],
  (users, current) => users.get(current)
)

export { driverSelector }
