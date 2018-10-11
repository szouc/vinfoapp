import { SubmitForm } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { saveRequest, submitRequest, backToActiveRequest } from '../actions'
import { transportCurrentSelector, saveFormValuesSelector } from '../selectors'
import { WEB_ADDR } from '../../../settings/configs'
import { DRIVER_TRANSPORT_UPLOAD_PIC } from '../../../settings/routes'

const mapStateToProps = (state, ownProps) => {
  const initialValues = transportCurrentSelector(state)
  const loading = state.getIn(['transport', 'screenLoading'])
  const formLoading = state.getIn(['transport', 'formLoading'])
  const saveValues = saveFormValuesSelector(state)
  const username = state.getIn(['auth', 'username'])
  const uploadUrl =
    WEB_ADDR + DRIVER_TRANSPORT_UPLOAD_PIC.replace(/:username/, username)
  return {
    username,
    loading,
    formLoading,
    saveValues,
    initialValues,
    uploadUrl
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
