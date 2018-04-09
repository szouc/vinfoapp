import React from 'react'
import { FuelMain } from '../../modules/fuel/containers'

class FuelMainScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  render() {
    return <FuelMain />
  }
}

export default FuelMainScreen
