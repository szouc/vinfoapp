import React from 'react'
import { TransportMain } from '../../modules/transport/containers'

class MainScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  render() {
    return <TransportMain />
  }
}

export default MainScreen
