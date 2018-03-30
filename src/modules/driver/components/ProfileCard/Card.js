import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import R from 'ramda'
import moment from 'moment'
import { Card, WingBlank } from 'antd-mobile'

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
  const cert = R.compose(R.propOr('', 'cert'), R.propOr({}, 'profile'))(props)
  const certExpired = R.compose(
    moment,
    R.propOr('', 'cert_expired'),
    R.propOr({}, 'profile')
  )(props)
  const created = R.compose(
    moment,
    R.propOr('', 'created'),
    R.propOr({}, 'profile')
  )(props)

  return (
    <WingBlank>
      <Card>
        <Card.Header title={fullname} extra={Roles[role]} />
        <Card.Body style={styles.container}>
          <View style={styles.item}>
            <Text style={styles.label}>注册日期：</Text>
            <Text style={styles.value}>
              {created.isValid() ? created.format('LL') : ''}
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>行车证号：</Text>
            <Text style={styles.value}>{cert}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>行车证到期日：</Text>
            <Text style={styles.value}>
              {certExpired.isValid() ? certExpired.format('LL') : ''}
            </Text>
          </View>
        </Card.Body>
        <Card.Footer
          extra={<Text style={styles.footer_extra}>{moment().format('HH:mm:ss')}</Text>}
        />
      </Card>
    </WingBlank>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  label: {
    flex: 1,
    fontWeight: '500',
    marginLeft: '10%'
  },
  value: {
    flex: 2
  },
  footer_extra: {
    alignSelf: 'flex-end'
  }
})

export default DriverCard
