import React from 'react'
import { DriverMain } from '../../modules/driver/containers'

class DriverMainScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  render() {
    return <DriverMain />
  }
}

export default DriverMainScreen
