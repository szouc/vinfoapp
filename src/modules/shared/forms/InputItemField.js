import React from 'react'

import { InputItem } from '../components'
import { Field } from 'redux-form/immutable'

class InputItemField extends React.PureComponent {
  render() {
    const { label, ...rest } = this.props
    return (
      <Field component={InputItem} {...rest}>
        {label}
      </Field>
    )
  }
}

export default InputItemField
