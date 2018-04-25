import createImmutableSelector from '../../utils/createImmutableSelector'

const driver = state => state.getIn(['driver', 'user'])

const driverSelector = createImmutableSelector([driver], user => user)

export { driverSelector }
