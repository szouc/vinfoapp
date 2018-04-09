import React from 'react'
import { FlatList, BackHandler } from 'react-native'
import FuelCard from './FuelCard'
import { WingBlank } from 'antd-mobile'

class FuelFetchFlatList extends React.PureComponent {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
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
    return (
      <WingBlank>
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
