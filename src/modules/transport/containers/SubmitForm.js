import { SubmitForm } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { saveRequest, submitRequest, backToActiveRequest } from '../actions'
import { transportCurrentSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const initialValues = transportCurrentSelector(state)
  const loading = state.getIn(['transport', 'screenLoading'])
  const formLoading = state.getIn(['transport', 'formLoading'])
  return {
    username: state.getIn(['auth', 'username']),
    loading,
    formLoading,
    initialValues
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToActive: () => {
      dispatch(backToActiveRequest())
    },
    onSave: ({ username, transportId }) => values => {
      dispatch(saveRequest({ username, transportId, update: values }))
    },
    onSubmit: ({ username, transportId }) => values => {
      dispatch(submitRequest({ username, transportId, update: values }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(SubmitForm)
)
