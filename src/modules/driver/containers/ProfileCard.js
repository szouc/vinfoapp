import { connect } from 'react-redux'
import { ProfileCard } from '../components'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { fetchProfileRequest } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.getIn(['auth', 'username']),
    profile: state.getIn(['driver', 'user'])
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
