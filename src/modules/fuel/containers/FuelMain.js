import { FuelMain } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import {
  toAddRequest,
  toFetchRequest,
  setVehicleRequest,
  fetchVehiclesRequest
} from '../actions'
import { vehiclePickerSelector, vehicleCurrentSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const vehicles = vehiclePickerSelector(state)
  const currentVehicle = vehicleCurrentSelector(state)
  return {
    username: state.getIn(['auth', 'username']),
    currentVehicle,
    vehicles
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navToAdd: username => () => {
      dispatch(toAddRequest(username))
    },
    navToFetch: username => () => {
      dispatch(toFetchRequest(username))
    },
    getDriverVehicles: username => () => {
      dispatch(fetchVehiclesRequest(username))
    },
    setVehicle: value => {
      const vehicleId = value ? value[0] : null
      dispatch(setVehicleRequest(vehicleId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(FuelMain)
)
