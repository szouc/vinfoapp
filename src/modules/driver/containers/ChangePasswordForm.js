import { ChangePasswordForm } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { changePasswordRequest, backRequest } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const loading = state.getIn(['driver', 'screenLoading'])
  const formLoading = state.getIn(['driver', 'formLoading'])
  return {
    username: state.getIn(['auth', 'username']),
    loading,
    formLoading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToMain: username => {
      dispatch(backRequest(username))
    },
    onSubmit: username => values => {
      dispatch(changePasswordRequest({ username, values }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(ChangePasswordForm)
)
