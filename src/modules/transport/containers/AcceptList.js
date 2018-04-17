import { backRequest } from '../actions'

import { AcceptList } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { transportArraySelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const transports = transportArraySelector(state)
  return {
    username: state.getIn(['auth', 'username']),
    transports
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
  immutPropsToJS(AcceptList)
)
