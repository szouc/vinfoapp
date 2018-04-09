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
        <View style={styles.title}>
          <Text>加油页面</Text>
        </View>
        <View style={styles.grid}>
          <FuelGrid />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  grid: {
    flex: 2
  }
})

export default FuelMainScreen
