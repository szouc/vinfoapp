import React from 'react'
import { View } from 'react-native'
import {
  BackToMainButton,
  AcceptList
} from '../../modules/transport/containers'
import { WhiteSpace } from 'antd-mobile'

class AcceptScreen extends React.PureComponent {
  static navigationOptions = {
    title: '运输记录',
    headerLeft: <BackToMainButton />
  }

  render() {
    return (
      <View>
        <WhiteSpace size='xl' />
        <AcceptList />
      </View>
    )
  }
}

export default AcceptScreen
