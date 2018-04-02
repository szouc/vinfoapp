import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.title}>World!</Text>
        <Button
          title='Goto AuthLoading'
          onPress={() =>
            this.props.navigation.dispatch(
              NavigationActions.navigate({ routeName: 'AuthLoading' })
            )
          }
          style={styles.title1}
        />
        <Text style={styles.title1}>By!</Text>
        <Button
          title='Goto Login'
          onPress={() =>
            this.props.navigation.dispatch(
              NavigationActions.navigate({ routeName: 'App' })
            )
          }
          style={styles.title1}
        />
        <Text style={styles.title1}>SZOUC!</Text>
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
  },

  title: {
    flex: 1,
    fontWeight: '800'
  },

  title1: {
    flex: 2,
    color: '#5ff'
  }
})

export default Welcome
