import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { ProfileCard } from '../modules/driver/containers'
import { LogoutButton } from '../modules/auth/containers'
import { WhiteSpace } from 'antd-mobile'

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileCard />
        <WhiteSpace size='xl' />
        <LogoutButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Login
