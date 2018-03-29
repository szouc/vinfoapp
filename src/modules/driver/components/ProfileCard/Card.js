import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'antd-mobile'

const DriverCard = props => {
  const profile = props.profile || {}
  return (
    <Card>
      <Card.Header
        title={profile.fullname ? profile.fullname : ''}
        extra={profile.role ? profile.role : ''}
      />
      <Card.Body>
        <View style={styles.container}>
          <Text style={styles.item}>
            驾驶证号： {profile.license ? profile.license : ''}
          </Text>
          <Text style={styles.item}>
            行车证到期日： {profile.cert_expired ? profile.cert_expired : ''}
          </Text>
        </View>
      </Card.Body>
      <Card.Footer />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    flex: 1
  }
})

export default DriverCard
