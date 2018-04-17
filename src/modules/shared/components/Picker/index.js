import React, { Component } from 'react'

import { Picker as AntPicker } from 'antd-mobile'

class Picker extends Component {
  render() {
    const { input, meta, ...rest } = this.props
    return <AntPicker onOk={input.onChange} {...input} {...rest} />
  }
}

export default Picker
