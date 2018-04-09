import React from 'react'
import { FlatList, BackHandler } from 'react-native'
import FuelCard from './FuelCard'

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
      <FlatList
        data={this.props.fuels}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

export default FuelFetchFlatList
