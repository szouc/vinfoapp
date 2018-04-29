import React from 'react'
import { View } from 'react-native'
import {
  BackToMainButton,
  CheckList
} from '../../modules/transport/containers'
import { WhiteSpace } from 'antd-mobile'

class CheckScreen extends React.PureComponent {
  static navigationOptions = {
    title: '运输界面',
    headerLeft: <BackToMainButton />
  }

  render() {
    return (
      <View>
        <WhiteSpace size='xl' />
        <CheckList />
      </View>
    )
  }
}

export default CheckScreen
