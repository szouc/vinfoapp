import { SubmitForm } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { saveRequest, submitRequest, backToActiveRequest } from '../actions'
import { transportCurrentSelector, saveFormValuesSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const initialValues = transportCurrentSelector(state)
  const loading = state.getIn(['transport', 'screenLoading'])
  const formLoading = state.getIn(['transport', 'formLoading'])
  const saveValues = saveFormValuesSelector(state)
  return {
    username: state.getIn(['auth', 'username']),
    loading,
    formLoading,
    saveValues,
    initialValues
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToActive: () => {
      dispatch(backToActiveRequest())
    },
    onSave: ({ username, transportId }) => update => () => {
      dispatch(saveRequest({ username, transportId, update }))
    },
    onSubmit: ({ username, transportId }) => update => {
      dispatch(submitRequest({ username, transportId, update }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(SubmitForm)
)
