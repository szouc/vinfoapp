import React from 'react'
import { Card } from 'antd-mobile'
import { TransportReviewList } from '../TransportCardList'
import Icon from 'react-native-vector-icons/FontAwesome'

class TransportCard extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card>
        <Card.Header
          title='运输记录'
          thumb={
            <Icon
              name='check-circle'
              size={30}
              style={{ color: '#f00', width: 50 }}
            />
          }
          extra={this.props.index + 1}
        />
        <Card.Body>
          <TransportReviewList transport={this.props.transport} />
        </Card.Body>
        <Card.Footer />
      </Card>
    )
  }
}

export default TransportCard
