import React, { Component } from 'react'

import { List, Picker as AntPicker } from 'antd-mobile'

class Picker extends Component {
  render() {
    const { label, input, meta, ...rest } = this.props
    return (
      <AntPicker onOk={input.onChange} {...input} {...rest}>
        <List.Item arrow='horizontal'>{label}</List.Item>
      </AntPicker>
    )
  }
}

export default Picker
