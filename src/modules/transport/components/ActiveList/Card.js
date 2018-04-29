import React from 'react'
import { WingBlank, Card, Button, WhiteSpace } from 'antd-mobile'
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
          title='待提交'
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
          <WhiteSpace size='xl' />
          <WingBlank>
            <Button type='ghost' onClick={this.props.NavToSubmit}>
              填单
            </Button>
          </WingBlank>
        </Card.Body>
        <Card.Footer />
      </Card>
    )
  }
}

export default TransportCard
