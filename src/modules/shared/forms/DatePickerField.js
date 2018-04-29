import React from 'react'

import { DatePicker } from '../components'
import { Field } from 'redux-form/immutable'

class DatePickerField extends React.PureComponent {
  render() {
    return <Field component={DatePicker} {...this.props} />
  }
}

export default DatePickerField
