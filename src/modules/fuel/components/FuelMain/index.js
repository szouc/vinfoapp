import React, { Component } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'
import FuelGrid from '../FuelGrid'
import DefaultVehiclePicker from '../DefaultVehiclePicker'
import { ErrorBoundary } from '../../../shared'
import { ActivityIndicator, WingBlank, WhiteSpace } from 'antd-mobile'
import Carousel from '../Carousel'

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
        <View style={styles.carousel}>
          <Carousel />
        </View>
        <WhiteSpace size='xl' />
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel: {
    flex: 3,
    alignSelf: 'center',
    justifyContent: 'flex-start'
  },
  vehicle: {
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  grid: {
    flex: 4,
    justifyContent: 'flex-start',
    alignSelf: 'stretch'
  }
})

export default FuelMain
