import React, { Component } from 'react'

import { List, DatePicker as AntDatePicker } from 'antd-mobile'

class DatePicker extends Component {
  render() {
    const { label, input, meta, ...rest } = this.props
    return (
      <AntDatePicker {...input} {...rest}>
        <List.Item arrow='horizontal'>{label}</List.Item>
      </AntDatePicker>
    )
  }
}

export default DatePicker
