import React from 'react'
import { FlatList, BackHandler, View, Text } from 'react-native'
import FuelCard from './FuelCard'
import { ActivityIndicator, WingBlank, WhiteSpace } from 'antd-mobile'
import DefaultVehiclePicker from '../DefaultVehiclePicker'

class FuelFetchFlatList extends React.PureComponent {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    this.props.currentVehicle &&
      this.props.fetchVehicleFuels(this.props.username)([
        this.props.currentVehicle._id
      ])
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.backToMain()
    return true
  }

  _keyExtractor = (item, index) => item._id

  _renderItem = ({ item }) => <FuelCard fuel={item} />

  _getItemLayout = (data, index) => ({
    length: 120,
    offset: 120 * index,
    index
  })

  render() {
    const { username, currentVehicle, vehicles, fetchVehicleFuels } = this.props
    const fetchUserFuels = fetchVehicleFuels(username)
    return (
      <WingBlank>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={this.props.loading}
        />
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
          getItemLayout={this._getItemLayout}
          ListFooterComponent={
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                height: 300
              }}
            >
              <Text>已经到底了！</Text>
            </View>
          }
        />
      </WingBlank>
    )
  }
}

export default FuelFetchFlatList
