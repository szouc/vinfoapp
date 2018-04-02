import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, StatusBar } from 'react-native'
import { getLocalLoggedIn } from '../modules/auth/api/localStorage'
import { NavigationActions } from 'react-navigation'

class AuthLoading extends Component {
  componentDidMount = async () => {
    const isLoggedIn = await getLocalLoggedIn()
    const navAction = NavigationActions.navigate(
      isLoggedIn ? { routeName: 'App' } : { routeName: 'Login' }
    )
    this.props.navigation.dispatch(navAction)
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AuthLoading
