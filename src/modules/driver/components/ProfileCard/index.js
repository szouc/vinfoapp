import React from 'react'
import R from 'ramda'
import moment from 'moment'
import { Card, List } from 'antd-mobile'

const Item = List.Item

const DriverCard = props => {
  const Roles = {
    driver: '司机',
    captain: '队长',
    manager: '经理',
    accountant: '会计'
  }
  const fullname = R.compose(R.propOr('', 'fullname'), R.propOr({}, 'profile'))(
    props
  )
  const role = R.compose(R.propOr('', 'role'), R.propOr({}, 'profile'))(props)
  const cert = R.compose(
    R.propOr('', 'cert'),
    R.propOr({}, 'detail'),
    R.propOr({}, 'profile')
  )(props)
  const certExpired = R.compose(
    moment,
    R.propOr('', 'certExpired'),
    R.propOr({}, 'detail'),
    R.propOr({}, 'profile')
  )(props)
  const created = R.compose(
    moment,
    R.propOr('', 'createdAt'),
    R.propOr({}, 'profile')
  )(props)

  return (
    <Card>
      <Card.Header title={fullname} extra={Roles[role]} />
      <Card.Body>
        <List renderHeader={() => '相关信息'}>
          <Item extra={created.isValid() ? created.format('LL') : ''}>
            注册日期：
          </Item>
          <Item extra={cert}>行车证号：</Item>
          <Item extra={certExpired.isValid() ? certExpired.format('LL') : ''}>
            行车证到期日：
          </Item>
        </List>
      </Card.Body>
      <Card.Footer />
    </Card>
  )
}

export default DriverCard
