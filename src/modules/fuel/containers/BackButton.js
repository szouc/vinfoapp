import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { BackButton } from '../components'
import { backRequest } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.getIn(['auth', 'username'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToMain: username => () => {
      dispatch(backRequest(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(BackButton)
)
