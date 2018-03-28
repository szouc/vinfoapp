import { LogoutButton } from '../components'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(logoutRequest())
    }
  }
}

export default connect(null, mapDispatchToProps)(LogoutButton)
