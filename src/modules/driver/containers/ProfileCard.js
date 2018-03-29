import { connect } from 'react-redux'
import { ProfileCard } from '../components'
import { driverSelector } from '../selectors'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { fetchProfileRequest } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const profile = driverSelector(state)
  return {
    username: state.getIn(['auth', 'username']),
    profile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfile: username => {
      dispatch(fetchProfileRequest(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(ProfileCard)
)
