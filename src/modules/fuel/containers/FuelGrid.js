import { connect } from 'react-redux'
import { toAddRequest, toFetchRequest } from '../actions'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { FuelGrid } from '../components'

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.getIn(['auth', 'username'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navToAdd: username => () => {
      dispatch(toAddRequest(username))
    },
    navToFetch: username => () => {
      dispatch(toFetchRequest(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(immutPropsToJS(FuelGrid))
