import React, { Component } from 'react'
import { Text } from 'react-native'

// import AppWithNavigationState from './App'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

const store = configureStore()

class Vinfo extends Component {
  render() {
    return (
      <Provider store={store}>
        <Text>Hello React Native!</Text>
      </Provider>
    )
  }
}

export default Vinfo
