import { TransportMain } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import {
  toAcceptRequest,
  toActiveRequest,
  toListRequest,
  fetchRequest
} from '../actions'

const mapStateToProps = (state, ownProps) => {
  const loading = state.getIn(['transport', 'screenLoading'])
  return {
    username: state.getIn(['auth', 'username']),
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
      dispatch(fetchRequest(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(TransportMain)
)
