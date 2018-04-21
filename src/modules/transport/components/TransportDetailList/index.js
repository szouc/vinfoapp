import React from 'react'
import R from 'ramda'
import moment from 'moment'
import { List } from 'antd-mobile'
import { QueryListItem } from '../../../shared'

const statusTranslate = {
  '': '',
  assign: '未接单',
  accept: '已接单',
  submit: '已提交',
  pass: '通过审核',
  deny: '被拒绝'
}

class TransportList extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const num = R.compose(R.propOr('', 'num'), R.propOr({}, 'transport'))(
      this.props
    )
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

    const currentStatus = statusTranslate[status]

    return (
      <List>
        <QueryListItem iconName='flag' extra={num} label='单号' />
        <QueryListItem
          iconName='calendar'
          extra={created.isValid() ? created.format('LL') : ''}
          label='发单日期'
        />
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
      </List>
    )
  }
}

export default TransportList
