import { TransportMain } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import {
  toAcceptRequest,
  toActiveRequest,
  toListRequest,
  initialRequest
} from '../actions'
import { assignCountSelector, acceptCountSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const loading = state.getIn(['transport', 'screenLoading'])
  const assignCount = assignCountSelector(state)
  const acceptCount = acceptCountSelector(state)
  return {
    username: state.getIn(['auth', 'username']),
    assignCount,
    acceptCount,
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
    navToList: () => {
      dispatch(toListRequest())
    },
    fetchTransports: username => {
      dispatch(initialRequest(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(TransportMain)
)
