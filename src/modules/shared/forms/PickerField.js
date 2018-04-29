import React from 'react'

import { Picker } from '../components'
import { Field } from 'redux-form/immutable'

class PickerField extends React.PureComponent {
  render() {
    return <Field component={Picker} {...this.props} />
  }
}

export default PickerField
