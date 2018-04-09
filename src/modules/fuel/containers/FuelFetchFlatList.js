import { FuelFetchFlatList } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { backRequest } from '../actions'
import { fuelArraySelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const fuels = fuelArraySelector(state)
  return {
    username: state.getIn(['auth', 'username']),
    fuels
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToMain: username => {
      dispatch(backRequest(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(FuelFetchFlatList)
)
