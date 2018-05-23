import React from 'react'
import { View } from 'react-native'
import { BackButton, MaintainFetchFlatList } from '../../modules/maintain/containers'
import { WhiteSpace } from 'antd-mobile'

class FetchScreen extends React.PureComponent {
  static navigationOptions = {
    title: '维修记录',
    headerLeft: <BackButton />
  }

  render() {
    return (
      <View>
        <WhiteSpace size='xl' />
        <MaintainFetchFlatList />
      </View>
    )
  }
}

export default FetchScreen
