import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import R from 'ramda'
import moment from 'moment'
import { Card, WingBlank } from 'antd-mobile'

class FuelCard extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const username = R.compose(
      R.propOr('', 'username'),
      R.propOr({}, 'applicant'),
      R.propOr({}, 'fuel')
    )(this.props)
    const fullname = R.compose(
      R.propOr('', 'fullname'),
      R.propOr({}, 'applicant'),
      R.propOr({}, 'fuel')
    )(this.props)
    const litre = R.compose(R.propOr('', 'litre'), R.propOr({}, 'fuel'))(
      this.props
    )
    const cost = R.compose(R.propOr('', 'cost'), R.propOr({}, 'fuel'))(
      this.props
    )
    const mile = R.compose(R.propOr('', 'mile'), R.propOr({}, 'fuel'))(
      this.props
    )
    const date = R.compose(moment, R.propOr('', 'date'), R.propOr({}, 'fuel'))(
      this.props
    )
    const isCheck = R.compose(R.propOr('', 'is_check'), R.propOr({}, 'fuel'))(
      this.props
    )
    // const info = R.compose(R.propOr('', 'info'), R.propOr({}, 'fuel'))(
    //   this.props
    // )

    return (
      <WingBlank>
        <Card>
          <Card.Header
            title={date.isValid() ? date.format('LL') : ''}
            extra={isCheck ? '通过' : '未审核'}
          />
          <Card.Body>
            <View>
              <Text>升数：</Text>
              <Text>{litre}</Text>
            </View>
            <View>
              <Text>费用：</Text>
              <Text>{cost}</Text>
            </View>
            <View>
              <Text>里程：</Text>
              <Text>{mile}</Text>
            </View>
          </Card.Body>
          <Card.Footer extra={<Text>{`${fullname}(${username})`}</Text>} />
        </Card>
      </WingBlank>
    )
  }
}

export default FuelCard
