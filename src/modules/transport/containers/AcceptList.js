import { backRequest, acceptRequest } from '../actions'

import { AcceptList } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { assignArraySelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const transports = assignArraySelector(state)
  const loading = state.getIn(['transport', 'screenLoading'])
  return {
    username: state.getIn(['auth', 'username']),
    loading,
    transports
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToMain: username => {
      dispatch(backRequest(username))
    },
    acceptTransport: ({username, transportId}) => () => {
      dispatch(acceptRequest({username, transportId}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(AcceptList)
)
