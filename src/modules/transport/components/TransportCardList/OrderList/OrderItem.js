import React from 'react'
import { QueryListItem } from '../../../../shared'

class OrderItem extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      num,
      created,
      assigner,
      vehicle,
      principal,
      secondary,
      fromCompany,
      toCompany,
      product,
      currentStatus
    } = this.props
    return (
      <React.Fragment>
        <QueryListItem iconName='flag' extra={num} label='单号' />
        <QueryListItem iconName='calendar' extra={created} label='发单日期' />
        <QueryListItem iconName='male' extra={assigner} label='队长' />
        <QueryListItem iconName='truck' extra={vehicle} label='车辆' />
        <QueryListItem iconName='user' extra={principal} label='主驾驶' />
        <QueryListItem iconName='user' extra={secondary} label='副驾驶' />
        <QueryListItem
          iconName='industry'
          extra={fromCompany}
          label='出发公司'
        />
        <QueryListItem iconName='industry' extra={toCompany} label='到达公司' />
        <QueryListItem iconName='archive' extra={product} label='产品' />
        <QueryListItem
          iconName='hourglass-start'
          extra={currentStatus}
          label='当前状态'
        />
      </React.Fragment>
    )
  }
}

export default OrderItem
