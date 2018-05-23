import { backRequest, fetchRequest } from '../actions'
import {
  maintainArraySelector,
  vehicleCurrentSelector,
  vehiclePickerSelector
} from '../selectors'

import { MaintainFetchFlatList } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'

const mapStateToProps = (state, ownProps) => {
  const maintains = maintainArraySelector(state)
  const vehicles = vehiclePickerSelector(state)
  const currentVehicle = vehicleCurrentSelector(state)
  const loading = state.getIn(['maintain', 'screenLoading'])
  return {
    username: state.getIn(['auth', 'username']),
    vehicles,
    currentVehicle,
    loading,
    maintains
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToMain: username => {
      dispatch(backRequest(username))
    },
    fetchMaintains: username => value => {
      const vehicleId = value && value[0]
      const payload = { username, vehicleId }
      dispatch(fetchRequest(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(MaintainFetchFlatList)
)
