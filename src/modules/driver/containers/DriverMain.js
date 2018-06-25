import { connect } from 'react-redux'
import { DriverMain } from '../components'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { fetchProfileRequest, toChangeRequest } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.getIn(['auth', 'username']),
    loading: state.getIn(['driver', 'screenLoading']),
    profile: state.getIn(['driver', 'user'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfile: username => {
      dispatch(fetchProfileRequest(username))
    },
    toChangeScreen: () => {
      dispatch(toChangeRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(DriverMain)
)
