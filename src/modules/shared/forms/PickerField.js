import React from 'react'

import { Picker } from '../components'
import { List } from 'antd-mobile'
import { Field } from 'redux-form/immutable'

class PickerField extends React.PureComponent {
  render() {
    const { label, ...rest } = this.props
    return (
      <Field component={Picker} {...rest}>
        <List.Item arrow='horizontal'>{label}</List.Item>
      </Field>
    )
  }
}

export default PickerField
