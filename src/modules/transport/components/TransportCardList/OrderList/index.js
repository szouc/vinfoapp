import React from 'react'
import { List } from 'antd-mobile'
import OrderItem from './OrderItem'
import extractDataFromProps from '../extractData'

class TransportOrderList extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const data = extractDataFromProps(this.props)
    return (
      <List renderHeader={() => '基本信息'}>
        <OrderItem {...data.orderProps} />
      </List>
    )
  }
}

export default TransportOrderList
