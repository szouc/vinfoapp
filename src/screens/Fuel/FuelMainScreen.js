import React, { Component } from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native'
import { FuelGrid } from '../../modules/fuel/containers'

class FuelMainScreen extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    return false
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fuel</Text>
        <FuelGrid />
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

export default FuelMainScreen
