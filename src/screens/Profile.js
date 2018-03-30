import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { ProfileCard } from '../modules/driver/containers'

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileCard />
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
