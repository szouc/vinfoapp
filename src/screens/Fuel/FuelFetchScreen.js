import React from 'react'
import { BackButton, FuelFetchFlatList } from '../../modules/fuel/containers'

class FuelFetchScreen extends React.PureComponent {
  static navigationOptions = {
    title: '加油记录',
    headerLeft: <BackButton />
  }

  render() {
    return <FuelFetchFlatList />
  }
}

export default FuelFetchScreen
