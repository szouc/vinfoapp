import { backRequest, toSubmitRequest } from '../actions'

import { ActiveList } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { acceptArraySelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const transports = acceptArraySelector(state)
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
    NavToSubmit: transportId => () => {
      dispatch(toSubmitRequest(transportId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(ActiveList)
)
