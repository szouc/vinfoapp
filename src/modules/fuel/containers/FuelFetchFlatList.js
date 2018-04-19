import { backRequest, fetchFuelsRequest } from '../actions'
import {
  fuelArraySelector,
  vehicleCurrentSelector,
  vehiclePickerSelector
} from '../selectors'

import { FuelFetchFlatList } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'

const mapStateToProps = (state, ownProps) => {
  const fuels = fuelArraySelector(state)
  const vehicles = vehiclePickerSelector(state)
  const currentVehicle = vehicleCurrentSelector(state)
  const loading = state.getIn(['fuel', 'screenLoading'])
  return {
    username: state.getIn(['auth', 'username']),
    vehicles,
    currentVehicle,
    loading,
    fuels
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToMain: username => {
      dispatch(backRequest(username))
    },
    fetchVehicleFuels: username => value => {
      const vehicleId = value ? value[0] : null
      const payload = { username, vehicleId }
      dispatch(fetchFuelsRequest(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(FuelFetchFlatList)
)
