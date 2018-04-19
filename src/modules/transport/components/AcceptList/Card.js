import React from 'react'
import R from 'ramda'
import moment from 'moment'
import { WingBlank, Card, List, Button, WhiteSpace } from 'antd-mobile'
import { QueryListItem } from '../../../shared'

class TransportCard extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const assigner = R.compose(
      R.propOr('', 'fullname'),
      R.propOr({}, 'assigner'),
      R.propOr({}, 'transport')
    )(this.props)
    const vehicle = R.compose(
      R.propOr('', 'plate'),
      R.propOr({}, 'vehicle'),
      R.propOr({}, 'transport')
    )(this.props)
    const principal = R.compose(
      R.propOr('', 'fullname'),
      R.propOr({}, 'principal'),
      R.propOr({}, 'transport')
    )(this.props)
    const secondary = R.compose(
      R.propOr('', 'fullname'),
      R.propOr({}, 'principal'),
      R.propOr({}, 'transport')
    )(this.props)
    const fromCompany = R.compose(
      R.join(' '),
      R.props(['name', 'addr']),
      R.propOr({}, 'company'),
      R.propOr({}, 'from'),
      R.propOr({}, 'transport')
    )(this.props)
    const toCompany = R.compose(
      R.join(' '),
      R.props(['name', 'addr']),
      R.propOr({}, 'company'),
      R.propOr({}, 'to'),
      R.propOr({}, 'transport')
    )(this.props)
    const product = R.compose(
      R.join(' '),
      R.props(['name', 'specs']),
      R.propOr({}, 'product'),
      R.propOr({}, 'transport')
    )(this.props)
    const created = R.compose(
      moment,
      R.propOr('', 'created'),
      R.propOr({}, 'transport')
    )(this.props)
    const status = R.compose(
      R.propOr('', 'captain_status'),
      R.propOr({}, 'transport')
    )(this.props)
    // const info = R.compose(R.propOr('', 'info'), R.propOr({}, 'fuel'))(
    //   this.props
    // )

    return (
      <Card>
        <Card.Header
          title={created.isValid() ? created.format('LL') : ''}
          extra={vehicle}
        />
        <Card.Body>
          <List>
            <QueryListItem iconName='male' extra={assigner} label='队长' />
            <QueryListItem iconName='user' extra={principal} label='主驾驶' />
            <QueryListItem iconName='user' extra={secondary} label='副驾驶' />
            <QueryListItem
              iconName='industry'
              extra={fromCompany}
              label='出发公司'
            />
            <QueryListItem
              iconName='industry'
              extra={toCompany}
              label='到达公司'
            />
            <QueryListItem iconName='archive' extra={product} label='产品' />
            <QueryListItem
              iconName='hourglass-start'
              extra={status}
              label='当前状态'
            />
          </List>
          <WhiteSpace size='xl' />
          <WingBlank>
            <Button type='ghost'>接单</Button>
          </WingBlank>
        </Card.Body>
        <Card.Footer />
      </Card>
    )
  }
}

export default TransportCard
