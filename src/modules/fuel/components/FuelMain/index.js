import React, { Component } from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native'
import FuelGrid from '../FuelGrid'
import DefaultVehiclePicker from '../DefaultVehiclePicker'
import { ErrorBoundary } from '../../../shared'

class FuelMain extends Component {
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
    const {
      username,
      currentVehicle,
      vehicles,
      navToAdd,
      navToFetch,
      getDriverVehicles,
      setVehicle
    } = this.props
    const getUserVehicles = getDriverVehicles(username)
    const navToUserAdd = navToAdd(username)
    const navToUserFetch = navToFetch(username)
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>加油页面</Text>
        </View>
        <View style={styles.vehicle}>
          <DefaultVehiclePicker
            currentVehicle={currentVehicle}
            vehicles={vehicles}
            getUserVehicles={getUserVehicles}
            setVehicle={setVehicle}
          />
        </View>
        <View style={styles.grid}>
          <ErrorBoundary>
            <FuelGrid
              navToUserAdd={navToUserAdd}
              navToUserFetch={navToUserFetch}
            />
          </ErrorBoundary>
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
  vehicle: {
    flex: 1
  },
  grid: {
    flex: 2
  }
})

export default FuelMain
