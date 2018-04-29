import React from 'react'
import InputList from '../InputList'
import OrderList from '../OrderList'

class TransportReviewList extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <OrderList transport={this.props.transport} />
        <InputList transport={this.props.transport} />
      </React.Fragment>
    )
  }
}

export default TransportReviewList
