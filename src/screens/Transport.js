import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LogoutButton } from '../modules/auth/containers'

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Transport</Text>
        <LogoutButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f'
  },

  title: {
    fontWeight: '800'
  }
})

export default Login
