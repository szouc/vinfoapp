import React from 'react'

import { InputItem } from '../components'
import { Field } from 'redux-form/immutable'

class InputItemField extends React.PureComponent {
  render() {
    return <Field component={InputItem} {...this.props} />
  }
}

export default InputItemField
