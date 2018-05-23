import React from 'react'
import R from 'ramda'
import moment from 'moment'
import { Card, List } from 'antd-mobile'
import { QueryListItem } from '../../../shared'

class MaintainCard extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const fullname = R.compose(
      R.propOr({}, 'fullname'),
      R.propOr({}, 'fuel')
    )(this.props)
    const reason = R.compose(R.propOr('', 'reason'), R.propOr({}, 'item'))(
      this.props
    )
    const cost = R.compose(R.propOr('', 'cost'), R.propOr({}, 'item'))(
      this.props
    )
    const mile = R.compose(R.propOr('', 'mile'), R.propOr({}, 'item'))(
      this.props
    )
    const date = R.compose(moment, R.propOr('', 'appliedAt'), R.propOr({}, 'item'))(
      this.props
    )
    const isCheck = R.compose(R.propOr('', 'is_check'), R.propOr({}, 'item'))(
      this.props
    )
    // const info = R.compose(R.propOr('', 'info'), R.propOr({}, 'item'))(
    //   this.props
    // )

    return (
      <Card>
        <Card.Header
          title={date.isValid() ? date.format('LL') : ''}
          extra={isCheck ? '通过' : '未审核'}
        />
        <Card.Body>
          <List renderHeader={() => '维修信息'}>
            <QueryListItem iconName='tint' extra={reason} label='原因：' />
            <QueryListItem iconName='credit-card' extra={cost} label='费用：' />
            <QueryListItem iconName='truck' extra={mile} label='里程：' />
          </List>
        </Card.Body>
        <Card.Footer />
      </Card>
    )
  }
}

export default MaintainCard
