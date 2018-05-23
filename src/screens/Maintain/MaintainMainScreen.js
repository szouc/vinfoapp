import React from 'react'
import { MaintainMain } from '../../modules/maintain/containers'

class MainScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  render() {
    return <MaintainMain />
  }
}

export default MainScreen
