import React from 'react'
import { FlatList, BackHandler, View, Text } from 'react-native'
import Card from './Card'
import { WingBlank, ActivityIndicator } from 'antd-mobile'

class ActiveFlatList extends React.PureComponent {
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

  _renderItem = ({ item, index }) => {
    const NavToSubmit = this.props.NavToSubmit(item._id)
    return (
      <Card transport={item} index={index} NavToSubmit={NavToSubmit} />
    )
  }

  _getItemLayout = (data, index) => ({
    length: 300,
    offset: 300 * index,
    index
  })

  render() {
    return (
      <WingBlank>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={this.props.loading}
        />
        <FlatList
          data={this.props.transports}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          getItemLayout={this._getItemLayout}
          ListFooterComponent={
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                height: 100
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

export default ActiveFlatList
