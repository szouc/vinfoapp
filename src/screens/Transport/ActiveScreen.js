import React from 'react'
import { View } from 'react-native'
import {
  BackToMainButton,
  ActiveList
} from '../../modules/transport/containers'
import { WhiteSpace } from 'antd-mobile'

class ActiveScreen extends React.PureComponent {
  static navigationOptions = {
    title: '运输记录',
    headerLeft: <BackToMainButton />
  }

  render() {
    return (
      <View>
        <WhiteSpace size='xl' />
        <ActiveList />
      </View>
    )
  }
}

export default ActiveScreen
