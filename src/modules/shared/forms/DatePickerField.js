import React from 'react'

import { DatePicker } from '../components'
import { Field } from 'redux-form/immutable'

class DatePickerField extends React.PureComponent {
  render() {
    const { label, ...rest } = this.props
    return (
      <Field component={DatePicker} label={label} {...rest} />
    )
  }
}

export default DatePickerField
