import { TransportMain } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import {
  toAcceptRequest,
  toActiveRequest,
  toCheckRequest,
  toListRequest,
  initialRequest
} from '../actions'
import {
  assignCountSelector,
  acceptCountSelector,
  checkCountSelector
} from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const loading = state.getIn(['transport', 'screenLoading'])
  const assignCount = assignCountSelector(state)
  const acceptCount = acceptCountSelector(state)
  const checkCount = checkCountSelector(state)
  return {
    username: state.getIn(['auth', 'username']),
    assignCount,
    acceptCount,
    checkCount,
    loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navToAccept: () => {
      dispatch(toAcceptRequest())
    },
    navToActive: () => {
      dispatch(toActiveRequest())
    },
    navToCheck: () => {
      dispatch(toCheckRequest())
    },
    navToList: () => {
      dispatch(toListRequest())
    },
    initialFetchTransports: username => {
      dispatch(initialRequest(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(TransportMain)
)
