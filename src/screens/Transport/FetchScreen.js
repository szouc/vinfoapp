import React from 'react'
import { View } from 'react-native'
import {
  BackToMainButton,
  FetchList
} from '../../modules/transport/containers'
import { WhiteSpace } from 'antd-mobile'

class FetchScreen extends React.PureComponent {
  static navigationOptions = {
    title: '运输界面',
    headerLeft: <BackToMainButton />
  }

  render() {
    return (
      <View>
        <WhiteSpace size='xl' />
        <FetchList />
      </View>
    )
  }
}

export default FetchScreen
