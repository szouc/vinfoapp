import React from 'react'
import { FlatList, BackHandler, View, Text } from 'react-native'
import MaintainCard from './MaintainCard'
import { ActivityIndicator, WingBlank, WhiteSpace } from 'antd-mobile'
import DefaultVehiclePicker from '../DefaultVehiclePicker'

class FetchFlatList extends React.PureComponent {
  constructor(props) {
    super(props)
    this.fetchUserMaintains = props.fetchMaintains(props.username)
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    this.props.currentVehicle &&
      this.fetchUserMaintains([this.props.currentVehicle._id])
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.backToMain()
    return true
  }

  _keyExtractor = (item, index) => item._id

  _renderItem = ({ item }) => <MaintainCard item={item} />

  _getItemLayout = (data, index) => ({
    length: 120,
    offset: 120 * index,
    index
  })

  render() {
    const { loading, currentVehicle, vehicles, maintains } = this.props
    return (
      <WingBlank>
        <ActivityIndicator toast text='载入中...' animating={loading} />
        <DefaultVehiclePicker
          currentVehicle={currentVehicle}
          vehicles={vehicles}
          setVehicle={this.fetchUserMaintains}
        />
        <WhiteSpace size='xl' />
        <FlatList
          data={maintains}
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

export default FetchFlatList
