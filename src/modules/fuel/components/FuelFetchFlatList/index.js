import React from 'react'
import { FlatList, BackHandler } from 'react-native'
import FuelCard from './FuelCard'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import DefaultVehiclePicker from '../DefaultVehiclePicker'

class FuelFetchFlatList extends React.PureComponent {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    this.props.fetchVehicleFuels(this.props.username)([
      this.props.currentVehicle._id
    ])
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.backToMain(this.props.username)
    return true
  }

  _keyExtractor = (item, index) => item._id
  _renderItem = ({ item }) => <FuelCard fuel={item} />

  render() {
    const { username, currentVehicle, vehicles, fetchVehicleFuels } = this.props
    const fetchUserFuels = fetchVehicleFuels(username)
    return (
      <WingBlank>
        <DefaultVehiclePicker
          currentVehicle={currentVehicle}
          vehicles={vehicles}
          setVehicle={fetchUserFuels}
        />
        <WhiteSpace size='xl' />
        <FlatList
          data={this.props.fuels}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </WingBlank>
    )
  }
}

export default FuelFetchFlatList
