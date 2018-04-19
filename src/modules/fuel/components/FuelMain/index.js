import React, { Component } from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native'
import FuelGrid from '../FuelGrid'
import DefaultVehiclePicker from '../DefaultVehiclePicker'
import { ErrorBoundary } from '../../../shared'
import { ActivityIndicator, WingBlank } from 'antd-mobile'

class FuelMain extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    this.props.getDriverVehicles(this.props.username)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    return false
  }

  render() {
    const {
      currentVehicle,
      vehicles,
      navToAdd,
      navToFetch,
      setVehicle
    } = this.props
    return (
      <View style={styles.container}>
        <ActivityIndicator toast text='载入中...' animating={this.props.loading} />
        <View style={styles.title}>
          <Text>加油页面</Text>
        </View>
        <View style={styles.vehicle}>
          <WingBlank>
            <DefaultVehiclePicker
              currentVehicle={currentVehicle}
              vehicles={vehicles}
              setVehicle={setVehicle}
            />
          </WingBlank>
        </View>
        <View style={styles.grid}>
          <ErrorBoundary>
            <FuelGrid navToAdd={navToAdd} navToFetch={navToFetch} />
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
