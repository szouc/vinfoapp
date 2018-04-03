import { FuelAddForm } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { addFuelRequest } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: values => {
      dispatch(addFuelRequest(values))
    }
  }
}

export default connect(null, mapDispatchToProps)(immutPropsToJS(FuelAddForm))
