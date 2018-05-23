import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

class Welcome extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(
        NavigationActions.navigate({ routeName: 'AuthLoading' })
      )
    }, 2000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../images/splash.jpg')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#55f'
  }
})

export default Welcome
