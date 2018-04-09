import React from 'react'
import { BackButton, FuelAddForm } from '../../modules/fuel/containers'

class FuelAddScreen extends React.Component {
  static navigationOptions = {
    title: '加油记录',
    headerLeft: <BackButton />
  }

  render() {
    return <FuelAddForm />
  }
}

export default FuelAddScreen
