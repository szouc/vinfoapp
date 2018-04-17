import React from 'react'
import { FlatList, BackHandler } from 'react-native'
import Card from './Card'
import { WingBlank } from 'antd-mobile'

class AcceptFlatList extends React.PureComponent {
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

  _renderItem = ({ item }) => <Card transport={item} />

  _getItemLayout = (data, index) => ({
    length: 120,
    offset: 120 * index,
    index
  })

  render() {
    return (
      <WingBlank>
        <FlatList
          data={this.props.transports}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          getItemLayout={this._getItemLayout}
        />
      </WingBlank>
    )
  }
}

export default AcceptFlatList
