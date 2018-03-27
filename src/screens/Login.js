import { Text, View, StyleSheet } from 'react-native'

import { LoginForm } from '../modules/auth/containers'
import { Logo } from '../modules/auth/components'
import React from 'react'

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <LoginForm />
        <View style={styles.copyright}>
          <Text style={styles.copyrightText}>2018</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64'
  },
  copyright: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 12
  },
  copyrightText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  }
})

export default Login
