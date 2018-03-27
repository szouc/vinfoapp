import { LoginForm } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { loginRequest } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: values => {
      dispatch(loginRequest(values))
    }
  }
}

export default connect(null, mapDispatchToProps)(immutPropsToJS(LoginForm))
