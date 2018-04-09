import React from 'react'
import { View } from 'react-native'
import { BackButton, FuelFetchFlatList } from '../../modules/fuel/containers'
import { WhiteSpace } from 'antd-mobile'

class FuelFetchScreen extends React.PureComponent {
  static navigationOptions = {
    title: '加油记录',
    headerLeft: <BackButton />
  }

  render() {
    return (
      <View>
        <WhiteSpace size='xl' />
        <FuelFetchFlatList />
      </View>
    )
  }
}

export default FuelFetchScreen
