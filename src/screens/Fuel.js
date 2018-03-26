import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fuel</Text>
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
