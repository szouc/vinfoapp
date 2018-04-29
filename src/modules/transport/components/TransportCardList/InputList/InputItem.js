import React from 'react'
import { QueryListItem } from '../../../../shared'

class InputItem extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { fromWeight, toWeight, fromDate, toDate } = this.props
    return (
      <React.Fragment>
        <QueryListItem
          iconName='industry'
          extra={fromWeight}
          label='出发重量'
        />
        <QueryListItem iconName='calendar' extra={fromDate} label='出发日期' />
        <QueryListItem iconName='industry' extra={toWeight} label='到达重量' />
        <QueryListItem iconName='calendar' extra={toDate} label='到达日期' />
      </React.Fragment>
    )
  }
}

export default InputItem
