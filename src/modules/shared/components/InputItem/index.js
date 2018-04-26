import React, { Component } from 'react'

import { InputItem as AntInputItem } from 'antd-mobile'

class InputItem extends Component {
  render() {
    const { input, meta, ...rest } = this.props
    return (
      <AntInputItem
        error={meta.touched && meta.error}
        {...input}
        {...rest}
      />
    )
  }
}

export default InputItem
